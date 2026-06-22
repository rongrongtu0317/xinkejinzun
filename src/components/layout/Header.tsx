'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import LanguageSwitcher from './LanguageSwitcher'

const navItems = [
  { href: '/',               key: 'home' },
  { href: '/products',       key: 'products' },
  { href: '/color-schemes',  key: 'colors' },
  { href: '/cases',          key: 'cases' },
  { href: '/installation',   key: 'support' },
  { href: '/about',          key: 'about' },
  { href: '/contact',        key: 'contact' },
] as const

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 路由变化时关闭菜单
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isHome = pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'glass-nav'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* 品牌名 — 替换为真实品牌 Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* 品牌 Logo */}
              <span className="flex items-center justify-center bg-white rounded-md p-0.5 flex-shrink-0">
                <img src="/logo.png" alt="信科金尊" className="h-9 w-9 object-contain" />
              </span>
              <span
                className="text-warm-100 font-light text-sm"
                style={{ letterSpacing: '0.06em' }}
              >
                信科金尊
              </span>
            </Link>

            {/* 桌面端导航 */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs tracking-widest uppercase transition-colors duration-300 group ${
                    pathname === item.href
                      ? 'text-gold-500'
                      : 'text-warm-300 hover:text-warm-100'
                  }`}
                >
                  {t.nav[item.key]}
                  {/* 悬停底线 */}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300 ${
                      pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* 右侧按钮 + 汉堡 */}
            <div className="flex items-center gap-4">
              {/* 语言切换 — 仿 XCMG 全屏面板 */}
              <LanguageSwitcher />

              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 btn-outline text-xs"
              >
                {t.cta.quote}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* 移动端汉堡菜单 */}
              <button
                className="lg:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="菜单"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-px bg-warm-100 origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-4 h-px bg-warm-100"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-px bg-warm-100 origin-center"
                />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 glass-nav pt-20 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 pt-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className={`block text-xl font-light tracking-wide ${
                      pathname === item.href ? 'text-gold-500' : 'text-warm-200'
                    }`}
                  >
                    {t.nav[item.key]}
                  </Link>
                  <div className="w-full h-px bg-charcoal-600 mt-4" />
                </motion.div>
              ))}

              <Link
                href="/contact"
                className="btn-gold inline-flex w-fit mt-4 text-sm"
              >
                {t.cta.quote}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
