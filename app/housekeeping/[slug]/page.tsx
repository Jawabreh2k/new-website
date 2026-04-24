import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getHousekeepingProductBySlug,
  housekeepingProducts,
} from '@/lib/housekeeping-products'
import { HousekeepingProductDetailPage } from '@/views/HousekeepingProductDetailPage'

export function generateStaticParams() {
  return housekeepingProducts.map((p) => ({ slug: p.slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getHousekeepingProductBySlug(slug)
  if (!product) {
    return { title: 'Product' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function HousekeepingProductRoute({ params }: PageProps) {
  const { slug } = await params
  const product = getHousekeepingProductBySlug(slug)
  if (!product) {
    notFound()
  }
  return <HousekeepingProductDetailPage product={product} />
}
