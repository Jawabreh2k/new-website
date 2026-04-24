import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getKitchenProductBySlug,
  kitchenProducts,
} from '@/lib/kitchen-products'
import { KitchenProductDetailPage } from '@/views/KitchenProductDetailPage'

export function generateStaticParams() {
  return kitchenProducts.map((p) => ({ slug: p.slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getKitchenProductBySlug(slug)
  if (!product) {
    return { title: 'Product' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function KitchenProductRoute({ params }: PageProps) {
  const { slug } = await params
  const product = getKitchenProductBySlug(slug)
  if (!product) {
    notFound()
  }
  return <KitchenProductDetailPage product={product} />
}
