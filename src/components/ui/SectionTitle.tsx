'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  label?: string       // 上方小标签，如"产品系列"
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean      // 深色背景上使用浅色文字（默认 true）
  className?: string
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  align = 'left',
  light = true,
  className = '',
}: SectionTitleProps) {
  const textColor = light ? 'text-warm-100' : 'text-charcoal-800'
  const labelColor = 'text-gold-500'
  const subtitleColor = light ? 'text-warm-400' : 'text-warm-600'
  const dividerColor = 'bg-gold-500'

  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align]

  return (
    <motion.div
      className={`flex flex-col ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {label && (
        <span className={`section-label mb-4 ${labelColor}`}>
          {label}
        </span>
      )}

      {/* 金色细线分割 */}
      <div className={`w-10 h-px ${dividerColor} mb-5 opacity-70`} />

      <h2
        className={`font-light leading-tight tracking-tight ${textColor}`}
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 3.2rem)',
          letterSpacing: '-0.02em',
          lineHeight: '1.1',
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {subtitle && (
        <p
          className={`mt-5 leading-relaxed max-w-2xl ${subtitleColor}`}
          style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
