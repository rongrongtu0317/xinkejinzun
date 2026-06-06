// 此文件已完成调试使命，可以删除
// 删除方法：删除 src/app/api/env-check/ 整个目录
import { NextResponse } from 'next/server'
export async function GET() {
  return NextResponse.json({ message: '调试接口，可删除此目录' })
}
