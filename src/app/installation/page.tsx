import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import CTASection from '@/components/sections/CTASection'
import InstallationClient from './InstallationClient'

export const metadata: Metadata = {
  title: '安装与技术支持',
  description: '彩石金属瓦安装流程、技术支持服务、施工注意事项详解，帮助工程团队高效完成屋面铺装。',
}

export default function InstallationPage() {
  return (
    <div className="pt-20 bg-charcoal-900 min-h-screen">
      {/* 页眉 */}
      <div className="py-24 bg-charcoal-800 relative overflow-hidden">
        <div className="absolute inset-0 tile-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <span className="section-label">技术支持</span>
          <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
          <h1
            className="text-warm-100 font-light mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
          >
            安装与技术支持
          </h1>
          <p className="text-warm-500 text-base max-w-xl leading-relaxed">
            提供完整的安装流程指导、技术支持服务与施工注意事项，
            帮助工程团队高效完成屋面铺装，保障长期使用效果。
          </p>
        </div>
      </div>

      <InstallationClient />
      <CTASection />
    </div>
  )
}
