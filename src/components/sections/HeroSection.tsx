'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SplitTitle } from '@/components/ui/AnimatedText'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // 仅在客户端启用入场动画，避免 SSR 阶段输出 opacity:0
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  // 视差：背景随滚动上移
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  // 内容随滚动淡出
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], ['0%', '-15%'])

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[640px] flex items-center overflow-hidden"
    >
      {/* ── 背景层 ── */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        {/* 真实屋面效果图 */}
        <Image
          src="/images/hero-bg.jpg"
          alt="彩石金属瓦屋面效果"
          fill
          priority
          className="object-cover object-center"
          sizes="95vw"
        />

        {/* 深色叠加层：让文字清晰可读，保留图片质感 */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(160deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.30) 100%)
            `,
          }}
        />

        {/* 底部渐变过渡到页面背景色 */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal-900/60" />
      </motion.div>

      {/* ── 主内容 ── */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="max-w-4xl">

          {/* 小标签 */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-gold-500" />
            <span className="section-label">{t.hero.label}</span>
          </motion.div>

          {/* 主标题 — 逐行展开，内联样式确保响应式字号生效 */}
          <SplitTitle
            lines={[t.hero.titleLine1, t.hero.titleLine2]}
            className="mb-8"
            lineClassName="font-light text-warm-50"
            startDelay={0.35}
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: '1.02',
            }}
          />

          {/* 副标题 */}
          <motion.p
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="text-warm-400 leading-relaxed mb-10 max-w-xl"
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* 按钮组 */}
          <motion.div
            initial={mounted ? { opacity: 0, y: 20 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/products" className="btn-gold text-sm font-medium">
              {t.hero.explore}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-1">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/contact" className="btn-outline text-sm">
              {t.hero.quote}
            </Link>
          </motion.div>

        </div>
      </motion.div>

      {/* 右侧竖向文字装饰 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold-500/40" />
        <span
          className="text-charcoal-300 text-[10px] tracking-[0.25em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll to Explore
        </span>
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-gold-500/40" />
      </motion.div>

      {/* 左下角品牌线条装饰 */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-6 lg:left-12 top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent origin-top hidden lg:block"
      />

      {/* 底部渐变 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-900 to-transparent" />
    </section>
  )
}
