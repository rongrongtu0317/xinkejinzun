'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

const stats: Stat[] = [
  { value: 10,   suffix: '+',  label: '自动化生产线',    description: '多条现代化生产线，稳定保障产能' },
  { value: 20,   suffix: '+',  label: '可选瓦型',        description: '覆盖主流与特种屋面应用场景' },
  { value: 50,   suffix: '+',  label: '颜色与规格选项',  description: '支持客户个性化定制需求' },
  { value: 1000, suffix: '+',  label: '工程项目服务经验', description: '国内外各类屋面工程项目积累' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1600
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-24 bg-charcoal-800 relative overflow-hidden">
      {/* 背景装饰 */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(196,163,90,0.04) 60px, rgba(196,163,90,0.04) 61px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="section-label">制造实力</span>
          <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
          <h2 className="font-light text-warm-100 leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '-0.02em' }}>
            以制造实力支撑<br />长期稳定交付
          </h2>
        </motion.div>

        {/* 数据卡片 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:border-r border-charcoal-600 lg:pr-10 lg:pl-10 first:pl-0 last:border-r-0 last:pr-0"
            >
              {/* 数字 */}
              <div
                className="text-gold-500 font-light mb-3"
                style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', lineHeight: 1, letterSpacing: '-0.03em' }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>

              <div className="text-warm-100 font-medium mb-2 text-sm tracking-wide">
                {stat.label}
              </div>
              <div className="text-charcoal-200 text-xs leading-relaxed">
                {stat.description}
              </div>

              {/* 底部金色线 */}
              <div className="w-8 h-px bg-gold-600 mt-5 opacity-60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
