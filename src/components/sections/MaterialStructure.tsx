'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

const layers = [
  {
    id: 1,
    name: '表层耐候保护层',
    desc: '抵御紫外线、雨水侵蚀，保持色彩长期稳定，延长产品使用寿命。',
    color: 'rgba(58,164,94,0.9)',
    height: '28px',
  },
  {
    id: 2,
    name: '高温烧结彩砂层',
    desc: '天然彩色砂粒经高温烧结固化，呈现自然石材质感，色彩饱满均匀。',
    color: 'rgba(160,128,80,0.85)',
    height: '36px',
  },
  {
    id: 3,
    name: '粘结复合层',
    desc: '将彩砂与基材牢固结合，确保彩砂层不脱落，保证结构整体性。',
    color: 'rgba(100,100,100,0.8)',
    height: '16px',
  },
  {
    id: 4,
    name: '镀铝锌钢板基材',
    desc: '核心承力层，优质镀铝锌处理，提供高强度与优异防腐性能，轻质耐用。',
    color: 'rgba(80,100,120,0.9)',
    height: '40px',
  },
  {
    id: 5,
    name: '背面防护层',
    desc: '背面涂层保护，防止基材在安装过程中受损，延长整体使用寿命。',
    color: 'rgba(60,70,80,0.85)',
    height: '20px',
  },
]

function LayerBar({ layer, index }: { layer: typeof layers[0]; index: number }) {
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
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineH = useTransform(scrollYProgress, [0.1, 0.6], ['0%', '100%'])

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
              label="材料结构"
              title="多层复合结构，<br/>成就稳定屋面性能"
              subtitle="彩石金属瓦由五层复合结构组成，每层针对屋面性能的特定需求设计，确保产品在多种气候条件下的长期稳定表现。"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-10 p-5 border border-charcoal-600"
            >
              <p className="text-charcoal-100 text-xs leading-loose">
                以上结构为标准产品示意，实际产品规格以出厂配置为准。
                如需了解特定项目的产品技术细节，请联系我们获取详细资料。
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
              <span className="text-[10px] text-charcoal-200 tracking-widest uppercase">截面剖析示意</span>
              <div className="flex-1 h-px bg-charcoal-700" />
            </motion.div>

            {layers.map((layer, i) => (
              <LayerBar key={layer.id} layer={layer} index={i} />
            ))}

            {/* 底部尺寸标注 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-6 pt-6 border-t border-charcoal-700 flex items-center justify-between"
            >
              <span className="text-[10px] text-charcoal-300 tracking-wider">常规总厚度参考</span>
              <span className="text-gold-500 text-sm font-light tracking-widest">约 0.4mm 基材</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
