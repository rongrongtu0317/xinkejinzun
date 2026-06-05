import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { products } from '@/data/products'
import ProductSpecsTable from '@/components/product/ProductSpecsTable'
import FAQSection from '@/components/product/FAQSection'
import MaterialStructure from '@/components/sections/MaterialStructure'
import CTASection from '@/components/sections/CTASection'
import ColorSchemeSection from '@/components/sections/ColorSchemeSection'
import ProductDetailClient from './ProductDetailClient'

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
    title: product.name,
    description: product.description,
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
      <section className="py-20 bg-charcoal-800">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <span className="section-label">产品规格</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">产品参数</h2>
          </div>
          <ProductSpecsTable specs={product.specs} />
        </div>
      </section>

      {/* 材料结构 */}
      <MaterialStructure />

      {/* 颜色选择 */}
      <ColorSchemeSection />

      {/* 相关产品 */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <span className="section-label">更多产品</span>
            <div className="w-10 h-px bg-gold-500 my-4 opacity-70" />
            <h2 className="text-warm-100 font-light text-2xl">您可能感兴趣</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-charcoal-700">
            {related.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group block bg-charcoal-800 hover:bg-charcoal-700 transition-colors duration-300">
                {/* 图占位 */}
                <div className="h-40 bg-charcoal-700 group-hover:bg-charcoal-600 transition-colors duration-300" />
                <div className="p-5">
                  <p className="text-[10px] text-charcoal-300 tracking-widest mb-2">{p.category}</p>
                  <h3 className="text-warm-200 text-sm font-light group-hover:text-gold-400 transition-colors duration-300">{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </div>
  )
}
