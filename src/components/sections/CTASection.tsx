'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative py-28 lg:py-40 bg-charcoal-900 overflow-hidden">
      {/* 背景装饰 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(44,62,80,0.3) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(58,164,94,0.5) 30px, rgba(58,164,94,0.5) 31px)',
        }}
      />

      {/* 左右装饰线 */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-700/20 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-700/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* 标签 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-gold-500/50" />
          <span className="section-label">开始您的项目</span>
          <div className="h-px w-12 bg-gold-500/50" />
        </motion.div>

        {/* 主标题 */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-warm-50 font-light leading-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}
        >
          为您的项目匹配<br/>合适的彩石金属瓦方案
        </motion.h2>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-warm-500 text-base leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          提供产品选型建议、颜色方案推荐、参数确认、项目报价与全程技术支持。
          无论是住宅别墅还是商业工程，我们都能为您提供专业建议。
        </motion.p>

        {/* 按钮组 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-gold text-sm font-medium px-8 py-3.5">
            提交需求
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/products" className="btn-outline text-sm px-8 py-3.5">
            查看产品中心
          </Link>
        </motion.div>

        {/* 底部信息标签 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-8 text-xs text-charcoal-300"
        >
          {['提供样品申请', '颜色定制服务', '技术参数咨询', '工程报价支持'].map((tag) => (
            <div key={tag} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-gold-600" />
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
