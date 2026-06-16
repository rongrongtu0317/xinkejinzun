'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cases, caseCategories } from '@/data/cases'
import FilterTabs from '@/components/ui/FilterTabs'
import CTASection from '@/components/sections/CTASection'

export default function CasesPage() {
  const [activeFilter, setActiveFilter] = useState('all')

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
            <span className="section-label">工程案例</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h1
              className="text-warm-100 font-light mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              真实项目，验证屋面系统表现
            </h1>
            <p className="text-warm-500 text-base max-w-xl leading-relaxed">
              来自住宅别墅、商业综合体、公共建筑及海外工程的实际应用案例，
              用项目结果说明彩石金属瓦的性能表现。
            </p>
          </motion.div>
        </div>
      </div>

      {/* 筛选栏 */}
      <div className="sticky top-16 lg:top-20 z-30 bg-charcoal-900/95 backdrop-blur-sm border-b border-charcoal-700 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 overflow-x-auto">
          <FilterTabs options={caseCategories} active={activeFilter} onChange={setActiveFilter} />
        </div>
      </div>

      {/* 案例列表 — 杂志式布局 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {filtered.length === 0 ? (
          <p className="text-center text-charcoal-300 py-24 text-sm">暂无该类别案例</p>
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
                    {/* 图片占位 */}
                    {/* 替换：<Image src={c.coverImage} fill alt={c.name} className="object-cover group-hover:scale-105 transition-transform duration-700" /> */}
                    <div
                      className={`img-zoom relative bg-charcoal-700 overflow-hidden ${isFeatured ? 'h-80 lg:h-[480px]' : 'h-60'}`}
                    >
                      <div
                        className="img-inner absolute inset-0"
                        style={{
                          background: [
                            'linear-gradient(145deg, #2a3428 0%, #1a1e16 100%)',
                            'linear-gradient(145deg, #282a38 0%, #14161e 100%)',
                            'linear-gradient(145deg, #382a1a 0%, #1e140a 100%)',
                            'linear-gradient(145deg, #1a2832 0%, #0a141a 100%)',
                            'linear-gradient(145deg, #302826 0%, #181210 100%)',
                            'linear-gradient(145deg, #263228 0%, #121a14 100%)',
                          ][i % 6],
                        }}
                      >
                        {/* 建筑轮廓装饰 */}
                        <svg className="absolute inset-0 w-full h-full opacity-[0.1]" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice">
                          <path d="M80 350 L80 180 L300 60 L520 180 L520 350 Z" stroke="white" strokeWidth="2" fill="none"/>
                          {isFeatured && (
                            <>
                              <path d="M140 350 L140 240 L200 240 L200 350" stroke="white" strokeWidth="1.5" fill="none"/>
                              <path d="M400 350 L400 240 L460 240 L460 350" stroke="white" strokeWidth="1.5" fill="none"/>
                              <path d="M240 350 L240 200 L360 200 L360 350" stroke="white" strokeWidth="1.5" fill="none"/>
                            </>
                          )}
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
                      </div>

                      {/* 建筑类型标签 */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="text-[10px] text-white/50 border border-white/15 px-2.5 py-1 tracking-wider">{c.type}</span>
                      </div>
                      <div className="absolute top-4 right-4 z-10">
                        <span className="text-[10px] text-white/30 tracking-widest">{c.year}</span>
                      </div>
                    </div>

                    {/* 内容 */}
                    <div className="flex-1 bg-charcoal-800 p-6 group-hover:bg-charcoal-700 transition-colors duration-300">
                      <p className="text-[10px] text-gold-600 tracking-widest uppercase mb-2">{c.location}</p>
                      <h2 className={`text-warm-100 font-light leading-snug mb-4 ${isFeatured ? 'text-xl' : 'text-base'}`}>
                        {c.name}
                      </h2>

                      {/* 项目信息行 */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4 text-xs">
                        <div>
                          <span className="text-charcoal-300 block mb-0.5">使用产品</span>
                          <span className="text-warm-300 leading-snug">{c.product}</span>
                        </div>
                        <div>
                          <span className="text-charcoal-300 block mb-0.5">项目面积</span>
                          <span className="text-warm-300">{c.area}</span>
                        </div>
                        <div>
                          <span className="text-charcoal-300 block mb-0.5">颜色方案</span>
                          <span className="text-warm-300">{c.color}</span>
                        </div>
                      </div>

                      {/* 项目亮点 */}
                      <div className="border-t border-charcoal-700 pt-4">
                        <ul className="space-y-2">
                          {(isFeatured ? c.highlights : c.highlights.slice(0, 2)).map((h, hi) => (
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
            以上案例均为实际工程项目示意，案例图片为占位图，请替换为真实项目照片。
            如需了解更多项目案例或参考资料，欢迎联系我们。
          </p>
        </div>
      </div>

      <CTASection />
    </div>
  )
}
