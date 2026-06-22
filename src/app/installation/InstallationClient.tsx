'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function InstallationClient() {
  const { t } = useLanguage()
  const p = t.installationPage

  return (
    <>
      {/* 页眉 */}
      <div className="py-24 bg-charcoal-800 relative overflow-hidden">
        <div className="absolute inset-0 tile-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <span className="section-label">{p.label}</span>
          <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
          <h1
            className="text-warm-100 font-light mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
          >
            {p.title}
          </h1>
          <p className="text-warm-500 text-base max-w-xl leading-relaxed">
            {p.subtitle}
          </p>
        </div>
      </div>

      {/* 安装流程 */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="section-label">{p.stepsLabel}</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">{p.stepsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-700">
            {p.installSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-charcoal-800 p-8 group hover:bg-charcoal-700 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-gold-500 text-3xl font-light leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-8 h-px bg-gold-500/30 mt-4" />
                </div>
                <h3 className="text-warm-100 font-medium text-base mb-3">{step.title}</h3>
                <p className="text-charcoal-200 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 技术支持服务 */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="section-label">{p.servicesLabel}</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">{p.servicesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {p.services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-gold-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-gold-500" />
                  </div>
                  <h3 className="text-warm-100 text-sm font-medium">{s.title}</h3>
                </div>
                <p className="text-charcoal-200 text-sm leading-relaxed pl-8">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 注意事项 */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <span className="section-label">{p.noticesLabel}</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">{p.noticesTitle}</h2>
          </div>

          <div className="space-y-4">
            {p.notices.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 py-4 border-b border-charcoal-700"
              >
                <span className="text-gold-600 text-[10px] tracking-widest flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-warm-400 text-sm leading-relaxed">{n}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 border border-charcoal-700 bg-charcoal-800">
            <p className="text-charcoal-200 text-sm leading-relaxed mb-5">
              {p.bottomNote}
            </p>
            <Link href="/contact" className="btn-gold text-sm inline-flex">
              {p.contactSupport}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
