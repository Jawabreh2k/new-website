'use client'

import * as React from 'react'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { SectionWrapper } from '@/components/SectionWrapper'
import { CTASection } from '@/components/CTASection'
import { LaundryProductCard } from '@/components/LaundryProductCard'
import { useLocale } from '@/components/LocaleProvider'
import { routes } from '@/lib/routes'
import { laundryProducts } from '@/lib/laundry-products'
import { Shirt, Scale, Wallet, Sparkles, Package } from 'lucide-react'

export function LaundryPage() {
  const { t } = useLocale()

  const benefits = React.useMemo(
    () =>
      [
        {
          title: t('laundry.benefit1Title'),
          body: t('laundry.benefit1Body'),
          icon: Shirt,
        },
        {
          title: t('laundry.benefit2Title'),
          body: t('laundry.benefit2Body'),
          icon: Scale,
        },
        {
          title: t('laundry.benefit3Title'),
          body: t('laundry.benefit3Body'),
          icon: Wallet,
        },
      ] as const,
    [t],
  )

  const serviceBriefPoints = React.useMemo(
    () =>
      [t('laundry.briefLi1'), t('laundry.briefLi2'), t('laundry.briefLi3')] as const,
    [t],
  )

  return (
    <>
      <Hero
        eyebrow={t('laundry.heroEyebrow')}
        title={t('laundry.heroTitle')}
        description={t('laundry.heroDescription')}
        primaryCta={{ href: routes.contact, label: t('laundry.primaryCta') }}
        secondaryCta={{ href: '#products', label: t('laundry.secondaryCta') }}
        imageSrc="/products/laundry/complete-e1748332683540.png"
        imageAlt={t('laundry.heroAlt')}
      />

      <SectionWrapper
        id="brief"
        eyebrow={t('laundry.briefEyebrow')}
        title={t('laundry.briefTitle')}
        subtitle={t('laundry.briefSubtitle')}
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>{t('laundry.briefP1')}</p>
            <p>{t('laundry.briefP2')}</p>
          </div>
          <ul className="space-y-3 rounded-lg border border-border/80 bg-muted/40 p-6">
            {serviceBriefPoints.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-foreground sm:text-base">
                <Sparkles
                  className="mt-0.5 size-5 shrink-0 text-brand-teal"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="products"
        eyebrow={t('laundry.productsEyebrow')}
        title={t('laundry.productsTitle')}
        subtitle={t('laundry.productsSubtitle')}
        variant="muted"
      >
        <div className="mb-8 flex items-start gap-3 rounded-md border border-dashed border-border bg-background/80 px-4 py-3 text-sm text-muted-foreground">
          <Package className="mt-0.5 size-5 shrink-0 text-brand-teal" aria-hidden />
          <p>
            {t('laundry.productsNote')}{' '}
            <Link
              href={routes.contact}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t('laundry.productsContact')}
            </Link>{' '}
            {t('laundry.productsNoteSuffix')}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {laundryProducts.map((product) => (
            <LaundryProductCard key={product.slug} product={product} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow={t('laundry.benefitsEyebrow')}
        title={t('laundry.benefitsTitle')}
        narrowSubtitle={false}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-sm border border-border/80 bg-card p-6 shadow-sm"
            >
              <b.icon className="size-8 text-brand-teal" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-primary">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        title={t('laundry.ctaTitle')}
        description={t('laundry.ctaDescription')}
        primaryCta={{ href: routes.contact, label: t('laundry.ctaPrimary') }}
        secondaryCta={{ href: routes.home, label: t('laundry.ctaSecondary') }}
      />
    </>
  )
}
