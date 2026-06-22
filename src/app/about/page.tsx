import type { Metadata } from 'next'
import CTASection from '@/components/sections/CTASection'
import StatsSection from '@/components/ui/StatsSection'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: '关于我们',
  description: '专注彩石金属瓦及金属屋面系统产品研发、生产与供应，围绕建筑屋面的安全性、耐久性、美观性与施工效率，为客户提供稳定可靠的产品解决方案。',
}

export default function AboutPage() {
  return (
    <div className="pt-20 bg-charcoal-900 min-h-screen">
      {/* 标题、简介、能力、流程、愿景（双语，随语言切换） */}
      <AboutClient />
      <StatsSection />
      <CTASection />
    </div>
  )
}
