'use client'

import { motion } from 'framer-motion'
import { ReactNode, CSSProperties } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
}

// 逐字/逐段淡入动画文本
export default function AnimatedText({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      <Tag>{children}</Tag>
    </motion.div>
  )
}

// 滚动触发的淡入动画文本（用于非首屏）
export function AnimatedTextInView({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      <Tag>{children}</Tag>
    </motion.div>
  )
}

// 拆分标题行 — 每行独立动画
interface SplitTitleProps {
  lines: string[]
  className?: string
  lineClassName?: string
  startDelay?: number
  /** 应用到每一行的内联样式，常用于响应式字号 */
  style?: CSSProperties
}

export function SplitTitle({
  lines,
  className = '',
  lineClassName = '',
  startDelay = 0,
  style,
}: SplitTitleProps) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} style={{ overflow: 'hidden' }}>
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: startDelay + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={lineClassName}
            style={style}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  )
}
