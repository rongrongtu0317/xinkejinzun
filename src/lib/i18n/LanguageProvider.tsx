'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Lang, type Dict } from './translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Dict
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'zh',
  setLang: () => {},
  t: translations.zh,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 默认中文；服务端与客户端首渲染一致，避免 hydration 不匹配
  const [lang, setLangState] = useState<Lang>('zh')

  // 挂载后读取 localStorage，恢复上次选择的语言
  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved && saved in translations) setLangState(saved as Lang)
  }, [])

  // 把当前语言写到 <html data-lang>，供 CSS 做按语言的字号微调（俄语整体略缩小）
  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang)
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('lang', l)
    } catch {
      /* localStorage 不可用时忽略 */
    }
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
