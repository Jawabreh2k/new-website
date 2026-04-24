'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { LaundryProduct } from '@/lib/laundry-products'
import { getLaundryProductCopy } from '@/lib/laundry-product-i18n'
import { routes } from '@/lib/routes'
import { cn } from '@/lib/utils'
import { useLocale } from '@/components/LocaleProvider'

export function LaundryProductCard({
  product,
  className,
}: {
  product: LaundryProduct
  className?: string
}) {
  const { locale, t } = useLocale()
  const copy = React.useMemo(
    () => getLaundryProductCopy(product, locale),
    [product, locale],
  )
  const href = `${routes.laundry}/${product.slug}`

  return (
    <Link
      href={href}
      className={cn(
        'group flex flex-col overflow-hidden rounded-lg border border-border/80 bg-card shadow-sm transition-all duration-300 hover:border-brand-teal/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
    >
      <div className="relative aspect-[4/5] w-full bg-muted/60 p-4 sm:p-6">
        <Image
          src={product.image}
          alt={copy.name}
          fill
          className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
        />
      </div>
      <div className="border-t border-border/60 bg-card px-4 py-4 sm:px-5">
        <h3 className="text-sm font-semibold leading-snug text-primary sm:text-base">
          {copy.name}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {copy.description}
        </p>
        <span className="mt-3 inline-block text-xs font-semibold text-brand-teal group-hover:underline">
          {t('laundry.cardViewDetails')}
        </span>
      </div>
    </Link>
  )
}
