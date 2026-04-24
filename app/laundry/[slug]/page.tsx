import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  getLaundryProductBySlug,
  laundryProducts,
} from '@/lib/laundry-products'
import { LaundryProductDetailPage } from '@/views/LaundryProductDetailPage'

export function generateStaticParams() {
  return laundryProducts.map((p) => ({ slug: p.slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getLaundryProductBySlug(slug)
  if (!product) {
    return { title: 'Product' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function LaundryProductRoute({ params }: PageProps) {
  const { slug } = await params
  const product = getLaundryProductBySlug(slug)
  if (!product) {
    notFound()
  }
  return <LaundryProductDetailPage product={product} />
}
