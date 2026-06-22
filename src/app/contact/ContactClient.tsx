'use client'

import ContactForm from '@/components/ContactForm'
import ContactInfoClient from './ContactInfoClient'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function ContactClient() {
  const { t } = useLanguage()
  const c = t.contactPage

  return (
    <div className="pt-20 bg-charcoal-900 min-h-screen">
      {/* 页眉 */}
      <div className="py-24 bg-charcoal-800 relative overflow-hidden">
        <div className="absolute inset-0 tile-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <span className="section-label">{c.label}</span>
          <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
          <h1
            className="text-warm-100 font-light mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
          >
            {c.title}
          </h1>
          <p className="text-warm-500 text-base max-w-xl leading-relaxed">
            {c.subtitle}
          </p>
        </div>
      </div>

      {/* 主内容 */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* 左侧联系信息 */}
            <div className="lg:col-span-2">
              <ContactInfoClient />
            </div>

            {/* 右侧表单 */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <span className="section-label">{c.submitLabel}</span>
                <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
                <h2 className="text-warm-100 font-light text-xl">{c.formTitle}</h2>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </div>

      {/* 地图占位 */}
      <div className="h-64 bg-charcoal-800 flex items-center justify-center border-t border-charcoal-700">
        <div className="text-center">
          {/* 替换为真实地图组件，如 Google Maps、高德地图嵌入等 */}
          <div className="w-10 h-10 border border-gold-600 flex items-center justify-center mx-auto mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="8" r="3" stroke="#3aa45e" strokeWidth="1.2"/>
              <path d="M10 2C6.7 2 4 4.7 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.3-2.7-6-6-6z" stroke="#3aa45e" strokeWidth="1.2"/>
            </svg>
          </div>
          <p className="text-charcoal-300 text-sm">{c.mapPlaceholder}</p>
          <p className="text-charcoal-400 text-xs mt-1">{c.mapAddress}</p>
        </div>
      </div>
    </div>
  )
}
