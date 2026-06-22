'use client'

import { useState, useMemo } from 'react'
import { products, productCategories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import FilterTabs from '@/components/ui/FilterTabs'
import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { pick } from '@/lib/i18n/translations'

export default function ProductsPage() {
  const { t, lang } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeScene, setActiveScene] = useState('all')

  // 场景筛选 slug 用稳定的中文关键词匹配（与界面语言无关）
  const sceneOptions = [
    { slug: 'all',       name: t.productsPage.allScenes },
    { slug: '住宅屋面',  name: t.productsPage.sceneResidential },
    { slug: '别墅',      name: t.productsPage.sceneVilla },
    { slug: '商业建筑',  name: t.productsPage.sceneCommercial },
    { slug: '公共建筑',  name: t.productsPage.scenePublic },
    { slug: '旧房翻新',  name: t.productsPage.sceneRenovation },
    { slug: '海外工程',  name: t.productsPage.sceneOverseas },
  ]

  const categoryOptions = [
    { slug: 'all', name: t.productsPage.allSeries },
    ...productCategories.map((c) => ({ slug: c.slug, name: pick(c.name, lang) })),
  ]

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catOk = activeCategory === 'all' || p.categorySlug === activeCategory
      const sceneOk =
        activeScene === 'all' ||
        p.applications.zh.some((a) => a.includes(activeScene.replace('屋面', '').replace('工程', '')))
      return catOk && sceneOk
    })
  }, [activeCategory, activeScene])

  return (
    <div className="pt-20 min-h-screen bg-charcoal-900">
      {/* 页面标题区 */}
      <div className="py-20 lg:py-28 bg-charcoal-800 relative overflow-hidden">
        {/* 背景纹理 */}
        <div className="absolute inset-0 tile-pattern opacity-100" />
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #3aa45e, transparent)', filter: 'blur(60px)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">{t.productsPage.label}</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h1
              className="text-warm-100 font-light mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              {t.productsPage.title}
            </h1>
            <p className="text-warm-500 text-base max-w-xl leading-relaxed">
              {t.productsPage.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* 筛选区 */}
      <div className="sticky top-16 lg:top-20 z-30 bg-charcoal-900/95 backdrop-blur-sm border-b border-charcoal-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* 按系列筛选 */}
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <span className="text-[10px] text-charcoal-300 tracking-widest uppercase">{t.productsPage.filterBySeries}</span>
              <div className="overflow-x-auto">
                <FilterTabs
                  options={categoryOptions}
                  active={activeCategory}
                  onChange={setActiveCategory}
                />
              </div>
            </div>
          </div>

          {/* 按场景筛选（第二行） */}
          <div className="mt-3 flex flex-col gap-1">
            <span className="text-[10px] text-charcoal-300 tracking-widest uppercase">{t.productsPage.filterByScene}</span>
            <div className="overflow-x-auto">
              <FilterTabs
                options={sceneOptions}
                active={activeScene}
                onChange={setActiveScene}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 产品网格 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-charcoal-300 text-sm">{t.productsPage.noResults}</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-charcoal-200 text-xs tracking-wider">
                {t.productsPage.resultCount(filtered.length)}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-700">
              {filtered.map((product, i) => (
                <ProductCard key={product.slug} product={product} index={i} />
              ))}
            </div>
          </>
        )}

        {/* 底部说明 */}
        <div className="mt-20 pt-10 border-t border-charcoal-700">
          <p className="text-charcoal-300 text-xs leading-relaxed max-w-2xl">
            {t.productsPage.bottomNote}
          </p>
        </div>
      </div>
    </div>
  )
}
