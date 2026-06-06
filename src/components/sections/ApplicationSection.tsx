'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

const applications = [
  {
    id: 'villa',
    name: '高端住宅',
    subtitle: '别墅 · 庄园 · 私宅',
    desc: '轻质金属瓦为高端住宅屋面提供美观与耐久的双重保障，多种瓦型与颜色匹配不同建筑风格。',
    image: '/images/app/villa.jpg',
  },
  {
    id: 'resort',
    name: '文旅建筑',
    subtitle: '民宿 · 度假 · 景区',
    desc: '圆弧型与自然色系瓦片，帮助文旅建筑在保持特色的同时实现耐候防腐的屋面性能。',
    image: '/images/app/residential.jpg',
  },
  {
    id: 'commercial',
    name: '商业建筑',
    subtitle: '综合体 · 园区 · 商场',
    desc: '加长定制款减少搭接，适合大面积商业屋面，施工效率高，外观整洁统一。',
    image: '/images/app/commercial.jpg',
  },
  {
    id: 'public',
    name: '公共建筑',
    subtitle: '学校 · 医院 · 政府',
    desc: '符合公共建筑对屋面安全性、耐久性的高要求，稳定可靠，易于维护。',
    image: '/images/app/aerial.jpg',
  },
  {
    id: 'renovation',
    name: '旧房翻新',
    subtitle: '改造 · 修缮 · 升级',
    desc: '轻质特性使彩石金属瓦特别适合旧房翻新场景，无需对原有结构进行额外加固。',
    image: '/images/app/building.jpg',
  },
  {
    id: 'overseas',
    name: '海外工程',
    subtitle: '出口 · 国际项目 · 工程',
    desc: '产品已供应多个海外工程项目，耐候性能适应不同气候条件，支持整批出口。',
    image: '/images/app/overseas.jpg',
  },
]

export default function ApplicationSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="py-24 lg:py-32 bg-charcoal-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <SectionTitle
          label="应用场景"
          title="适用于多种<br/>建筑屋面场景"
          subtitle="无论是私宅别墅、商业综合体，还是文旅建筑、旧房翻新，彩石金属瓦都能提供匹配的屋面解决方案。"
        />
      </div>

      {/* 大图分屏网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-700">
        {applications.map((app, i) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative group cursor-default"
            onMouseEnter={() => setHovered(app.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* 真实应用场景图 */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <Image
                src={app.image}
                alt={app.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
              />

              {/* 暗色遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />

              {/* hover 时增强遮罩以显示文字 */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: 'rgba(0,0,0,0.25)', opacity: hovered === app.id ? 1 : 0 }}
              />

              {/* 文字 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="text-[10px] tracking-widest text-white/50 uppercase mb-1">{app.subtitle}</p>
                <h3 className="text-warm-100 font-light text-xl">{app.name}</h3>

                {/* 说明文字 — 悬停显示 */}
                <motion.p
                  animate={{ opacity: hovered === app.id ? 1 : 0, y: hovered === app.id ? 0 : 8 }}
                  transition={{ duration: 0.3 }}
                  className="text-warm-300 text-xs leading-relaxed mt-2"
                >
                  {app.desc}
                </motion.p>
              </div>

              {/* 编号角标 */}
              <div className="absolute top-4 right-4 text-[10px] text-white/30 tracking-widest z-10">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
