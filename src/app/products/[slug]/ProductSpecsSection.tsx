'use client'

import type { ProductSpec } from '@/data/products'
import ProductSpecsTable from '@/components/product/ProductSpecsTable'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function ProductSpecsSection({ specs }: { specs: ProductSpec[] }) {
  const { t } = useLanguage()
  return (
    <section className="py-20 bg-charcoal-800">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <span className="section-label">{t.productDetail.specsLabel}</span>
          <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
          <h2 className="text-warm-100 font-light text-2xl">{t.productDetail.specsTitle}</h2>
        </div>
        <ProductSpecsTable specs={specs} />
      </div>
    </section>
  )
}
