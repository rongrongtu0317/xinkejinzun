'use server'

import { createClient } from '@/lib/supabase/server'

export type SubmitContactResult =
  | { success: true }
  | { success: false; error: string }

export async function submitContact(
  formData: FormData
): Promise<SubmitContactResult> {
  const name        = (formData.get('name') as string)?.trim()
  const phone       = (formData.get('phone') as string)?.trim()
  const email       = (formData.get('email') as string)?.trim() || null
  const region      = (formData.get('region') as string)?.trim() || null
  const projectType = (formData.get('projectType') as string) || null
  const message     = (formData.get('message') as string)?.trim() || null

  if (!name || !phone) {
    return { success: false, error: '姓名和电话为必填项' }
  }

  try {
    const supabase = await createClient()

    const { error } = await supabase
      .from('contact_submissions')
      .insert({ name, phone, email, region, project_type: projectType, message })

    if (error) {
      console.error('[Contact Form] Supabase error:', error)
      return { success: false, error: '提交失败，请稍后重试' }
    }

    return { success: true }
  } catch (err) {
    console.error('[Contact Form] Unexpected error:', err)
    return { success: false, error: '服务异常，请通过电话联系我们' }
  }
}
