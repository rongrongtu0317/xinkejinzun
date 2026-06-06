'use client'

import { useActionState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { submitContact, type ContactState } from '@/app/actions/submitContact'

const projectTypes = [
  '高端住宅 / 别墅',
  '商业建筑',
  '公共建筑',
  '旧房翻新',
  '文旅建筑',
  '海外工程',
  '其他',
]

const initialState: ContactState = { status: 'idle' }

export default function ContactForm() {
  // React 19 useActionState — Next.js 16 推荐的 Server Action 调用方式
  // 通过 form action={action} 调用，避免 onSubmit 拦截导致的崩溃
  const [state, formAction, isPending] = useActionState(submitContact, initialState)

  // 滚动到顶部，让用户看到成功提示（移动端尤其需要）
  useEffect(() => {
    if (state.status === 'success') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [state.status])

  /* ── 成功页面 ── */
  if (state.status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-16 text-center"
      >
        <div className="w-12 h-12 border border-gold-500 flex items-center justify-center mx-auto mb-6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4 4 8-8" stroke="#c4a35a" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-warm-100 text-xl font-light mb-3">需求已提交</h3>
        <p className="text-charcoal-200 text-sm leading-relaxed max-w-sm mx-auto">
          感谢您的询问，我们将在 1-2 个工作日内与您联系，提供产品建议与报价方案。
        </p>
      </motion.div>
    )
  }

  /* ── 表单 ──
       关键修复：用 form action={formAction}，不用 onSubmit！
       这是 React 19 + Next 16 Server Action 的正确方式 */
  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-charcoal-200 tracking-wider mb-2">姓名 *</label>
          <input className="form-input" type="text" name="name"
            placeholder="您的姓名" required disabled={isPending} />
        </div>
        <div>
          <label className="block text-xs text-charcoal-200 tracking-wider mb-2">联系电话 *</label>
          <input className="form-input" type="tel" name="phone"
            placeholder="手机号 / 固定电话" required disabled={isPending} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs text-charcoal-200 tracking-wider mb-2">邮箱</label>
          <input className="form-input" type="email" name="email"
            placeholder="your@email.com" disabled={isPending} />
        </div>
        <div>
          <label className="block text-xs text-charcoal-200 tracking-wider mb-2">所在地区</label>
          <input className="form-input" type="text" name="region"
            placeholder="省份 / 城市" disabled={isPending} />
        </div>
      </div>

      <div>
        <label className="block text-xs text-charcoal-200 tracking-wider mb-2">项目类型 *</label>
        <select className="form-input" name="projectType" defaultValue="" required disabled={isPending}>
          <option value="" disabled>请选择项目类型</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs text-charcoal-200 tracking-wider mb-2">需求描述</label>
        <textarea className="form-input resize-none" name="message" rows={5}
          placeholder="请简要描述项目情况，如屋面面积、建筑类型、颜色偏好、预计工期等，方便我们提供更精准的建议..."
          disabled={isPending} />
      </div>

      <div className="border border-dashed border-charcoal-600 p-4 text-center">
        <p className="text-charcoal-300 text-xs">
          如有项目图纸或效果图，可通过邮件发送至我们的联系邮箱，以便提供更准确的产品建议。
        </p>
      </div>

      {/* 错误提示 */}
      {state.status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-400"
        >
          {state.message}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="btn-gold w-full justify-center py-4 text-sm font-medium
                   disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? (
          <>
            <svg className="animate-spin w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10"
                stroke="currentColor" strokeWidth="3"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            提交中...
          </>
        ) : (
          <>
            提交需求
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-2">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor"
                strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>

      <p className="text-charcoal-400 text-xs text-center">
        我们承诺保护您的个人信息，仅用于本次询价与服务沟通。
      </p>
    </form>
  )
}
