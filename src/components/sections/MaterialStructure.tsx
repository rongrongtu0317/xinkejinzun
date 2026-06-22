'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

// 颜色与高度（结构性，与语言无关）；名称/说明从语言包按序号取
const layerStyles = [
  { color: 'rgba(58,164,94,0.9)',  height: '28px' },
  { color: 'rgba(160,128,80,0.85)', height: '36px' },
  { color: 'rgba(100,100,100,0.8)', height: '16px' },
  { color: 'rgba(80,100,120,0.9)',  height: '40px' },
  { color: 'rgba(60,70,80,0.85)',   height: '20px' },
]

interface Layer { name: string; desc: string; color: string; height: string }

function LayerBar({ layer, index }: { layer: Layer; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40, width: '20%' }}
      whileInView={{ opacity: 1, x: 0, width: '100%' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex items-center gap-6 group cursor-default"
    >
      {/* 色条 */}
      <div
        className="flex-shrink-0 rounded-sm transition-all duration-300 group-hover:opacity-100"
        style={{
          backgroundColor: layer.color,
          height: layer.height,
          width: '180px',
          minWidth: '120px',
        }}
      />

      {/* 文字说明 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-1">
          <span className="text-[10px] text-gold-600 tracking-widest">{String(index + 1).padStart(2, '0')}</span>
          <h4 className="text-warm-100 text-sm font-medium">{layer.name}</h4>
        </div>
        <p className="text-charcoal-200 text-xs leading-relaxed max-w-xs hidden md:block">
          {layer.desc}
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function MaterialStructure() {
  const ref = useRef<HTMLElement>(null)
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineH = useTransform(scrollYProgress, [0.1, 0.6], ['0%', '100%'])

  const layers: Layer[] = t.material.layers.map((l, i) => ({
    name: l.name,
    desc: l.desc,
    color: layerStyles[i].color,
    height: layerStyles[i].height,
  }))

  return (
    <section
      ref={ref}
      className="py-24 lg:py-36 bg-charcoal-800 relative overflow-hidden"
    >
      {/* 背景金属拉丝纹理 */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 3px, #3aa45e 3px, #3aa45e 4px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* 左侧标题 + 说明 */}
          <div className="lg:sticky lg:top-32">
            <SectionTitle
              label={t.material.label}
              title={t.material.title}
              subtitle={t.material.subtitle}
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-10 p-5 border border-charcoal-600"
            >
              <p className="text-charcoal-100 text-xs leading-loose">
                {t.material.note}
              </p>
            </motion.div>

            {/* 滚动进度线 */}
            <div className="relative mt-10 h-40 w-px bg-charcoal-700 hidden lg:block">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gold-500"
                style={{ height: lineH }}
              />
            </div>
          </div>

          {/* 右侧结构层分解图 */}
          <div className="flex flex-col gap-3">
            {/* 顶部标注 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-px bg-gold-500 opacity-50" />
              <span className="text-[10px] text-charcoal-200 tracking-widest uppercase">{t.material.sectionLabel}</span>
              <div className="flex-1 h-px bg-charcoal-700" />
            </motion.div>

            {layers.map((layer, i) => (
              <LayerBar key={layer.name} layer={layer} index={i} />
            ))}

            {/* 底部尺寸标注 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-6 pt-6 border-t border-charcoal-700 flex items-center justify-between"
            >
              <span className="text-[10px] text-charcoal-300 tracking-wider">{t.material.thicknessLabel}</span>
              <span className="text-gold-500 text-sm font-light tracking-widest">{t.material.thicknessValue}</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
