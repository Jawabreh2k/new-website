'use client'

import { ServiceCard } from '@/components/ServiceCard'
import { SectionWrapper } from '@/components/SectionWrapper'
import { useLocale } from '@/components/LocaleProvider'
import { getSiteServices } from '@/lib/site-services'

/**
 * Primary entry to Laundry / Housekeeping / Kitchen routes (not duplicated in navbar).
 */
export function ServiceGatewaySection() {
  const { locale, t } = useLocale()
  const siteServices = getSiteServices(locale)

  return (
    <SectionWrapper
      id="services"
      eyebrow={t('home.gatewayEyebrow')}
      title={t('home.gatewayTitle')}
      subtitle={t('home.gatewaySubtitle')}
      variant="muted"
      className="border-t border-border/60"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {siteServices.map((s) => (
          <ServiceCard
            key={s.href}
            title={s.title}
            description={s.description}
            href={s.href}
            icon={s.icon}
            variant="gateway"
            ctaLabel={s.ctaLabel}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
