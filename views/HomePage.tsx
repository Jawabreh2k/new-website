'use client'

import * as React from 'react'
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
  const [showWelcomePopup, setShowWelcomePopup] = React.useState(false)

  React.useEffect(() => {
    const nav = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined
    if (nav?.type !== 'reload') {
      setShowWelcomePopup(false)
      return
    }

    const reloadToken = String(performance.timeOrigin)
    const storageKey = 'home-popup-last-reload-token'
    const lastShownToken = sessionStorage.getItem(storageKey)
    const shouldShow = lastShownToken !== reloadToken

    setShowWelcomePopup(shouldShow)
    if (shouldShow) {
      sessionStorage.setItem(storageKey, reloadToken)
    }
  }, [])

  const heroSlides = React.useMemo(
    () => [
      { src: '/hero/slide-1.png', alt: t('home.heroSlideAlt1') },
      { src: '/hero/slide-2.png', alt: t('home.heroSlideAlt2') },
      { src: '/hero/slide-3.png', alt: t('home.heroSlideAlt3') },
      { src: '/hero/slide-4.png', alt: t('home.heroSlideAlt4') },
    ],
    [t],
  )

  return (
    <>
      {showWelcomePopup ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-primary/25 px-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl rounded-2xl border border-border bg-background p-6 shadow-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-primary">
              Welcome to HTAQ Trading
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                At HTAQ, we deliver advanced laundry and hospitality solutions that ensure
                superior quality, hygiene, and efficiency. With deep regional expertise and
                innovative technology, we help optimize operations and maintain consistent,
                high standards.
              </p>
            </div>
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={() => setShowWelcomePopup(false)}
                className="inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <ScrollReveal>
        <Hero
          eyebrow={t('home.heroEyebrow')}
          title={t('home.heroTitle')}
          titleClassName="text-xl sm:text-2xl lg:text-3xl"
          description={t('home.heroDescription')}
          descriptionTypewriter
          imageSlides={heroSlides}
          secondaryCta={{ href: '#services', label: t('home.secondaryCta') }}
          innerClassName="py-10 pt-8 sm:py-12 sm:pt-10 lg:items-start lg:gap-12 lg:py-14 lg:pt-10"
        />
      </ScrollReveal>
      <ScrollReveal delayMs={60}>
        <PartnersPreviewSection />
      </ScrollReveal>
      <ScrollReveal delayMs={90}>
        <ServiceGatewaySection />
      </ScrollReveal>
      <ScrollReveal delayMs={120}>
        <ValuePropositionSection />
      </ScrollReveal>
      <ScrollReveal delayMs={150}>
        <WhyChooseSection />
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
