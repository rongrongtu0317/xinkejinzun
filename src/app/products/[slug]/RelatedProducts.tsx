'use client'

import Link from 'next/link'
import type { Product } from '@/data/products'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { pick } from '@/lib/i18n/translations'

export default function RelatedProducts({ related }: { related: Product[] }) {
  const { t, lang } = useLanguage()
  return (
    <section className="py-20 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-10">
          <span className="section-label">{t.productDetail.moreLabel}</span>
          <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
          <h2 className="text-warm-100 font-light text-2xl">{t.productDetail.mayInterest}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-charcoal-700">
          {related.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group block bg-charcoal-800 hover:bg-charcoal-700 transition-colors duration-300">
              {/* 图占位 */}
              <div className="h-40 bg-charcoal-700 group-hover:bg-charcoal-600 transition-colors duration-300" />
              <div className="p-5">
                <p className="text-[10px] text-charcoal-300 tracking-widest mb-2">{pick(p.category, lang)}</p>
                <h3 className="text-warm-200 text-sm font-light group-hover:text-gold-400 transition-colors duration-300">{pick(p.name, lang)}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
