'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function AboutClient() {
  const { t } = useLanguage()
  const a = t.aboutPage

  return (
    <>
      {/* 大标题区 */}
      <div className="relative py-28 lg:py-40 bg-charcoal-800 overflow-hidden">
        <div className="absolute inset-0 tile-pattern" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(58,164,94,0.06) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <span className="section-label">{a.label}</span>
          <div className="w-10 h-px bg-gold-500 my-5 opacity-70" />
          <h1
            className="text-warm-100 font-light leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', letterSpacing: '-0.025em' }}
          >
            {a.heroTitle1}<br />
            <span className="text-warm-400">{a.heroTitle2}</span>
          </h1>
        </div>
      </div>

      {/* 企业简介 */}
      <section className="py-24 bg-warm-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* 左侧文案 */}
            <div>
              <span className="section-label text-gold-700">{a.introLabel}</span>
              <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
              <h2 className="text-charcoal-800 font-light text-2xl mb-6 leading-snug">
                {a.whoTitle}
              </h2>
              <p className="text-warm-600 text-sm leading-loose mb-5">{a.whoP1}</p>
              <p className="text-warm-600 text-sm leading-loose mb-5">{a.whoP2}</p>
              <p className="text-warm-600 text-sm leading-loose">{a.whoP3}</p>
            </div>

            {/* 右侧工厂实景图 */}
            <div className="relative h-80 lg:h-auto min-h-64 overflow-hidden">
              <Image
                src="/images/about/factory.jpg"
                alt={a.factoryAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 制造能力 */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="section-label">{a.capLabel}</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">{a.capTitle}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-charcoal-700">
            {a.capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                id={['capability', 'quality', 'products', 'service'][i]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-charcoal-800 p-10 group hover:bg-charcoal-700 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[10px] text-gold-600 tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-6 h-px bg-gold-500/30" />
                </div>
                <h3 className="text-warm-100 font-medium text-lg mb-4">{cap.title}</h3>
                <p className="text-warm-500 text-sm leading-loose">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 生产流程 */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="section-label">{a.processLabel}</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">{a.processTitle}</h2>
          </div>

          <div className="relative">
            {/* 连接线 */}
            <div className="absolute top-8 left-0 right-0 h-px bg-charcoal-600 hidden lg:block" />

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0">
              {a.processSteps.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative flex flex-col items-center text-center px-4"
                >
                  {/* 节点圆圈 */}
                  <div className="relative z-10 w-16 h-16 border border-gold-600 bg-charcoal-800 flex items-center justify-center mb-4">
                    <span className="text-gold-500 text-xl font-light">{i + 1}</span>
                  </div>
                  <h4 className="text-warm-200 text-sm font-medium">{step}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 企业愿景与价值观 */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">{a.visionLabel}</span>
              <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
              <h2 className="text-warm-100 font-light text-2xl mb-6">{a.visionTitle}</h2>
              <p className="text-warm-400 text-sm leading-loose mb-5">{a.visionP1}</p>
              <p className="text-warm-400 text-sm leading-loose">{a.visionP2}</p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-charcoal-700">
              {a.values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-charcoal-800 p-6 hover:bg-charcoal-700 transition-colors duration-300"
                >
                  <div
                    className="text-gold-500 font-light mb-3"
                    style={{ fontSize: '2rem', letterSpacing: '-0.02em' }}
                  >
                    {v.label}
                  </div>
                  <p className="text-charcoal-200 text-xs leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
