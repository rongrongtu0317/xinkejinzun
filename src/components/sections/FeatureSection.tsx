'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

const features = [
  {
    id: '01',
    title: '轻质高强',
    desc: '镀铝锌钢板基材结合高温烧结彩砂，在保持足够强度的前提下显著降低屋面自重，适合新建与旧房翻新项目。',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 3L6 18h7v15h10V18h7L18 3z" stroke="#3aa45e" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: '02',
    title: '耐候防腐',
    desc: '多层复合结构设计，基材镀铝锌处理，配合耐候保护层，适应多种气候环境，长期保持稳定的屋面表现。',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="14" stroke="#3aa45e" strokeWidth="1.2"/>
        <path d="M18 8v10l6 4" stroke="#3aa45e" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: '03',
    title: '色彩丰富',
    desc: '提供多种颜色与瓦型选择，支持定制颜色匹配，适应现代简约、欧式传统、文旅乡村等不同建筑风格。',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="4" width="12" height="12" rx="1" stroke="#3aa45e" strokeWidth="1.2"/>
        <rect x="20" y="4" width="12" height="12" rx="1" stroke="#3aa45e" strokeWidth="1.2" opacity="0.6"/>
        <rect x="4" y="20" width="12" height="12" rx="1" stroke="#3aa45e" strokeWidth="1.2" opacity="0.4"/>
        <rect x="20" y="20" width="12" height="12" rx="1" stroke="#3aa45e" strokeWidth="1.2" opacity="0.8"/>
      </svg>
    ),
  },
  {
    id: '04',
    title: '安装高效',
    desc: '模块化铺装设计，配件系统完整，包括脊瓦、檐口板、山墙板等，标准化安装流程提升施工效率。',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M6 18h24M18 6l12 12-12 12" stroke="#3aa45e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function FeatureSection() {
  return (
    <section className="py-24 lg:py-32 bg-warm-100 relative overflow-hidden">
      {/* 背景装饰线 */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(17,17,17,0.025) 40px, rgba(17,17,17,0.025) 41px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* 左侧标题 */}
          <div>
            <SectionTitle
              label="核心价值"
              title="从材料结构到屋面效果，<br/>全面提升建筑长期价值"
              subtitle="每一块彩石金属瓦背后，是多层复合结构与严格工艺的支撑，为建筑屋面提供长期稳定的性能保障。"
              light={false}
            />

            {/* 引用块 */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 pl-5 border-l-2 border-gold-500"
            >
              <p className="text-warm-600 text-sm leading-relaxed italic">
                "彩石金属瓦不只是屋面覆盖材料，更是建筑长期价值
                与美观表达的一部分。"
              </p>
            </motion.blockquote>
          </div>

          {/* 右侧四个特性 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                {/* 编号 + 图标行 */}
                <div className="flex items-start justify-between mb-4">
                  <div>{f.icon}</div>
                  <span className="text-[10px] text-warm-500 tracking-widest">{f.id}</span>
                </div>

                <h3 className="text-charcoal-800 font-medium mb-2 text-base">
                  {f.title}
                </h3>
                <p className="text-warm-600 text-sm leading-relaxed">
                  {f.desc}
                </p>

                {/* 底部金线 */}
                <div className="mt-5 h-px bg-gold-500/30 group-hover:bg-gold-500 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
