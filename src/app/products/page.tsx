'use client'

import { useState, useMemo } from 'react'
import type { Metadata } from 'next'
import { products, productCategories } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import FilterTabs from '@/components/ui/FilterTabs'
import { motion } from 'framer-motion'

// 应用场景筛选选项
const sceneOptions = [
  { slug: 'all',          name: '全部场景' },
  { slug: '住宅屋面',    name: '住宅屋面' },
  { slug: '别墅',        name: '别墅' },
  { slug: '商业建筑',    name: '商业建筑' },
  { slug: '公共建筑',    name: '公共建筑' },
  { slug: '旧房翻新',    name: '旧房翻新' },
  { slug: '海外工程',    name: '海外工程' },
]

const categoryOptions = [
  { slug: 'all', name: '全部系列' },
  ...productCategories.map((c) => ({ slug: c.slug, name: c.name })),
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeScene, setActiveScene] = useState('all')

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catOk = activeCategory === 'all' || p.categorySlug === activeCategory
      const sceneOk =
        activeScene === 'all' ||
        p.applications.some((a) => a.includes(activeScene.replace('屋面', '').replace('工程', '')))
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
          style={{ background: 'radial-gradient(circle, #c4a35a, transparent)', filter: 'blur(60px)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">产品中心</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h1
              className="text-warm-100 font-light mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              完整彩石金属瓦产品体系
            </h1>
            <p className="text-warm-500 text-base max-w-xl leading-relaxed">
              从标准常规款到加长定制款，从罗马型到圆弧型，
              覆盖多种建筑屋面应用场景，支持颜色与规格定制。
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
              <span className="text-[10px] text-charcoal-300 tracking-widest uppercase">按系列</span>
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
            <span className="text-[10px] text-charcoal-300 tracking-widest uppercase">按场景</span>
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
            <p className="text-charcoal-300 text-sm">未找到符合条件的产品，请调整筛选条件。</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <p className="text-charcoal-200 text-xs tracking-wider">
                共 {filtered.length} 款产品
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
            以上产品为展示系列，更多瓦型及定制方案欢迎咨询。
            产品参数与规格以实际配置为准，支持根据项目需求定制颜色、规格及配套系统。
          </p>
        </div>
      </div>
    </div>
  )
}
