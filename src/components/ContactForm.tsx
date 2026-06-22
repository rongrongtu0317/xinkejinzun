'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

type FormState = {
  name: string
  phone: string
  email: string
  projectType: string
  region: string
  message: string
}

export default function ContactForm() {
  const { t } = useLanguage()
  const f = t.contactForm
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState<string | null>(null)

  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    region: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (error) setError(null)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // 静态导出环境：浏览器端直连 Supabase 写入
      const supabase = createClient()

      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim() || null,
          region: form.region.trim() || null,
          project_type: form.projectType || null,
          message: form.message.trim() || null,
        })

      if (dbError) {
        console.error('提交失败:', dbError)
        setError(f.errorDb)
        return
      }

      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      console.error('提交错误:', err)
      setError(f.errorNetwork)
    } finally {
      setLoading(false)
    }
  }

  /* ── 成功页面 ── */
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-16 text-center"
      >
        <div className="w-12 h-12 border border-gold-500 flex items-center justify-center mx-auto mb-6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4 4 8-8" stroke="#3aa45e" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-warm-100 text-xl font-light mb-3">{f.successTitle}</h3>
        <p className="text-charcoal-200 text-sm leading-relaxed max-w-sm mx-auto">
          {f.successDesc}
        </p>
      </motion.div>
    )
  }

  /* ── 表单 ── */
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-charcoal-200 tracking-wider mb-2">{f.nameLabel}</label>
          <input
            className="form-input" type="text" name="name"
            placeholder={f.namePlaceholder} required disabled={loading}
            value={form.name} onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-xs text-charcoal-200 tracking-wider mb-2">{f.phoneLabel}</label>
          <input
            className="form-input" type="tel" name="phone"
            placeholder={f.phonePlaceholder} required disabled={loading}
            value={form.phone} onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-charcoal-200 tracking-wider mb-2">{f.emailLabel}</label>
          <input
            className="form-input" type="email" name="email"
            placeholder={f.emailPlaceholder} disabled={loading}
            value={form.email} onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-xs text-charcoal-200 tracking-wider mb-2">{f.regionLabel}</label>
          <input
            className="form-input" type="text" name="region"
            placeholder={f.regionPlaceholder} disabled={loading}
            value={form.region} onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-charcoal-200 tracking-wider mb-2">{f.projectTypeLabel}</label>
        <select
          className="form-input" name="projectType" required disabled={loading}
          value={form.projectType} onChange={handleChange}
        >
          <option value="" disabled>{f.selectPlaceholder}</option>
          {f.projectTypes.map((pt) => (
            <option key={pt} value={pt}>{pt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-charcoal-200 tracking-wider mb-2">{f.messageLabel}</label>
        <textarea
          className="form-input resize-none" name="message" rows={5}
          placeholder={f.messagePlaceholder}
          disabled={loading} value={form.message} onChange={handleChange}
        />
      </div>

      <div className="border border-dashed border-charcoal-600 p-4 text-center">
        <p className="text-charcoal-300 text-xs">
          {f.fileNote}
        </p>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-400"
        >
          {error}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-gold w-full justify-center py-4 text-sm font-medium
                   disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="3"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            {f.submitting}
          </>
        ) : (
          <>
            {f.submit}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-2">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor"
                strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>

      <p className="text-charcoal-400 text-xs text-center">
        {f.privacyNote}
      </p>
    </form>
  )
}
