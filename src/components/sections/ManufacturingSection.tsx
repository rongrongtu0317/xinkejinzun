'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

const items = [
  {
    id: 'production',
    title: '生产制造',
    label: '01',
    desc: '多条现代化自动化生产线，覆盖基材处理、彩砂覆层、成型加工全流程，稳定保障产品品质与产能。',
    detail: '从镀铝锌钢板的基材处理，到高温烧结彩砂覆层，再到成型切割，全程工艺控制，保证每批次产品的一致性与稳定性。',
    image: '/images/mfg/production.jpg',
  },
  {
    id: 'rd',
    title: '产品研发',
    label: '02',
    desc: '持续投入产品研发，针对不同气候环境、屋面结构与建筑风格，开发适配的瓦型与配套系统方案。',
    detail: '产品研发围绕屋面性能、美观表达与施工效率三个维度展开，不断优化结构设计与表面工艺。',
    image: '/images/mfg/tiles.jpg',
  },
  {
    id: 'color',
    title: '颜色定制',
    label: '03',
    desc: '支持客户根据项目需求定制颜色，提供专业选色建议与样品确认服务，确保最终颜色与设计预期一致。',
    detail: '色卡样品可提前确认，量产前进行颜色一致性检验，避免批次色差。颜色选型建议可结合建筑设计图提供。',
    image: '/images/mfg/tiles.jpg',
  },
  {
    id: 'quality',
    title: '质量检测',
    label: '04',
    desc: '建立覆盖原料进场、生产过程、成品出厂的多环节质量检测体系，对关键性能指标进行严格把控。',
    detail: '检测项目涵盖基材厚度、彩砂附着力、耐候性、防腐性等核心指标，保障出厂产品符合质量标准。',
    image: '/images/mfg/press.jpg',
  },
  {
    id: 'accessories',
    title: '配件配套',
    label: '05',
    desc: '配件体系与主瓦同步设计，包括脊瓦、檐口板、山墙板、泛水板、固定件等，实现屋面系统的完整性。',
    detail: '配件规格与主瓦型号严格匹配，材质工艺一致，保证屋面系统整体的外观协调与防水性能。',
    image: '/images/mfg/stamping.jpg',
  },
  {
    id: 'service',
    title: '技术服务',
    label: '06',
    desc: '提供产品选型建议、颜色方案推荐、技术参数说明、安装指导和售后支持，全程陪伴项目落地。',
    detail: '服务覆盖项目前期选型、施工阶段指导和交付后支持，确保屋面系统从产品到施工的整体质量。',
    image: '/images/mfg/line2.jpg',
  },
]

export default function ManufacturingSection() {
  const [active, setActive] = useState(items[0].id)
  const activeItem = items.find((it) => it.id === active)!

  return (
    <section className="py-24 lg:py-36 bg-charcoal-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <SectionTitle
            label="制造实力"
            title="从生产到交付，<br/>建立稳定的产品体系"
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
