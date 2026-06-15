'use client'

import { motion } from 'framer-motion'

// 联系方式占位 — 替换为真实联系方式
const contactItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 3h12a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#c4a35a" strokeWidth="1.2"/>
        <path d="M2 4l7 6 7-6" stroke="#c4a35a" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: '邮箱',
    value: 'rongrongtu0202@gmail.com',
    note: '',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3.5 2h4l1.5 3.5-2 1.2c.8 1.8 2.2 3.2 4 4l1.2-2L16 10v4c0 .8-.7 1.4-1.5 1.3C5.2 14.3 2 8 2 3.5 2 2.7 2.7 2 3.5 2z" stroke="#c4a35a" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
    label: '联系电话',
    value: '19322277172',
    note: '',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="8" r="3" stroke="#c4a35a" strokeWidth="1.2"/>
        <path d="M9 1C5.1 1 2 4.1 2 8c0 5.3 7 10 7 10s7-4.7 7-10c0-3.9-3.1-7-7-7z" stroke="#c4a35a" strokeWidth="1.2"/>
      </svg>
    ),
    label: '公司地址',
    value: '【公司地址待补充】',
    note: '',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="2" stroke="#c4a35a" strokeWidth="1.2"/>
        <path d="M6 6h2v2H6zM10 6h2v2h-2zM6 10h2v2H6zM10 10h2v2h-2z" fill="#c4a35a" opacity="0.6"/>
      </svg>
    ),
    label: '微信 / WhatsApp',
    value: '+86 19322277172',
    note: 'WhatsApp / 微信同号',
  },
]

export default function ContactInfoClient() {
  return (
    <div>
      <div className="mb-8">
        <span className="section-label">联系方式</span>
        <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
        <h2 className="text-warm-100 font-light text-xl">与我们取得联系</h2>
      </div>

      <p className="text-warm-500 text-sm leading-relaxed mb-10">
        无论您处于项目哪个阶段 — 初步了解产品、确认规格，
        还是需要正式报价 — 我们都欢迎您联系我们。
        通常在 1-2 个工作日内回复。
      </p>

      <div className="space-y-6">
        {contactItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex items-start gap-4 py-5 border-b border-charcoal-700"
          >
            <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
            <div>
              <p className="text-[10px] text-charcoal-300 tracking-widest uppercase mb-1">{item.label}</p>
              <p className="text-warm-200 text-sm">{item.value}</p>
              <p className="text-charcoal-400 text-[10px] mt-1">{item.note}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 工作时间 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-10 p-5 bg-charcoal-800 border border-charcoal-700"
      >
        <h4 className="text-warm-200 text-sm font-medium mb-3">工作时间</h4>
        <div className="space-y-2 text-xs text-charcoal-200">
          <div className="flex justify-between">
            <span>周一 至 周五</span>
            <span>09:00 - 18:00</span>
          </div>
          <div className="flex justify-between">
            <span>周六</span>
            <span>09:00 - 12:00</span>
          </div>
          <div className="flex justify-between text-charcoal-400">
            <span>周日 / 法定节假日</span>
            <span>休息</span>
          </div>
        </div>
        <p className="text-charcoal-400 text-[10px] mt-4">
          紧急事项可通过微信 / WhatsApp 联系，我们将尽快回复。
        </p>
      </motion.div>
    </div>
  )
}
