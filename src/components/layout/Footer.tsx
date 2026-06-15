import Link from 'next/link'

const footerLinks = {
  产品: [
    { href: '/products?category=standard',    label: '彩石金属瓦常规款' },
    { href: '/products?category=extended',    label: '加长定制款' },
    { href: '/products?category=libo',        label: '丽波圆弧型' },
    { href: '/products?category=milan',       label: '米兰型' },
    { href: '/products?category=rainbow',     label: '彩虹罗马型' },
    { href: '/products?category=accessories', label: '配件系统' },
  ],
  解决方案: [
    { href: '/color-schemes',   label: '屋面配色方案' },
    { href: '/installation',    label: '安装与技术支持' },
    { href: '/cases',           label: '工程案例' },
    { href: '/contact',         label: '项目报价' },
  ],
  公司: [
    { href: '/about',           label: '关于我们' },
    { href: '/about#capability',label: '制造能力' },
    { href: '/about#quality',   label: '研发与质检' },
    { href: '/contact',         label: '联系我们' },
  ],
}

export default function Footer() {
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
              专注彩石金属瓦及金属屋面系统产品的研发、生产与供应，
              为建筑屋面的安全性、耐久性与美观性提供专业解决方案。
            </p>

            {/* 联系方式 */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-gold-600">◎</span>
                <span>电话：19322277172</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-600">◎</span>
                <span>邮箱：rongrongtu0202@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-600">◎</span>
                <span>WhatsApp / 微信：+86 19322277172</span>
              </div>
            </div>
          </div>

          {/* 链接组 */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-warm-100 text-xs tracking-widest uppercase mb-5 font-medium">
                {group}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
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
            © {new Date().getFullYear()} 信科金尊. 保留所有权利。
          </p>
          <p className="text-xs text-charcoal-300">
            本网站内容仅供参考，产品参数以实际配置为准。
          </p>
        </div>
      </div>
    </footer>
  )
}
