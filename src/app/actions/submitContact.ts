'use server'

import { createClient } from '@supabase/supabase-js'

export type ContactState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'error'; message: string }

// useActionState 要求签名：(prevState, formData) => Promise<State>
export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name        = (formData.get('name') as string)?.trim()
  const phone       = (formData.get('phone') as string)?.trim()
  const email       = (formData.get('email') as string)?.trim() || null
  const region      = (formData.get('region') as string)?.trim() || null
  const projectType = (formData.get('projectType') as string) || null
  const message     = (formData.get('message') as string)?.trim() || null

  if (!name || !phone) {
    return { status: 'error', message: '姓名和电话为必填项' }
  }

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    )

    const { error } = await supabase
      .from('contact_submissions')
      .insert({ name, phone, email, region, project_type: projectType, message })

    if (error) {
      console.error('[Contact Form] Supabase 写入失败:', error)
      return { status: 'error', message: `提交失败：${error.message}` }
    }

    return { status: 'success' }
  } catch (err) {
    console.error('[Contact Form] 未知错误:', err)
    return { status: 'error', message: '服务异常，请通过电话联系我们' }
  }
}
