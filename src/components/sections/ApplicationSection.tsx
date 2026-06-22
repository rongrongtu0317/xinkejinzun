'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

// 每个场景的 id 与配图（结构性，与语言无关）；文案从语言包按序号取
const appMeta = [
  { id: 'villa',      image: '/images/app/villa.jpg' },
  { id: 'resort',     image: '/images/app/resort.jpg' },
  { id: 'commercial', image: '/images/app/commercial.jpg' },
  { id: 'public',     image: '/images/app/public.jpg' },
  { id: 'renovation', image: '/images/app/renovation.jpg' },
  { id: 'overseas',   image: '/images/app/overseas.jpg' },
]

export default function ApplicationSection() {
  const { t } = useLanguage()
  const [hovered, setHovered] = useState<string | null>(null)

  const applications = t.application.items.map((item, i) => ({
    id: appMeta[i].id,
    image: appMeta[i].image,
    name: item.name,
    subtitle: item.subtitle,
    desc: item.desc,
  }))

  return (
    <section className="py-24 lg:py-32 bg-charcoal-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <SectionTitle
          label={t.application.label}
          title={t.application.title}
          subtitle={t.application.subtitle}
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
