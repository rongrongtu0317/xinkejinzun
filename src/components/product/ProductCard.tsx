'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Product } from '@/data/products'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { pick } from '@/lib/i18n/translations'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { t, lang } = useLanguage()
  // 每个产品对应自己的独立图片（在 src/data/products.ts 的 image 字段维护）
  const imgSrc = product.image
  const name = pick(product.name, lang)
  const features = pick(product.features, lang)
  const applications = pick(product.applications, lang)
  const tagMax = lang === 'zh' ? 8 : 18

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link href={`/products/${product.slug}`} className="block">
        {/* 产品图片 */}
        <div className="relative h-64 bg-charcoal-700 overflow-hidden">
          <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />

          {/* 徽章 */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-10 bg-gold-500 text-charcoal-900 text-[10px] font-medium px-2.5 py-1 tracking-wider">
              {pick(product.badge, lang)}
            </div>
          )}

          {/* 分类标签 */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className="text-[10px] text-white/50 tracking-widest">{pick(product.category, lang)}</span>
          </div>
        </div>

        {/* 内容区 */}
        <div className="p-5 bg-charcoal-800 border border-charcoal-700 group-hover:border-charcoal-600 transition-all duration-300">
          <h3 className="text-warm-100 font-light text-base mb-2 leading-snug group-hover:text-gold-400 transition-colors duration-300">
            {name}
          </h3>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {features.slice(0, 3).map((f, i) => (
              <span key={i} className="text-[10px] text-charcoal-200 bg-charcoal-700 px-2 py-0.5 leading-relaxed">
                {f.length > tagMax ? f.slice(0, tagMax) + '…' : f}
              </span>
            ))}
          </div>

          <p className="text-charcoal-200 text-xs mb-4 line-clamp-1">
            {t.productsPage.applicableShort}{applications.join(' · ')}
          </p>

          <div className="flex items-center gap-2 text-xs text-charcoal-300 group-hover:text-gold-500 transition-colors duration-300 border-t border-charcoal-700 pt-4">
            <span className="tracking-widest uppercase">{t.productGrid.viewDetails}</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
