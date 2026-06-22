'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import type { Lang } from '@/lib/i18n/translations'

// 可选语言（仿 XCMG 全屏面板的选择方式，按需扩展）
const LANGS: { code: Lang; label: string; sub: string }[] = [
  { code: 'zh', label: '中文', sub: '简体中文 · Chinese' },
  { code: 'en', label: 'English', sub: '英文 · English' },
  { code: 'ru', label: 'Русский', sub: '俄语 · Russian' },
]

// 地球图标
function GlobeIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0]

  // 打开时锁定页面滚动；按 Esc 关闭
  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const choose = (code: Lang) => {
    setLang(code)
    setOpen(false)
  }

  return (
    <>
      {/* 触发按钮：地球图标 + 当前语言 */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 text-xs tracking-wider text-warm-300 hover:text-warm-100 transition-colors"
        aria-label="选择语言 / Select language"
      >
        <GlobeIcon />
        <span className="hidden sm:inline">{current.label}</span>
      </button>

      {/* 全屏语言面板 */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-charcoal-900/98 backdrop-blur-md overflow-y-auto"
          >
            {/* 顶栏：Logo + 关闭 */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-between h-16 lg:h-20">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center bg-white rounded-md p-0.5 flex-shrink-0">
                    <img src="/logo.png" alt="信科金尊" className="h-9 w-9 object-contain" />
                  </span>
                  <span className="text-warm-100 font-light text-sm" style={{ letterSpacing: '0.06em' }}>
                    信科金尊
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-warm-200 hover:text-gold-500 transition-colors"
                  aria-label="关闭 / Close"
                >
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M6 6l14 14M20 6L6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 语言列表 */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 lg:pt-20 pb-16">
              <div className="flex items-center gap-3 mb-10">
                <GlobeIcon className="text-gold-500" />
                <span className="section-label">选择语言 / Select Language</span>
              </div>

              <div className="border-t border-charcoal-700">
                {LANGS.map((l, i) => {
                  const active = l.code === lang
                  return (
                    <motion.button
                      key={l.code}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + i * 0.07, duration: 0.4 }}
                      onClick={() => choose(l.code)}
                      className="group w-full flex items-center justify-between gap-6 py-7 border-b border-charcoal-700 text-left hover:bg-charcoal-800/60 transition-colors px-2 -mx-2"
                    >
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`font-light transition-colors duration-300 ${
                            active ? 'text-gold-500' : 'text-warm-100 group-hover:text-gold-400'
                          }`}
                          style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', letterSpacing: '-0.01em' }}
                        >
                          {l.label}
                        </span>
                        <span className="text-charcoal-300 text-xs tracking-wider">{l.sub}</span>
                      </div>

                      {active ? (
                        <span className="flex items-center gap-2 text-gold-500 text-[10px] tracking-widest uppercase flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8.5l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          当前
                        </span>
                      ) : (
                        <span className="text-charcoal-400 group-hover:text-gold-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0">
                          →
                        </span>
                      )}
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
