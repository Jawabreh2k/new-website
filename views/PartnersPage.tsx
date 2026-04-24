'use client'

import { Hero } from '@/components/Hero'
import { SectionWrapper } from '@/components/SectionWrapper'
import { CTASection } from '@/components/CTASection'
import { PartnerLogoTile } from '@/components/PartnerLogoTile'
import { useLocale } from '@/components/LocaleProvider'
import { partnerBrands } from '@/lib/partners'
import { routes } from '@/lib/routes'

export function PartnersPage() {
  const { t } = useLocale()

  return (
    <>
      <Hero
        eyebrow={t('partners.heroEyebrow')}
        title={t('partners.heroTitle')}
        description={t('partners.heroDescription')}
        primaryCta={{ href: routes.contact, label: t('partners.primaryCta') }}
        secondaryCta={{ href: routes.home, label: t('partners.secondaryCta') }}
        align="center"
      />
      <SectionWrapper
        eyebrow={t('partners.networkEyebrow')}
        title={t('partners.networkTitle')}
        subtitle={t('partners.networkSubtitle')}
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
          {partnerBrands.map((partner) => (
            <PartnerLogoTile key={partner.id} partner={partner} variant="page" />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper
        eyebrow={t('partners.globalEyebrow')}
        title={t('partners.globalTitle')}
        variant="muted"
        subtitle={t('partners.globalSubtitle')}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-sm border border-border/80 bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-primary">
              {t('partners.card1Title')}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t('partners.card1Body')}
            </p>
          </div>
          <div className="rounded-sm border border-border/80 bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-primary">
              {t('partners.card2Title')}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t('partners.card2Body')}
            </p>
          </div>
        </div>
      </SectionWrapper>
      <CTASection
        title={t('partners.ctaTitle')}
        description={t('partners.ctaDescription')}
        primaryCta={{ href: routes.contact, label: t('partners.ctaPrimary') }}
      />
    </>
  )
}
