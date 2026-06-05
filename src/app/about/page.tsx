import type { Metadata } from 'next'
import Image from 'next/image'
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
      {/* 大标题区 */}
      <div className="relative py-28 lg:py-40 bg-charcoal-800 overflow-hidden">
        <div className="absolute inset-0 tile-pattern" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(196,163,90,0.06) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <span className="section-label">关于我们</span>
          <div className="w-10 h-px bg-gold-500 my-5 opacity-70" />
          <h1
            className="text-warm-100 font-light leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', letterSpacing: '-0.025em' }}
          >
            专注彩石金属瓦，<br />
            <span className="text-warm-400">为建筑屋面提供长期稳定解决方案</span>
          </h1>
        </div>
      </div>

      {/* 企业简介 */}
      <section className="py-24 bg-warm-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* 左侧文案 — 替换为真实企业介绍 */}
            <div>
              <span className="section-label text-gold-700">企业简介</span>
              <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
              <h2 className="text-charcoal-800 font-light text-2xl mb-6 leading-snug">
                我们是谁
              </h2>
              <p className="text-warm-600 text-sm leading-loose mb-5">
                河北宇盛建材有限公司专注于彩石金属瓦及金属屋面系统产品的研发、生产与供应，
                围绕建筑屋面的安全性、耐久性、美观性与施工效率，
                为客户提供稳定可靠的产品解决方案。
              </p>
              <p className="text-warm-600 text-sm leading-loose mb-5">
                从住宅别墅到商业综合体，从国内工程到海外项目，
                我们的产品体系覆盖多种建筑类型与气候环境，
                配套完整的配件系统与技术服务支持。
              </p>
              <p className="text-warm-600 text-sm leading-loose">
                我们相信，一块优质的屋面瓦不只是建筑的覆盖材料，
                更是建筑长期价值与美观表达的重要组成部分。
              </p>
            </div>

            {/* 右侧工厂实景图 */}
            <div className="relative h-80 lg:h-auto min-h-64 overflow-hidden">
              <Image
                src="/images/about/factory.jpg"
                alt="河北宇盛建材有限公司生产车间"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <AboutClient />
      <StatsSection />
      <CTASection />
    </div>
  )
}
