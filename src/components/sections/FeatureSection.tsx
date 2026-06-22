'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

// 仅保留图标与编号，文案从语言包按序号取
const featureIcons = [
  (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 3L6 18h7v15h10V18h7L18 3z" stroke="#3aa45e" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  ),
  (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" stroke="#3aa45e" strokeWidth="1.2"/>
      <path d="M18 8v10l6 4" stroke="#3aa45e" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  ),
  (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <rect x="4" y="4" width="12" height="12" rx="1" stroke="#3aa45e" strokeWidth="1.2"/>
      <rect x="20" y="4" width="12" height="12" rx="1" stroke="#3aa45e" strokeWidth="1.2" opacity="0.6"/>
      <rect x="4" y="20" width="12" height="12" rx="1" stroke="#3aa45e" strokeWidth="1.2" opacity="0.4"/>
      <rect x="20" y="20" width="12" height="12" rx="1" stroke="#3aa45e" strokeWidth="1.2" opacity="0.8"/>
    </svg>
  ),
  (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M6 18h24M18 6l12 12-12 12" stroke="#3aa45e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
]

export default function FeatureSection() {
  const { t } = useLanguage()
  const features = t.feature.items.map((item, i) => ({
    id: String(i + 1).padStart(2, '0'),
    title: item.title,
    desc: item.desc,
    icon: featureIcons[i],
  }))

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
              label={t.feature.label}
              title={t.feature.title}
              subtitle={t.feature.subtitle}
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
                {t.feature.quote}
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
