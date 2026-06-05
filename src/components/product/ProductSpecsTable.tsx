'use client'

import { motion } from 'framer-motion'
import type { ProductSpec } from '@/data/products'

interface ProductSpecsTableProps {
  specs: ProductSpec[]
}

export default function ProductSpecsTable({ specs }: ProductSpecsTableProps) {
  return (
    <div>
      <div className="divide-y divide-charcoal-700">
        {specs.map((spec, i) => (
          <motion.div
            key={spec.label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="spec-row flex items-start gap-4"
          >
            <span className="text-charcoal-200 text-sm w-28 flex-shrink-0 pt-0.5">
              {spec.label}
            </span>
            <span className="text-warm-200 text-sm leading-relaxed">
              {spec.value}
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
        ※ 以上参数为参考值，具体以实际产品配置和项目需求为准。
        如需定制规格或了解详细技术参数，请联系我们获取支持。
      </motion.p>
    </div>
  )
}
