'use client'

import * as React from 'react'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { SectionWrapper } from '@/components/SectionWrapper'
import { CTASection } from '@/components/CTASection'
import { HousekeepingProductCard } from '@/components/HousekeepingProductCard'
import { useLocale } from '@/components/LocaleProvider'
import { routes } from '@/lib/routes'
import { housekeepingProducts } from '@/lib/housekeeping-products'
import { Building2, ClipboardCheck, Sparkles, Package } from 'lucide-react'

export function HousekeepingPage() {
  const { t } = useLocale()

  const highlights = React.useMemo(
    () =>
      [
        {
          title: t('housekeeping.h1Title'),
          body: t('housekeeping.h1Body'),
          icon: Sparkles,
        },
        {
          title: t('housekeeping.h2Title'),
          body: t('housekeeping.h2Body'),
          icon: Building2,
        },
        {
          title: t('housekeeping.h3Title'),
          body: t('housekeeping.h3Body'),
          icon: ClipboardCheck,
        },
      ] as const,
    [t],
  )

  const opsItems = React.useMemo(
    () =>
      [
        t('housekeeping.opsLi1'),
        t('housekeeping.opsLi2'),
        t('housekeeping.opsLi3'),
        t('housekeeping.opsLi4'),
        t('housekeeping.opsLi5'),
      ] as const,
    [t],
  )

  return (
    <>
      <Hero
        eyebrow={t('housekeeping.heroEyebrow')}
        title={t('housekeeping.heroTitle')}
        description={t('housekeeping.heroDescription')}
        primaryCta={{ href: routes.contact, label: t('housekeeping.primaryCta') }}
        secondaryCta={{
          href: '#products',
          label: t('housekeeping.viewProductRange'),
        }}
        imageSrc="/products/housekeeping/multi-s2-spray.png"
        imageAlt={t('housekeeping.heroAlt')}
      />
      <SectionWrapper
        eyebrow={t('housekeeping.focusEyebrow')}
        title={t('housekeeping.focusTitle')}
        subtitle={t('housekeeping.focusSubtitle')}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-sm border border-border/80 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h.icon className="size-8 text-brand-teal" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-primary">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {h.body}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="products"
        eyebrow={t('housekeeping.productsEyebrow')}
        title={t('housekeeping.productsTitle')}
        subtitle={t('housekeeping.productsSubtitle')}
        variant="muted"
        className="border-t border-border/60"
      >
        <div className="mb-8 flex items-start gap-3 rounded-md border border-dashed border-border bg-background/80 px-4 py-3 text-sm text-muted-foreground">
          <Package className="mt-0.5 size-5 shrink-0 text-brand-teal" aria-hidden />
          <p>
            {t('housekeeping.productsNote')}{' '}
            <Link
              href={routes.contact}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t('housekeeping.productsContact')}
            </Link>{' '}
            {t('housekeeping.productsNoteSuffix')}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {housekeepingProducts.map((product) => (
            <HousekeepingProductCard key={product.slug} product={product} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow={t('housekeeping.opsEyebrow')}
        title={t('housekeeping.opsTitle')}
        subtitle={t('housekeeping.opsSubtitle')}
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {opsItems.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-sm border border-border/70 bg-background px-4 py-3 text-sm text-muted-foreground"
            >
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <CTASection
        title={t('housekeeping.ctaTitle')}
        description={t('housekeeping.ctaDescription')}
        primaryCta={{ href: routes.contact, label: t('housekeeping.ctaPrimary') }}
        secondaryCta={{ href: routes.laundry, label: t('housekeeping.ctaSecondary') }}
      />
    </>
  )
}
