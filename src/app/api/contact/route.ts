import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const name        = body.name?.trim()
    const phone       = body.phone?.trim()
    const email       = body.email?.trim() || null
    const region      = body.region?.trim() || null
    const projectType = body.projectType || null
    const message     = body.message?.trim() || null

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: '姓名和电话为必填项' },
        { status: 400 }
      )
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    )

    const { error } = await supabase
      .from('contact_submissions')
      .insert({ name, phone, email, region, project_type: projectType, message })

    if (error) {
      console.error('[Contact API] Supabase 写入失败:', error)
      return NextResponse.json(
        { success: false, error: `提交失败：${error.message}` },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API] 未知错误:', err)
    return NextResponse.json(
      { success: false, error: '服务异常，请通过电话联系我们' },
      { status: 500 }
    )
  }
}
