'use client'

import { Hero } from '@/components/Hero'
import { CTASection } from '@/components/CTASection'
import { ServiceGatewaySection } from '@/sections/home/ServiceGatewaySection'
import { ValuePropositionSection } from '@/sections/home/ValuePropositionSection'
import { WhyChooseSection } from '@/sections/home/WhyChooseSection'
import { PartnersPreviewSection } from '@/sections/home/PartnersPreviewSection'
import { useLocale } from '@/components/LocaleProvider'
import { routes } from '@/lib/routes'

export function HomePage() {
  const { t } = useLocale()

  return (
    <>
      <Hero
        eyebrow={t('home.heroEyebrow')}
        title={t('home.heroTitle')}
        description={t('home.heroDescription')}
        primaryCta={{ href: routes.contact, label: t('home.primaryCta') }}
        secondaryCta={{ href: '#services', label: t('home.secondaryCta') }}
      />
      <ServiceGatewaySection />
      <ValuePropositionSection />
      <WhyChooseSection />
      <PartnersPreviewSection />
      <CTASection
        title={t('home.ctaTitle')}
        description={t('home.ctaDescription')}
        primaryCta={{ href: routes.contact, label: t('home.ctaPrimary') }}
        secondaryCta={{ href: routes.partners, label: t('home.ctaSecondary') }}
      />
    </>
  )
}
