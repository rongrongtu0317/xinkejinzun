'use client'

import { motion } from 'framer-motion'

const capabilities = [
  {
    title: '制造能力',
    id: 'capability',
    desc: '多条现代化自动化生产线，涵盖基材处理、彩砂覆层、成型加工全流程，具备稳定的大批量生产能力，可满足国内外工程项目的供货需求。',
  },
  {
    title: '研发与质检',
    id: 'quality',
    desc: '持续投入产品研发与质量检测体系建设，对原料、过程、成品进行多环节质量管控。关键性能指标包括彩砂附着力、耐候性、防腐性等均有严格标准。',
  },
  {
    title: '产品体系',
    id: 'products',
    desc: '构建完整的彩石金属瓦产品体系，包括常规款、加长定制款、多种瓦型及配套配件系统，覆盖多种建筑屋面应用场景。',
  },
  {
    title: '服务流程',
    id: 'service',
    desc: '从项目咨询、选型建议、颜色确认到技术支持与售后服务，构建全流程服务体系，陪伴客户完成从产品选择到项目交付的完整过程。',
  },
]

const values = [
  { label: '可靠', desc: '稳定的产品品质是我们最基本的承诺' },
  { label: '专业', desc: '聚焦彩石金属瓦领域，深耕产品与服务' },
  { label: '长期', desc: '关注建筑屋面的长期耐久性与使用价值' },
  { label: '协作', desc: '与工程商、设计师和客户共同完成项目' },
]

export default function AboutClient() {
  return (
    <>
      {/* 制造能力 */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="section-label">能力体系</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">制造能力与服务体系</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-charcoal-700">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.id}
                id={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-charcoal-800 p-10 group hover:bg-charcoal-700 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[10px] text-gold-600 tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                  <div className="w-6 h-px bg-gold-500/30" />
                </div>
                <h3 className="text-warm-100 font-medium text-lg mb-4">{cap.title}</h3>
                <p className="text-warm-500 text-sm leading-loose">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 生产流程 */}
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <span className="section-label">生产流程</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">从原料到成品</h2>
          </div>

          <div className="relative">
            {/* 连接线 */}
            <div className="absolute top-8 left-0 right-0 h-px bg-charcoal-600 hidden lg:block" />

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-0">
              {['原料检验', '基材处理', '彩砂覆层', '成型加工', '质检出厂'].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative flex flex-col items-center text-center px-4"
                >
                  {/* 节点圆圈 */}
                  <div className="relative z-10 w-16 h-16 border border-gold-600 bg-charcoal-800 flex items-center justify-center mb-4">
                    <span className="text-gold-500 text-xl font-light">{i + 1}</span>
                  </div>
                  <h4 className="text-warm-200 text-sm font-medium">{step}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 企业愿景与价值观 */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">愿景</span>
              <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
              <h2 className="text-warm-100 font-light text-2xl mb-6">企业愿景</h2>
              <p className="text-warm-400 text-sm leading-loose mb-5">
                我们致力于成为建筑屋面材料领域受信赖的专业供应商，
                持续提升产品质量与服务能力，为更多建筑项目提供优质的屋面解决方案。
              </p>
              <p className="text-warm-400 text-sm leading-loose">
                在实现商业目标的同时，注重产品对建筑长期价值的贡献，
                追求每一个项目从材料到工艺的高品质表达。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-charcoal-700">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-charcoal-800 p-6 hover:bg-charcoal-700 transition-colors duration-300"
                >
                  <div
                    className="text-gold-500 font-light mb-3"
                    style={{ fontSize: '2rem', letterSpacing: '-0.02em' }}
                  >
                    {v.label}
                  </div>
                  <p className="text-charcoal-200 text-xs leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
