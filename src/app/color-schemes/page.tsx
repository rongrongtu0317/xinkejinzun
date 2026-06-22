'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { colorOptions, colorSchemes } from '@/data/colors'
import SectionTitle from '@/components/ui/SectionTitle'
import CTASection from '@/components/sections/CTASection'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { pick } from '@/lib/i18n/translations'

export default function ColorSchemesPage() {
  const { t, lang } = useLanguage()
  const [activeScheme, setActiveScheme] = useState(colorSchemes[0].id)
  const [activeColor, setActiveColor] = useState(colorOptions[0].id)

  const currentScheme = colorSchemes.find((s) => s.id === activeScheme)!

  return (
    <div className="pt-20 bg-charcoal-900 min-h-screen">
      {/* 页面标题 */}
      <div className="py-24 bg-charcoal-800 relative overflow-hidden">
        <div className="absolute inset-0 tile-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionTitle
              label={t.colorSchemesPage.label}
              title={t.colorSchemesPage.title}
              subtitle={t.colorSchemesPage.subtitle}
            />
          </motion.div>
        </div>
      </div>

      {/* 配色方案导航 */}
      <section className="py-16 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-8">
            <span className="section-label">{t.colorSchemesPage.byStyleLabel}</span>
            <div className="w-10 h-px bg-gold-500 my-3 opacity-70" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-charcoal-700 mb-16">
            {colorSchemes.map((scheme) => (
              <button
                key={scheme.id}
                onClick={() => setActiveScheme(scheme.id)}
                className={`p-5 text-left transition-all duration-300 ${
                  activeScheme === scheme.id
                    ? 'bg-charcoal-700'
                    : 'bg-charcoal-800 hover:bg-charcoal-700'
                }`}
              >
                <span className={`text-xs tracking-wider block mb-1 ${activeScheme === scheme.id ? 'text-gold-500' : 'text-charcoal-300'}`}>
                  {pick(scheme.style, lang)}
                </span>
                <span className={`text-sm font-light ${activeScheme === scheme.id ? 'text-warm-100' : 'text-warm-400'}`}>
                  {pick(scheme.name, lang)}
                </span>
              </button>
            ))}
          </div>

          {/* 当前配色方案详情 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScheme}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* 配色方案效果图（在 src/data/colors.ts 的 image 字段维护，每个方案一张独立图） */}
              <div className="relative h-72 lg:h-96 overflow-hidden bg-charcoal-700">
                <Image
                  src={currentScheme.image}
                  alt={pick(currentScheme.name, lang)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white/40 text-[10px] tracking-widest uppercase mb-1">{t.colorSchemesPage.schemeLabel}</p>
                  <p className="text-white text-xl font-light">{pick(currentScheme.name, lang)}</p>
                </div>
              </div>

              {/* 方案说明 */}
              <div>
                <h2 className="text-warm-100 font-light text-2xl mb-4">{pick(currentScheme.name, lang)}</h2>
                <p className="text-warm-400 text-sm leading-relaxed mb-8">{pick(currentScheme.description, lang)}</p>

                {/* 推荐颜色 */}
                <div className="mb-8">
                  <p className="text-[10px] text-charcoal-300 tracking-widest uppercase mb-4">{t.colorSchemesPage.recommendedColors}</p>
                  <div className="flex gap-3">
                    {currentScheme.colors.map((cId) => {
                      const c = colorOptions.find((co) => co.id === cId)!
                      return (
                        <div key={cId} className="flex flex-col items-center gap-2">
                          <div
                            className="w-12 h-12 rounded-sm"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className="text-[10px] text-charcoal-200">{pick(c.name, lang)}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <Link href="/contact" className="btn-gold text-sm inline-flex">
                  {t.colorSchemesPage.getSchemeQuote}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 全部颜色展示 */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="section-label">{t.colorSchemesPage.allColorsLabel}</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">{t.colorSchemesPage.allColorsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-700">
            {colorOptions.map((color, i) => (
              <motion.button
                key={color.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                onClick={() => setActiveColor(color.id)}
                className={`p-0 text-left group ${activeColor === color.id ? 'ring-1 ring-gold-500' : ''}`}
              >
                {/* 颜色大色块 */}
                <div
                  className="h-32 relative overflow-hidden"
                  style={{ backgroundColor: color.hex }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${color.hex} 0%, ${color.secondaryHex} 100%)`,
                    }}
                  />
                  {/* 瓦片纹理叠加 */}
                  <svg className="absolute inset-0 w-full h-full opacity-[0.1]" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <pattern id={`swatch-${color.id}`} x="0" y="0" width="40" height="24" patternUnits="userSpaceOnUse">
                        <path d="M0 24 L20 0 L40 24 Z" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="0.6"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#swatch-${color.id})`} />
                  </svg>
                </div>

                {/* 颜色信息 */}
                <div className="p-4 bg-charcoal-800 group-hover:bg-charcoal-700 transition-colors duration-300">
                  <h3 className="text-warm-200 text-sm font-medium mb-1">{pick(color.name, lang)}</h3>
                  <p className="text-charcoal-200 text-xs line-clamp-2 leading-relaxed">{pick(color.description, lang)}</p>
                  <p className="text-charcoal-300 text-[10px] mt-2">{pick(color.buildingStyle, lang)}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <p className="text-charcoal-300 text-xs mt-8 leading-relaxed">
            {t.colorSchemesPage.bottomNote}
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
