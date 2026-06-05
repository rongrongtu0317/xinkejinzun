'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { colorOptions } from '@/data/colors'
import SectionTitle from '@/components/ui/SectionTitle'

export default function ColorSchemeSection() {
  const [active, setActive] = useState(colorOptions[0].id)
  const activeColor = colorOptions.find((c) => c.id === active)!

  return (
    <section className="py-24 lg:py-36 bg-charcoal-900 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

          {/* 左侧标题 + 色卡 */}
          <div className="lg:w-80 flex-shrink-0">
            <SectionTitle
              label="屋面配色"
              title="让屋面颜色成为<br/>建筑气质的一部分"
              subtitle="根据建筑风格、墙面颜色与项目环境，选择更协调的屋面色彩表达。"
              className="mb-10"
            />

            {/* 颜色色卡列表 */}
            <div className="flex flex-wrap gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setActive(color.id)}
                  className={`color-swatch w-10 h-10 rounded-sm ${active === color.id ? 'active' : ''}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={color.name}
                />
              ))}
            </div>

            {/* 当前颜色信息 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="mt-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-5 h-5 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: activeColor.hex }}
                  />
                  <h3 className="text-warm-100 font-medium">{activeColor.name}</h3>
                </div>
                <p className="text-charcoal-200 text-sm leading-relaxed mb-4">
                  {activeColor.description}
                </p>
                <div>
                  <span className="text-[10px] text-charcoal-300 tracking-widest uppercase block mb-2">
                    适用场景
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeColor.suitableFor.map((s) => (
                      <span key={s} className="text-xs text-charcoal-100 border border-charcoal-600 px-2.5 py-1">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <Link href="/color-schemes" className="btn-outline text-xs mt-8 inline-flex">
              查看全部配色方案
            </Link>
          </div>

          {/* 右侧效果图展示区 */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* 屋面效果图占位 — 替换为真实屋面效果图 */}
                {/* 图片替换：<Image src={`/images/colors/${active}.jpg`} fill alt={activeColor.name} className="object-cover" /> */}
                <div
                  className="relative h-80 lg:h-[480px] overflow-hidden"
                  style={{
                    background: `linear-gradient(145deg, ${activeColor.secondaryHex} 0%, ${activeColor.hex} 40%, ${activeColor.secondaryHex} 100%)`,
                  }}
                >
                  {/* 瓦片纹理叠加模拟效果 */}
                  <svg className="absolute inset-0 w-full h-full opacity-[0.12]" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <pattern id={`tile-${active}`} x="0" y="0" width="80" height="48" patternUnits="userSpaceOnUse">
                        <path d="M0 48 L40 0 L80 48 Z" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8"/>
                        <path d="M-40 48 L0 0 L40 48 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
                        <path d="M40 48 L80 0 L120 48 Z" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#tile-${active})`} />
                  </svg>

                  {/* 光晕效果 */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,255,255,0.08) 0%, transparent 70%)',
                    }}
                  />

                  {/* 颜色名标签 */}
                  <div className="absolute bottom-6 left-6">
                    <span className="text-[10px] text-white/60 tracking-widest uppercase block mb-1">屋面色系</span>
                    <span className="text-2xl text-white font-light tracking-wide">{activeColor.name}</span>
                  </div>

                  {/* 右上角建筑风格标签 */}
                  <div className="absolute top-6 right-6">
                    <span className="text-xs text-white/50 border border-white/20 px-3 py-1">
                      {activeColor.buildingStyle}
                    </span>
                  </div>
                </div>

                {/* 底部提示 */}
                <p className="text-charcoal-300 text-xs mt-4">
                  * 屏幕显示颜色与实际产品存在差异，请以实物样品为准。
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
