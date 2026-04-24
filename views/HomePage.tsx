'use client'

import { Hero } from '@/components/Hero'
import { CTASection } from '@/components/CTASection'
import { ServiceGatewaySection } from '@/sections/home/ServiceGatewaySection'
import { ValuePropositionSection } from '@/sections/home/ValuePropositionSection'
import { WhyChooseSection } from '@/sections/home/WhyChooseSection'
import { PartnersPreviewSection } from '@/sections/home/PartnersPreviewSection'
import { ScrollReveal } from '@/components/ScrollReveal'
import { useLocale } from '@/components/LocaleProvider'
import { routes } from '@/lib/routes'

export function HomePage() {
  const { t } = useLocale()

  return (
    <>
      <ScrollReveal>
        <Hero
          eyebrow={t('home.heroEyebrow')}
          title={t('home.heroTitle')}
          titleClassName="text-2xl sm:text-3xl lg:text-4xl"
          description={t('home.heroDescription')}
          primaryCta={{ href: routes.contact, label: t('home.primaryCta') }}
          secondaryCta={{ href: '#services', label: t('home.secondaryCta') }}
        />
      </ScrollReveal>
      <ScrollReveal delayMs={60}>
        <ServiceGatewaySection />
      </ScrollReveal>
      <ScrollReveal delayMs={90}>
        <ValuePropositionSection />
      </ScrollReveal>
      <ScrollReveal delayMs={120}>
        <WhyChooseSection />
      </ScrollReveal>
      <ScrollReveal delayMs={150}>
        <PartnersPreviewSection />
      </ScrollReveal>
      <ScrollReveal delayMs={180}>
        <CTASection
          title={t('home.ctaTitle')}
          description={t('home.ctaDescription')}
          primaryCta={{ href: routes.contact, label: t('home.ctaPrimary') }}
          secondaryCta={{ href: routes.partners, label: t('home.ctaSecondary') }}
        />
      </ScrollReveal>
    </>
  )
}
