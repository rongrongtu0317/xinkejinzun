'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

// id / 编号 / 配图（结构性，与语言无关）；文案从语言包按序号取
const mfgMeta = [
  { id: 'production',  label: '01', image: '/images/mfg/production.jpg' },
  { id: 'rd',          label: '02', image: '/images/mfg/rd.jpg' },
  { id: 'color',       label: '03', image: '/images/mfg/color.jpg' },
  { id: 'quality',     label: '04', image: '/images/mfg/quality.jpg' },
  { id: 'accessories', label: '05', image: '/images/mfg/accessories.jpg' },
  { id: 'service',     label: '06', image: '/images/mfg/service.jpg' },
]

export default function ManufacturingSection() {
  const { t } = useLanguage()
  const items = t.manufacturing.items.map((item, i) => ({
    id: mfgMeta[i].id,
    label: mfgMeta[i].label,
    image: mfgMeta[i].image,
    title: item.title,
    desc: item.desc,
    detail: item.detail,
  }))
  const [active, setActive] = useState(mfgMeta[0].id)
  const activeItem = items.find((it) => it.id === active)!

  return (
    <section className="py-24 lg:py-36 bg-charcoal-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <SectionTitle
            label={t.manufacturing.label}
            title={t.manufacturing.title}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* 左侧选项列表 */}
          <div className="flex flex-col gap-0 divide-y divide-charcoal-700">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex items-center gap-5 py-5 text-left transition-all duration-300 group ${
                  active === item.id ? 'bg-transparent' : 'hover:bg-charcoal-700/30'
                }`}
              >
                {/* 左侧数字 */}
                <span
                  className={`text-[10px] tracking-widest flex-shrink-0 w-8 transition-colors duration-300 ${
                    active === item.id ? 'text-gold-500' : 'text-charcoal-300'
                  }`}
                >
                  {item.label}
                </span>

                {/* 标题 */}
                <span
                  className={`font-light text-base transition-colors duration-300 flex-1 ${
                    active === item.id ? 'text-warm-100' : 'text-charcoal-200 group-hover:text-warm-300'
                  }`}
                >
                  {item.title}
                </span>

                {/* 右侧箭头 */}
                <motion.span
                  animate={{ x: active === item.id ? 0 : -4, opacity: active === item.id ? 1 : 0.3 }}
                  className="text-gold-500 flex-shrink-0"
                >
                  →
                </motion.span>

                {/* 激活指示线 */}
                {active === item.id && (
                  <motion.div
                    layoutId="mfg-active-line"
                    className="absolute left-0 w-0.5 h-full bg-gold-500"
                  />
                )}
              </button>
            ))}
          </div>

          {/* 右侧内容展示 */}
          <div className="lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* 真实工厂 / 产品图 */}
                <div className="relative h-64 lg:h-80 mb-8 overflow-hidden bg-charcoal-700">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="text-white/50 text-[10px] tracking-widest uppercase">{activeItem.label} / {activeItem.title}</span>
                  </div>
                </div>

                {/* 文字 */}
                <div className="space-y-4">
                  <h3 className="text-warm-100 font-light text-2xl">{activeItem.title}</h3>
                  <p className="text-warm-400 text-sm leading-relaxed">{activeItem.desc}</p>
                  <p className="text-charcoal-200 text-xs leading-relaxed border-l-2 border-gold-600/40 pl-4">
                    {activeItem.detail}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
