'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '@/data/products'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { pick } from '@/lib/i18n/translations'

export default function FAQSection() {
  const { t, lang } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-charcoal-900">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <span className="section-label">{t.faq.label}</span>
          <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
          <h2
            className="text-warm-100 font-light leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}
          >
            {t.faq.title}
          </h2>
        </div>

        <div className="divide-y divide-charcoal-700">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                className="w-full flex items-start justify-between gap-4 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className={`text-sm leading-relaxed transition-colors duration-300 ${
                    openIndex === i ? 'text-gold-400' : 'text-warm-300 group-hover:text-warm-100'
                  }`}
                >
                  {pick(faq.q, lang)}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-gold-600 flex-shrink-0 mt-0.5 text-base leading-none"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-charcoal-200 text-sm leading-relaxed pt-4 pr-8">
                      {pick(faq.a, lang)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
