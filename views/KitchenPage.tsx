'use client'

import * as React from 'react'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { SectionWrapper } from '@/components/SectionWrapper'
import { CTASection } from '@/components/CTASection'
import { KitchenProductCard } from '@/components/KitchenProductCard'
import { useLocale } from '@/components/LocaleProvider'
import { routes } from '@/lib/routes'
import { kitchenProducts } from '@/lib/kitchen-products'
import { BadgeCheck, ChefHat, Timer, Package } from 'lucide-react'

export function KitchenPage() {
  const { t } = useLocale()
  const kitchenHeroSlides = React.useMemo(
    () =>
      kitchenProducts.map((product) => ({
        src: product.image,
        alt: `${product.name} kitchen product`,
      })),
    [],
  )

  const pillars = React.useMemo(
    () =>
      [
        {
          title: t('kitchen.p1Title'),
          body: t('kitchen.p1Body'),
          icon: BadgeCheck,
        },
        {
          title: t('kitchen.p2Title'),
          body: t('kitchen.p2Body'),
          icon: ChefHat,
        },
        {
          title: t('kitchen.p3Title'),
          body: t('kitchen.p3Body'),
          icon: Timer,
        },
      ] as const,
    [t],
  )

  const optimizeItems = React.useMemo(
    () =>
      [
        t('kitchen.optimizeLi1'),
        t('kitchen.optimizeLi2'),
        t('kitchen.optimizeLi3'),
        t('kitchen.optimizeLi4'),
      ] as const,
    [t],
  )

  const gainItems = React.useMemo(
    () =>
      [
        t('kitchen.gainLi1'),
        t('kitchen.gainLi2'),
        t('kitchen.gainLi3'),
        t('kitchen.gainLi4'),
      ] as const,
    [t],
  )

  return (
    <>
      <Hero
        eyebrow={t('kitchen.heroEyebrow')}
        title={t('kitchen.heroTitle')}
        description={t('kitchen.heroDescription')}
        primaryCta={{ href: routes.contact, label: t('kitchen.primaryCta') }}
        secondaryCta={{
          href: '#products',
          label: t('kitchen.viewProductRange'),
        }}
        imageSlides={kitchenHeroSlides}
        imageAlt={t('kitchen.heroAlt')}
      />
      <SectionWrapper
        eyebrow={t('kitchen.complianceEyebrow')}
        title={t('kitchen.complianceTitle')}
        subtitle={t('kitchen.complianceSubtitle')}
      >
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-sm border border-border/80 bg-card p-6 shadow-sm"
            >
              <p.icon className="size-8 text-brand-teal" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="products"
        eyebrow={t('kitchen.productsEyebrow')}
        title={t('kitchen.productsTitle')}
        subtitle={t('kitchen.productsSubtitle')}
        variant="muted"
        className="border-t border-border/60"
      >
        <div className="mb-8 flex items-start gap-3 rounded-md border border-dashed border-border bg-background/80 px-4 py-3 text-sm text-muted-foreground">
          <Package className="mt-0.5 size-5 shrink-0 text-brand-teal" aria-hidden />
          <p>
            {t('kitchen.productsNote')}{' '}
            <Link
              href={routes.contact}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t('kitchen.productsContact')}
            </Link>{' '}
            {t('kitchen.productsNoteSuffix')}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {kitchenProducts.map((product) => (
            <KitchenProductCard key={product.slug} product={product} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow={t('kitchen.systemsEyebrow')}
        title={t('kitchen.systemsTitle')}
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-sm border border-border/70 bg-background p-6">
            <h3 className="text-base font-semibold text-primary">
              {t('kitchen.optimizeTitle')}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {optimizeItems.map((line) => (
                <li
                  key={line}
                  className="group flex gap-3 rounded-sm border-2 border-border/80 bg-card px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-muted hover:shadow-md hover:shadow-primary/10 dark:hover:border-brand-teal dark:hover:bg-muted/50"
                >
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent transition-colors group-hover:bg-brand-teal"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm border border-border/70 bg-background p-6">
            <h3 className="text-base font-semibold text-primary">
              {t('kitchen.gainTitle')}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {gainItems.map((line) => (
                <li
                  key={line}
                  className="group flex gap-3 rounded-sm border-2 border-border/80 bg-card px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-muted hover:shadow-md hover:shadow-primary/10 dark:hover:border-brand-teal dark:hover:bg-muted/50"
                >
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent transition-colors group-hover:bg-brand-teal"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        title={t('kitchen.ctaTitle')}
        description={t('kitchen.ctaDescription')}
        primaryCta={{ href: routes.contact, label: t('kitchen.ctaPrimary') }}
        secondaryCta={{ href: routes.partners, label: t('kitchen.ctaSecondary') }}
      />
    </>
  )
}
