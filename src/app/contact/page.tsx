import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: '联系我们',
  description: '联系彩石金属瓦，获取产品选型建议、颜色方案、参数确认与工程报价支持。',
}

export default function ContactPage() {
  return <ContactClient />
}
