'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Product } from '@/data/products'

// 产品图片映射
const productImages: Record<string, string> = {
  'classic-roman':    '/images/products/rainbow.jpg',
  'libo-arc':         '/images/products/libo.jpg',
  'milan':            '/images/products/milan.jpg',
  'standard-basic':   '/images/products/standard.jpg',
  'extended-custom':  '/彩石瓦金属瓦加长定制款.jpg',
  'accessories':      '/images/products/accessories.jpg',
}

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const imgSrc = productImages[product.slug] ?? '/images/products/standard.jpg'

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
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />

          {/* 徽章 */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-10 bg-gold-500 text-charcoal-900 text-[10px] font-medium px-2.5 py-1 tracking-wider">
              {product.badge}
            </div>
          )}

          {/* 分类标签 */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className="text-[10px] text-white/50 tracking-widest">{product.category}</span>
          </div>
        </div>

        {/* 内容区 */}
        <div className="p-5 bg-charcoal-800 border border-charcoal-700 group-hover:border-charcoal-600 transition-all duration-300">
          <h3 className="text-warm-100 font-light text-base mb-2 leading-snug group-hover:text-gold-400 transition-colors duration-300">
            {product.name}
          </h3>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.features.slice(0, 3).map((f, i) => (
              <span key={i} className="text-[10px] text-charcoal-200 bg-charcoal-700 px-2 py-0.5 leading-relaxed">
                {f.length > 8 ? f.slice(0, 8) + '…' : f}
              </span>
            ))}
          </div>

          <p className="text-charcoal-200 text-xs mb-4 line-clamp-1">
            适用：{product.applications.join(' · ')}
          </p>

          <div className="flex items-center gap-2 text-xs text-charcoal-300 group-hover:text-gold-500 transition-colors duration-300 border-t border-charcoal-700 pt-4">
            <span className="tracking-widest uppercase">查看详情</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
