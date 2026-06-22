import type { Metadata } from 'next'
import CTASection from '@/components/sections/CTASection'
import InstallationClient from './InstallationClient'

export const metadata: Metadata = {
  title: '安装与技术支持',
  description: '彩石金属瓦安装流程、技术支持服务、施工注意事项详解，帮助工程团队高效完成屋面铺装。',
}

export default function InstallationPage() {
  return (
    <div className="pt-20 bg-charcoal-900 min-h-screen">
      <InstallationClient />
      <CTASection />
    </div>
  )
}
