import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // 允许使用本地 public 目录中的图片
    // 如需使用外部图片 CDN，在此添加 remotePatterns
    formats: ['image/webp', 'image/avif'],
    // 允许带括号和中文的路径（unoptimized 模式下直接使用原始文件）
    // 如果 next/image 编码路径有问题，可改为 unoptimized: true
    // unoptimized: true,
  },
}

export default nextConfig
