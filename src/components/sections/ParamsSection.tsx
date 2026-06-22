'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function ParamsSection() {
  const { t } = useLanguage()
  const params = t.params.items
  return (
    <section className="py-20 lg:py-28 bg-warm-100 relative overflow-hidden">
      {/* 背景纹理 */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 24px, rgba(17,17,17,0.02) 24px, rgba(17,17,17,0.02) 25px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* 左侧标题 */}
          <div>
            <SectionTitle
              label={t.params.label}
              title={t.params.title}
              subtitle={t.params.subtitle}
              light={false}
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-xs text-warm-500 leading-relaxed max-w-xs"
            >
              {t.params.sideNote}
            </motion.p>
          </div>

          {/* 右侧参数面板 */}
          <div>
            <div className="divide-y divide-warm-300/50">
              {params.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-between py-4 group"
                >
                  <span className="text-warm-600 text-sm">{p.label}</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-charcoal-700 font-medium text-base">{p.value}</span>
                    {p.unit && (
                      <span className="text-warm-500 text-xs">{p.unit}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 底部注释 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6 pt-5 border-t border-warm-300/50"
            >
              <p className="text-warm-500 text-xs leading-relaxed">
                {t.params.bottomNote}
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
