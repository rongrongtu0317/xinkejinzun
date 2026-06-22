// 图片自动优化脚本（构建时 / 上传前运行）
// 用法：
//   npm run optimize-images            把 images-src/ 里的原图优化后输出到 public/images/
//   npm run optimize-images:inplace    直接压缩 public/images/ 里现有的图（就地覆盖，一次性清理用）
//
// 原理：静态导出站点没有服务器做实时优化，所以在“上传前”用 sharp 一次性把图
//       缩放到各位置的推荐尺寸 + 压缩，访客下载到的就是优化后的小图。
//
// 用法细节见同目录下的 images-src/读我.txt

import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 关闭 libvips 文件缓存/内存映射，避免就地覆盖(inplace)时 Windows 文件句柄占用导致读写冲突
sharp.cache(false)

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC_DIR = path.join(ROOT, 'images-src')
const PUB_DIR = path.join(ROOT, 'public', 'images')

const INPLACE = process.argv.includes('--inplace')

// 各位置的优化预设：w = 最大宽度(px，按比例缩放、不放大)，q = JPG 质量(0-100)
const PRESETS = {
  __root__:     { w: 1920, q: 82 },  // 根目录：hero-bg.jpg 首页大图
  __hero__:     { w: 1600, q: 82 },  // products/*-hero.jpg 详情页大图
  products:     { w: 900,  q: 80 },  // 产品列表卡片
  categories:   { w: 900,  q: 80 },  // 产品分类网格
  app:          { w: 1000, q: 80 },  // 应用场景
  mfg:          { w: 1200, q: 80 },  // 制造实力
  cases:        { w: 1600, q: 80 },  // 工程案例封面
  colors:       { w: 1200, q: 80 },  // 配色方案效果图
  about:        { w: 1200, q: 80 },  // 关于我们
}
const DEFAULT_PRESET = { w: 1600, q: 80 }

const IMG_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp'])

function presetFor(relPath) {
  const parts = relPath.split(path.sep)
  const top = parts.length > 1 ? parts[0] : '__root__'
  const base = path.basename(relPath).toLowerCase()
  if (top === 'products' && base.includes('-hero')) return PRESETS.__hero__
  return PRESETS[top] ?? DEFAULT_PRESET
}

async function walk(dir) {
  let out = []
  let entries
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) out = out.concat(await walk(full))
    else if (IMG_EXT.has(path.extname(e.name).toLowerCase())) out.push(full)
  }
  return out
}

function fmt(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / 1024 / 1024).toFixed(2) + ' MB'
  return (bytes / 1024).toFixed(0) + ' KB'
}

async function main() {
  const fromDir = INPLACE ? PUB_DIR : SRC_DIR
  console.log(`\n图片优化 — 模式：${INPLACE ? '就地压缩 public/images/' : 'images-src/ → public/images/'}\n`)

  const files = await walk(fromDir)
  if (files.length === 0) {
    if (INPLACE) {
      console.log('public/images/ 下没找到图片。')
    } else {
      console.log('images-src/ 下没找到图片。')
      console.log('请把原图按 public/images 里相同的子目录结构放进 images-src/，例如：')
      console.log('  images-src/cases/renovation-chengdu-cover.jpg')
      console.log('  images-src/products/milan-hero.jpg')
      console.log('  images-src/hero-bg.jpg\n')
    }
    return
  }

  let totalIn = 0, totalOut = 0, ok = 0, fail = 0
  for (const file of files) {
    const rel = path.relative(fromDir, file)
    const preset = presetFor(rel)
    // 输出路径：统一为 .jpg（站点全部引用 .jpg）
    const relJpg = rel.replace(/\.(jpe?g|png|webp)$/i, '.jpg')
    const outPath = path.join(PUB_DIR, relJpg)

    try {
      const inStat = await fs.stat(file)
      // 先把原文件整个读进内存再交给 sharp，立即释放文件句柄——这样 inplace 覆盖同名文件才安全
      const inputBuf = await fs.readFile(file)
      const buf = await sharp(inputBuf)
        .rotate() // 按 EXIF 方向自动转正
        .resize({ width: preset.w, withoutEnlargement: true })
        .jpeg({ quality: preset.q, mozjpeg: true })
        .toBuffer()

      await fs.mkdir(path.dirname(outPath), { recursive: true })
      await fs.writeFile(outPath, buf)

      totalIn += inStat.size
      totalOut += buf.length
      ok++
      const tag = buf.length < inStat.size ? '↓' : '·'
      console.log(`${tag} ${relJpg.padEnd(42)} ${fmt(inStat.size).padStart(9)} → ${fmt(buf.length).padStart(9)}  (≤${preset.w}px)`)
    } catch (err) {
      fail++
      const isHeic = /\.(heic|heif)$/i.test(file)
      console.log(`✗ ${rel} 失败：${err.message}`)
      if (isHeic) console.log('   提示：HEIC 格式可能不支持，请先转成 JPG/PNG 再放进来。')
    }
  }

  console.log(`\n完成：成功 ${ok} 张${fail ? `，失败 ${fail} 张` : ''}`)
  if (ok) console.log(`总体积：${fmt(totalIn)} → ${fmt(totalOut)}（节省 ${totalIn > totalOut ? (100 - totalOut / totalIn * 100).toFixed(0) : 0}%）\n`)
}

main().catch((e) => { console.error(e); process.exit(1) })
