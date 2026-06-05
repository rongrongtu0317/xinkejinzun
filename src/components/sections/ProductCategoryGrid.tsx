'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { productCategories } from '@/data/products'
import SectionTitle from '@/components/ui/SectionTitle'

// 每个分类对应真实产品图片
const categoryImages: Record<string, string> = {
  standard:      '/images/products/standard.jpg',
  extended:      '/images/products/extended.jpg',
  accessories:   '/images/products/accessories.jpg',
  'color-plans': '/images/products/standard.jpg',
  libo:          '/images/products/libo.jpg',
  milan:         '/images/products/milan.jpg',
  rainbow:       '/images/products/rainbow.jpg',
  custom:        '/images/products/custom.jpg',
}

export default function ProductCategoryGrid() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0 tile-pattern opacity-100" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <SectionTitle
            label="产品体系"
            title="完整彩石金属瓦<br/>产品体系"
            subtitle="从标准规格到定制瓦型，覆盖多种建筑屋面应用场景。"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Link href="/products" className="btn-outline text-xs whitespace-nowrap self-end">
              查看全部产品
            </Link>
          </motion.div>
        </div>

        {/* 8 个产品分类 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal-700">
          {productCategories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/products?category=${cat.slug}`} className="group block bg-charcoal-800 relative overflow-hidden">
                {/* 真实产品图片 */}
                <div className="relative h-52 bg-charcoal-700 overflow-hidden">
                  <Image
                    src={categoryImages[cat.slug] ?? '/images/products/standard.jpg'}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* 深色叠加保证文字可读 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
                  {/* 悬停金色光晕 */}
                  <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/8 transition-colors duration-500" />

                  {/* 编号 */}
                  <span className="absolute top-4 left-4 text-[10px] text-white/40 tracking-widest z-10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* 文字区 */}
                <div className="p-5 border-t border-charcoal-700 group-hover:border-gold-700/40 transition-colors duration-300">
                  <h3 className="text-warm-100 font-light text-sm mb-1.5 leading-snug tracking-wide group-hover:text-gold-400 transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-charcoal-200 text-xs leading-relaxed line-clamp-2">
                    {cat.desc}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-charcoal-300 group-hover:text-gold-500 transition-colors duration-300">
                    <span className="text-[10px] tracking-widest uppercase">查看详情</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 text-xs">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
