'use client'

import { motion } from 'framer-motion'

interface FilterOption {
  slug: string
  name: string
}

interface FilterTabsProps {
  options: FilterOption[]
  active: string
  onChange: (slug: string) => void
  className?: string
}

export default function FilterTabs({ options, active, onChange, className = '' }: FilterTabsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((opt) => (
        <button
          key={opt.slug}
          onClick={() => onChange(opt.slug)}
          className={`filter-tag relative ${active === opt.slug ? 'active' : ''}`}
        >
          {opt.name}
          {active === opt.slug && (
            <motion.span
              layoutId="filter-active"
              className="absolute inset-0 border border-gold-500"
              style={{ borderRadius: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
