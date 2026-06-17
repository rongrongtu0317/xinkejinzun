import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { LanguageProvider } from '@/lib/i18n/LanguageProvider'

// SEO 基础元数据 — 替换为真实企业名称与描述
export const metadata: Metadata = {
  title: {
    default: '彩石金属瓦 | 专业金属屋面系统解决方案',
    template: '%s | 彩石金属瓦',
  },
  description:
    '专注彩石金属瓦及金属屋面系统产品研发、生产与供应，为住宅、别墅、商业建筑和工程项目提供美观、耐候、轻质、高强的屋面解决方案。支持颜色与规格定制，提供完整配件体系与技术服务。',
  keywords: [
    '彩石金属瓦', '彩石瓦', '金属屋面', '屋面瓦', '别墅屋面',
    '住宅屋面', '金属瓦', '彩砂瓦', '屋面系统', '耐候瓦',
    '镀铝锌钢板', '建筑材料', '屋面定制',
  ],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    siteName: '彩石金属瓦',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full flex flex-col bg-charcoal-900 antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
