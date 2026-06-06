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

  // 验证环境变量是否已加载（如未加载说明 .env.local 未生效，需重启服务）
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('[Contact Form] 缺少环境变量: 请确认 .env.local 已创建并已重启开发服务器')
    return { success: false, error: '服务配置错误，请联系管理员（缺少数据库连接配置）' }
  }

  try {
    const supabase = await createClient()

    const { error } = await supabase
      .from('contact_submissions')
      .insert({ name, phone, email, region, project_type: projectType, message })

    if (error) {
      console.error('[Contact Form] Supabase 写入失败:', JSON.stringify(error))
      return { success: false, error: `提交失败：${error.message || '请稍后重试'}` }
    }

    return { success: true }
  } catch (err) {
    console.error('[Contact Form] 未知错误:', err)
    return { success: false, error: '服务异常，请通过电话联系我们' }
  }
}
