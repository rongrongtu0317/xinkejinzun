import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products } from '@/data/products'
import FAQSection from '@/components/product/FAQSection'
import MaterialStructure from '@/components/sections/MaterialStructure'
import CTASection from '@/components/sections/CTASection'
import ColorSchemeSection from '@/components/sections/ColorSchemeSection'
import ProductDetailClient from './ProductDetailClient'
import ProductSpecsSection from './ProductSpecsSection'
import RelatedProducts from './RelatedProducts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: product.name.zh,
    description: product.description.zh,
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  // 相关产品（同分类或全部，排除当前）
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <div className="pt-20 bg-charcoal-900 min-h-screen">
      {/* 产品详情客户端组件（动画部分） */}
      <ProductDetailClient product={product} />

      {/* 产品参数表 */}
      <ProductSpecsSection specs={product.specs} />

      {/* 材料结构 */}
      <MaterialStructure />

      {/* 颜色选择 */}
      <ColorSchemeSection />

      {/* 相关产品 */}
      <RelatedProducts related={related} />

      {/* 常见问题 */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </div>
  )
}
