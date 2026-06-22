'use client'

import { motion } from 'framer-motion'
import type { ProductSpec } from '@/data/products'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { pick } from '@/lib/i18n/translations'

interface ProductSpecsTableProps {
  specs: ProductSpec[]
}

export default function ProductSpecsTable({ specs }: ProductSpecsTableProps) {
  const { t, lang } = useLanguage()
  return (
    <div>
      <div className="divide-y divide-charcoal-700">
        {specs.map((spec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="spec-row flex items-start gap-4"
          >
            <span className="text-charcoal-200 text-sm w-28 flex-shrink-0 pt-0.5">
              {pick(spec.label, lang)}
            </span>
            <span className="text-warm-200 text-sm leading-relaxed">
              {pick(spec.value, lang)}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-charcoal-300 text-xs mt-6 pt-5 border-t border-charcoal-700 leading-relaxed"
      >
        {t.productDetail.specsNote}
      </motion.p>
    </div>
  )
}
