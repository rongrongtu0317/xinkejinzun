'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const installSteps = [
  {
    step: '01',
    title: '基层检查',
    desc: '检查屋面基层结构的平整度、强度与防水层状态，确认坡度满足安装要求，记录异常部位并处理。',
  },
  {
    step: '02',
    title: '挂瓦条安装',
    desc: '按设计图纸固定顺水条与挂瓦条，确保间距均匀、固定牢靠，为主瓦铺装提供稳定基础。',
  },
  {
    step: '03',
    title: '主瓦铺装',
    desc: '从屋檐向屋脊方向逐行铺装主瓦，按规定搭接长度安装，确保每片主瓦稳固挂入挂瓦条。',
  },
  {
    step: '04',
    title: '脊瓦安装',
    desc: '屋脊处安装脊瓦，做好防水处理，确保屋脊线条整齐、密封良好，防止雨水渗漏。',
  },
  {
    step: '05',
    title: '节点收边',
    desc: '安装山墙板、檐口板、泛水板等配件，处理管道、天窗等特殊节点，完成各部位收边处理。',
  },
  {
    step: '06',
    title: '检查验收',
    desc: '全面检查铺装质量，核实各节点处理情况，确认颜色一致性与整体效果，完成施工记录。',
  },
]

const services = [
  {
    title: '产品选型',
    desc: '根据建筑类型、屋面坡度、面积与风格偏好，推荐适合的瓦型与颜色方案，提供选型依据。',
  },
  {
    title: '颜色建议',
    desc: '提供颜色搭配参考，结合建筑外立面颜色与项目环境，给出专业的色彩选择建议。',
  },
  {
    title: '参数确认',
    desc: '根据具体项目的屋面结构、坡度与面积，确认产品规格参数与用量计算，提供技术参数资料。',
  },
  {
    title: '配件匹配',
    desc: '根据主瓦型号确认配套配件清单，包括脊瓦、檐口板、山墙板等，保证系统完整性。',
  },
  {
    title: '安装指导',
    desc: '提供安装说明文件与施工注意事项，支持视频或现场技术指导（大型项目可协商）。',
  },
  {
    title: '售后服务',
    desc: '交付后如有质量问题，及时响应并协助处理。提供产品质量保障与持续技术支持。',
  },
]

const notices = [
  '产品参数以实际项目配置为准，施工前请确认产品规格与安装说明。',
  '不同屋面结构（木结构、混凝土、钢结构）需要调整安装方案，请提前确认。',
  '配件系统需与主瓦型号匹配，混用不同系列配件可能影响整体性能。',
  '旧房翻新项目需提前评估原有屋面结构承载能力与防水状态。',
  '安装过程中如遇特殊节点（如天窗、管道穿越等），需专项处理防水。',
  '产品验收时请核对颜色与产品规格，批次色差请及时反馈。',
]

export default function InstallationClient() {
  return (
    <>
      {/* 安装流程 */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="section-label">安装流程</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">标准安装步骤</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal-700">
            {installSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-charcoal-800 p-8 group hover:bg-charcoal-700 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="text-gold-500 text-3xl font-light leading-none">{step.step}</span>
                  <div className="w-8 h-px bg-gold-500/30 mt-4" />
                </div>
                <h3 className="text-warm-100 font-medium text-base mb-3">{step.title}</h3>
                <p className="text-charcoal-200 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 技术支持服务 */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="section-label">服务内容</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">技术支持服务</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border border-gold-600 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-gold-500" />
                  </div>
                  <h3 className="text-warm-100 text-sm font-medium">{s.title}</h3>
                </div>
                <p className="text-charcoal-200 text-sm leading-relaxed pl-8">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 注意事项 */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <span className="section-label">施工说明</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">注意事项</h2>
          </div>

          <div className="space-y-4">
            {notices.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 py-4 border-b border-charcoal-700"
              >
                <span className="text-gold-600 text-[10px] tracking-widest flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-warm-400 text-sm leading-relaxed">{n}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 border border-charcoal-700 bg-charcoal-800">
            <p className="text-charcoal-200 text-sm leading-relaxed mb-5">
              以上为通用安装参考指南，具体施工方案需根据项目实际情况制定。
              如有疑问或需要详细技术支持，欢迎联系我们获取专业建议。
            </p>
            <Link href="/contact" className="btn-gold text-sm inline-flex">
              联系技术支持
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
