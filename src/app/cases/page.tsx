'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { cases, caseCategories } from '@/data/cases'
import FilterTabs from '@/components/ui/FilterTabs'
import CTASection from '@/components/sections/CTASection'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { pick } from '@/lib/i18n/translations'

export default function CasesPage() {
  const { t, lang } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const categoryOptions = caseCategories.map((c) => ({ slug: c.slug, name: pick(c.name, lang) }))

  const filtered = useMemo(() =>
    activeFilter === 'all'
      ? cases
      : cases.filter((c) => c.typeSlug === activeFilter),
    [activeFilter]
  )

  return (
    <div className="pt-20 bg-charcoal-900 min-h-screen">
      {/* 页眉 */}
      <div className="py-24 bg-charcoal-800 relative overflow-hidden">
        <div className="absolute inset-0 tile-pattern" />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #3aa45e, transparent)', filter: 'blur(50px)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label">{t.casesPage.label}</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h1
              className="text-warm-100 font-light mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              {t.casesPage.title}
            </h1>
            <p className="text-warm-500 text-base max-w-xl leading-relaxed">
              {t.casesPage.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* 筛选栏 */}
      <div className="sticky top-16 lg:top-20 z-30 bg-charcoal-900/95 backdrop-blur-sm border-b border-charcoal-700 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 overflow-x-auto">
          <FilterTabs options={categoryOptions} active={activeFilter} onChange={setActiveFilter} />
        </div>
      </div>

      {/* 案例列表 — 杂志式布局 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {filtered.length === 0 ? (
          <p className="text-center text-charcoal-300 py-24 text-sm">{t.casesPage.noCases}</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-charcoal-700">
            {filtered.map((c, i) => {
              // 第一个案例大图显示
              const isFeatured = i === 0

              return (
                <motion.div
                  key={c.slug}
                  id={c.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={isFeatured ? 'lg:col-span-8' : 'lg:col-span-4'}
                >
                  <div className="group h-full flex flex-col">
                    {/* 案例封面图（在 src/data/cases.ts 的 coverImage 字段维护，每个案例一张独立图） */}
                    <div
                      className={`img-zoom relative bg-charcoal-700 overflow-hidden ${isFeatured ? 'h-80 lg:h-[480px]' : 'h-60'}`}
                    >
                      <Image
                        src={c.coverImage}
                        alt={pick(c.name, lang)}
                        fill
                        className="img-inner object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes={isFeatured ? '(max-width: 1024px) 90vw, 66vw' : '(max-width: 1024px) 90vw, 33vw'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />

                      {/* 建筑类型标签 */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[10px] text-white/50 border border-white/15 px-2.5 py-1 tracking-wider">{pick(c.type, lang)}</span>
                      </div>
                      <div className="absolute top-4 right-4 z-10">
                        <span className="text-[10px] text-white/30 tracking-widest">{c.year}</span>
                      </div>
                    </div>

                    {/* 内容 */}
                    <div className="flex-1 bg-charcoal-800 p-6 group-hover:bg-charcoal-700 transition-colors duration-300">
                      <p className="text-[10px] text-gold-600 tracking-widest uppercase mb-2">{pick(c.location, lang)}</p>
                      <h2 className={`text-warm-100 font-light leading-snug mb-4 ${isFeatured ? 'text-xl' : 'text-base'}`}>
                        {pick(c.name, lang)}
                      </h2>

                      {/* 项目信息行 */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4 text-xs">
                        <div>
                          <span className="text-charcoal-300 block mb-0.5">{t.casesPage.productLabel}</span>
                          <span className="text-warm-300 leading-snug">{pick(c.product, lang)}</span>
                        </div>
                        <div>
                          <span className="text-charcoal-300 block mb-0.5">{t.casesPage.areaLabel}</span>
                          <span className="text-warm-300">{pick(c.area, lang)}</span>
                        </div>
                        <div>
                          <span className="text-charcoal-300 block mb-0.5">{t.casesPage.colorLabel}</span>
                          <span className="text-warm-300">{pick(c.color, lang)}</span>
                        </div>
                      </div>

                      {/* 项目亮点 */}
                      <div className="border-t border-charcoal-700 pt-4">
                        <ul className="space-y-2">
                          {(isFeatured ? pick(c.highlights, lang) : pick(c.highlights, lang).slice(0, 2)).map((h, hi) => (
                            <li key={hi} className="flex items-start gap-2 text-xs text-charcoal-200">
                              <span className="text-gold-600 flex-shrink-0 mt-0.5">·</span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* 底部说明 */}
        <div className="mt-16 pt-10 border-t border-charcoal-700">
          <p className="text-charcoal-300 text-xs leading-relaxed">
            {t.casesPage.bottomNote}
          </p>
        </div>
      </div>

      <CTASection />
    </div>
  )
}
