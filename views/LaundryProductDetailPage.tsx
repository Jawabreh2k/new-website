'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, Headphones, Package } from 'lucide-react'
import type { LaundryProduct } from '@/lib/laundry-products'
import { getLaundryProductCopy } from '@/lib/laundry-product-i18n'
import { routes } from '@/lib/routes'
import { Button } from '@/components/ui/button'
import { ProductDetailBackLink } from '@/components/ProductDetailBackLink'
import { SectionWrapper } from '@/components/SectionWrapper'
import { useLocale } from '@/components/LocaleProvider'

type Props = {
  product: LaundryProduct
}

export function LaundryProductDetailPage({ product }: Props) {
  const { locale, t } = useLocale()
  const copy = React.useMemo(
    () => getLaundryProductCopy(product, locale),
    [product, locale],
  )

  const supportBullets = React.useMemo(
    () =>
      [
        t('laundry.detailSupportLi1'),
        t('laundry.detailSupportLi2'),
        t('laundry.detailSupportLi3'),
      ] as const,
    [t],
  )

  return (
    <>
      <section className="border-b border-border/60 bg-gradient-to-b from-muted/40 to-background">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <ProductDetailBackLink
            href={`${routes.laundry}#products`}
            label={t('laundry.detailBack')}
          />

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border border-border/80 bg-muted/60 p-8 shadow-lg ring-2 ring-primary/5 ring-offset-4 ring-offset-background lg:max-w-lg lg:p-10">
              <Image
                src={product.image}
                alt={copy.name}
                fill
                className="object-contain object-center"
                sizes="(min-width: 1024px) 480px, 90vw"
                priority
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
                {t('laundry.detailEyebrow')}
              </p>
              <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                {copy.name}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {copy.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="premium" size="lg" asChild>
                  <Link href={routes.contact}>{t('laundry.detailCtaSpecs')}</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href={routes.laundry}>{t('laundry.detailCtaAll')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper
        eyebrow={t('laundry.detailSectionEyebrow')}
        title={t('laundry.detailSectionTitle')}
        subtitle={t('laundry.detailSectionSubtitle')}
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-lg border border-border/80 bg-card p-6 shadow-sm">
            <Package className="size-8 text-brand-teal" aria-hidden />
            <h3 className="mt-4 text-base font-semibold text-primary">
              {t('laundry.detailAppTitle')}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t('laundry.detailAppBody')}
            </p>
          </div>
          <div className="rounded-lg border border-border/80 bg-card p-6 shadow-sm">
            <FileText className="size-8 text-brand-teal" aria-hidden />
            <h3 className="mt-4 text-base font-semibold text-primary">
              {t('laundry.detailComplianceTitle')}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t('laundry.detailComplianceBody')}
            </p>
          </div>
          <div className="rounded-lg border border-border/80 bg-card p-6 shadow-sm">
            <Headphones className="size-8 text-brand-teal" aria-hidden />
            <h3 className="mt-4 text-base font-semibold text-primary">
              {t('laundry.detailSupportTitle')}
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {supportBullets.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
