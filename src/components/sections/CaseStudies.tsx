'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cases } from '@/data/cases'
import SectionTitle from '@/components/ui/SectionTitle'

// 首页只展示前 3 个案例
const featuredCases = cases.slice(0, 3)

// 每个案例对应一张真实屋面效果图
const caseImages = [
  '/images/cases/case1.jpg',
  '/images/cases/case2.jpg',
  '/images/cases/case3.jpg',
]

export default function CaseStudies() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal-900 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #3aa45e 0%, transparent 70%)', filter: 'blur(40px)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* 标题行 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <SectionTitle
            label="工程案例"
            title="真实项目，<br/>验证屋面系统表现"
            subtitle="来自住宅、商业、公共及海外工程的实际应用，用项目结果说明产品性能。"
          />
          <Link href="/cases" className="btn-outline text-xs whitespace-nowrap self-end">
            查看全部案例
          </Link>
        </div>

        {/* 3 个案例卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-charcoal-700">
          {featuredCases.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <Link href={`/cases#${c.slug}`} className="block">
                {/* 真实案例图片 */}
                <div className="relative h-60 bg-charcoal-700 overflow-hidden">
                  <Image
                    src={caseImages[i]}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 90vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />

                  {/* 建筑类型标签 */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] text-white/70 border border-white/20 bg-black/30 px-2.5 py-1 tracking-wider backdrop-blur-sm">
                      {c.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[10px] text-white/40 tracking-widest">{c.year}</span>
                  </div>
                </div>

                {/* 内容区 */}
                <div className="bg-charcoal-800 p-6 group-hover:bg-charcoal-700 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-[10px] text-gold-600 tracking-widest uppercase mb-1">{c.location}</p>
                      <h3 className="text-warm-100 font-light leading-snug text-base group-hover:text-gold-400 transition-colors duration-300">
                        {c.name}
                      </h3>
                    </div>
                    <span className="text-charcoal-300 text-xs flex-shrink-0 ml-4 mt-1 group-hover:text-gold-500 transition-colors duration-300">→</span>
                  </div>

                  <div className="flex flex-col gap-1.5 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-charcoal-300">使用产品</span>
                      <span className="text-warm-300 text-right max-w-[180px] leading-tight">{c.product}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-charcoal-300">项目面积</span>
                      <span className="text-warm-300">{c.area}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-charcoal-300">颜色方案</span>
                      <span className="text-warm-300">{c.color}</span>
                    </div>
                  </div>

                  <p className="text-charcoal-200 text-xs leading-relaxed border-t border-charcoal-700 pt-4">
                    {c.highlights[0]}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
