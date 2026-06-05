'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'

const params = [
  { label: '产品尺寸',   value: '1340 × 420',  unit: 'mm' },
  { label: '常规厚度',   value: '0.4',          unit: 'mm' },
  { label: '单片重量',   value: '约 2.8',       unit: 'kg / 片' },
  { label: '每平方用量', value: '约 2.08',      unit: '片 / ㎡' },
  { label: '基材',       value: '镀铝锌钢板',   unit: '' },
  { label: '表面工艺',   value: '高温烧结彩砂', unit: '' },
  { label: '颜色',       value: '支持定制',     unit: '' },
  { label: '配套系统',   value: '主瓦 + 配件',  unit: '全系配套' },
]

export default function ParamsSection() {
  return (
    <section className="py-20 lg:py-28 bg-warm-100 relative overflow-hidden">
      {/* 背景纹理 */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 24px, rgba(17,17,17,0.02) 24px, rgba(17,17,17,0.02) 25px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* 左侧标题 */}
          <div>
            <SectionTitle
              label="产品参数"
              title="关键参数，<br/>一眼了解产品基础"
              subtitle="以下参数为常规产品参考值，特殊规格可定制，具体以实际产品配置和项目需求为准。"
              light={false}
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-xs text-warm-500 leading-relaxed max-w-xs"
            >
              如需了解特定项目的详细参数配置，请联系我们获取产品手册与技术资料。
              我们可根据项目需求提供选型建议与定制方案。
            </motion.p>
          </div>

          {/* 右侧参数面板 */}
          <div>
            <div className="divide-y divide-warm-300/50">
              {params.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-between py-4 group"
                >
                  <span className="text-warm-600 text-sm">{p.label}</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-charcoal-700 font-medium text-base">{p.value}</span>
                    {p.unit && (
                      <span className="text-warm-500 text-xs">{p.unit}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 底部注释 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-6 pt-5 border-t border-warm-300/50"
            >
              <p className="text-warm-500 text-xs leading-relaxed">
                ※ 以上参数为参考值，具体以实际产品配置和项目需求为准。
                产品规格、颜色及配套配件支持按项目定制，请联系我们获取详细方案。
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
