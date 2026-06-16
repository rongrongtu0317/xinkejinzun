'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Product } from '@/data/products'

// 产品详情页大图映射
const heroImages: Record<string, string> = {
  'classic-roman':   '/images/products/rainbow.jpg',
  'libo-arc':        '/images/products/libo.jpg',
  'milan':           '/images/products/milan.jpg',
  'standard-basic':  '/images/products/standard.jpg',
  'extended-custom': '/彩石瓦金属瓦加长定制款.jpg',
  'accessories':     '/images/products/accessories.jpg',
}

interface Props { product: Product }

export default function ProductDetailClient({ product }: Props) {
  return (
    <>
      {/* Hero 大图区 */}
      <div className="relative h-[60vh] min-h-96 bg-charcoal-800 overflow-hidden">
        {/* 真实产品图 */}
        <Image
          src={heroImages[product.slug] ?? '/images/products/standard.jpg'}
          alt={product.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* 文字可读性叠加层 */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-charcoal-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/60 via-transparent to-transparent" />

        {/* Hero 文字 */}
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* 面包屑 */}
              <nav className="flex items-center gap-2 text-[10px] text-charcoal-300 tracking-widest uppercase mb-6">
                <Link href="/" className="hover:text-gold-500 transition-colors">首页</Link>
                <span>/</span>
                <Link href="/products" className="hover:text-gold-500 transition-colors">产品中心</Link>
                <span>/</span>
                <span className="text-gold-500">{product.name}</span>
              </nav>

              <div className="flex flex-wrap gap-2 mb-5">
                {product.colors.slice(0, 4).map((c) => (
                  <span key={c} className="text-[10px] border border-charcoal-500 text-charcoal-200 px-2.5 py-1">
                    {c}
                  </span>
                ))}
              </div>

              <h1
                className="text-warm-50 font-light mb-3 leading-tight"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}
              >
                {product.name}
              </h1>
              <p className="text-warm-400 text-sm max-w-xl">{product.tagline}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 核心卖点 */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* 左侧产品描述 */}
            <div>
              <span className="section-label">产品介绍</span>
              <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
              <h2 className="text-warm-100 font-light text-2xl mb-6 leading-snug">核心卖点</h2>
              <p className="text-warm-400 text-sm leading-loose mb-8">{product.description}</p>

              {/* 咨询按钮 */}
              <Link href="/contact" className="btn-gold text-sm inline-flex">
                联系获取报价
              </Link>
            </div>

            {/* 右侧特性列表 */}
            <div className="flex flex-col gap-4">
              {product.features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4 py-4 border-b border-charcoal-700"
                >
                  <span className="text-[10px] text-gold-600 tracking-widest mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-warm-200 text-sm leading-relaxed">{f}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="py-16 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="section-label">适用场景</span>
          <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
          <div className="flex flex-wrap gap-3 mt-4">
            {product.applications.map((a) => (
              <span key={a} className="text-sm text-warm-300 border border-charcoal-600 px-4 py-2">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
