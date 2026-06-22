'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()
  const L = t.footer.links

  const footerGroups = [
    {
      title: t.footer.groupProducts,
      links: [
        { href: '/products?category=standard',    label: L.standard },
        { href: '/products?category=extended',    label: L.extended },
        { href: '/products?category=libo',        label: L.libo },
        { href: '/products?category=milan',       label: L.milan },
        { href: '/products?category=rainbow',     label: L.rainbow },
        { href: '/products?category=accessories', label: L.accessories },
      ],
    },
    {
      title: t.footer.groupSolutions,
      links: [
        { href: '/color-schemes', label: L.colorSchemes },
        { href: '/installation',  label: L.installation },
        { href: '/cases',         label: L.cases },
        { href: '/contact',       label: L.quote },
      ],
    },
    {
      title: t.footer.groupCompany,
      links: [
        { href: '/about',            label: L.about },
        { href: '/about#capability', label: L.capability },
        { href: '/about#quality',    label: L.quality },
        { href: '/contact',          label: L.contact },
      ],
    },
  ]

  return (
    <footer className="bg-charcoal-950 text-warm-400 border-t border-charcoal-700">
      {/* 主内容区 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* 品牌信息 */}
          <div className="lg:col-span-2">
            {/* 品牌 Logo */}
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center bg-white rounded-md p-0.5 flex-shrink-0">
                <img src="/logo.png" alt="信科金尊" className="h-9 w-9 object-contain" />
              </span>
              <span className="text-warm-100 font-light text-sm">
                信科金尊
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-8 max-w-sm text-warm-500">
              {t.footer.brandDesc}
            </p>

            {/* 联系方式 */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-gold-600">◎</span>
                <span>{t.footer.phone}：19322277172</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-600">◎</span>
                <span>{t.footer.email}：rongrongtu0202@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-600">◎</span>
                <span>{t.footer.whatsapp}：+86 19322277172</span>
              </div>
            </div>
          </div>

          {/* 链接组 */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-warm-100 text-xs tracking-widest uppercase mb-5 font-medium">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-warm-500 hover:text-warm-200 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* 底部版权 */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-charcoal-300">
            © {new Date().getFullYear()} 信科金尊. {t.footer.copyright}
          </p>
          <p className="text-xs text-charcoal-300">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  )
}
