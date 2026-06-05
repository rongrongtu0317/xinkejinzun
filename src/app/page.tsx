import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ProductCategoryGrid from '@/components/sections/ProductCategoryGrid'
import FeatureSection from '@/components/sections/FeatureSection'
import MaterialStructure from '@/components/sections/MaterialStructure'
import ParamsSection from '@/components/sections/ParamsSection'
import ColorSchemeSection from '@/components/sections/ColorSchemeSection'
import ApplicationSection from '@/components/sections/ApplicationSection'
import CaseStudies from '@/components/sections/CaseStudies'
import ManufacturingSection from '@/components/sections/ManufacturingSection'
import StatsSection from '@/components/ui/StatsSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: '彩石金属瓦 | 专业金属屋面系统解决方案',
  description:
    '专注彩石金属瓦与金属屋面系统，为住宅、别墅、商业建筑和工程项目提供美观、耐候、轻质、高强的屋面解决方案。支持颜色与规格定制，配件体系完整。',
}

export default function HomePage() {
  return (
    <>
      {/* 首屏 Hero — 全屏大图 + 大标题 */}
      <HeroSection />

      {/* 产品分类网格 */}
      <ProductCategoryGrid />

      {/* 核心价值四个特性 */}
      <FeatureSection />

      {/* 材料结构剖面分解 */}
      <MaterialStructure />

      {/* 参数速览 */}
      <ParamsSection />

      {/* 屋面配色方案 */}
      <ColorSchemeSection />

      {/* 应用场景 */}
      <ApplicationSection />

      {/* 工程案例 */}
      <CaseStudies />

      {/* 制造实力 */}
      <ManufacturingSection />

      {/* 数据统计 */}
      <StatsSection />

      {/* 底部 CTA */}
      <CTASection />
    </>
  )
}
