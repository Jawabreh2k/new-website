'use client'

import Link from 'next/link'
import { PartnerLogoTile } from '@/components/PartnerLogoTile'
import { SectionWrapper } from '@/components/SectionWrapper'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/components/LocaleProvider'
import { partnerBrands } from '@/lib/partners'
import { routes } from '@/lib/routes'

export function PartnersPreviewSection() {
  const { t } = useLocale()

  return (
    <SectionWrapper
      eyebrow={t('home.partnersEyebrow')}
      title={t('home.partnersTitle')}
      subtitle={t('home.partnersSubtitle')}
      variant="muted"
    >
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-5 sm:gap-8 md:gap-10">
        {partnerBrands.map((partner) => (
          <PartnerLogoTile
            key={partner.id}
            partner={partner}
            variant="preview"
            className="w-full min-w-0 flex-1 basis-[min(100%,280px)] sm:basis-[min(100%,360px)] md:basis-[400px]"
          />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button variant="outline" size="lg" asChild>
          <Link href={routes.partners}>{t('home.partnersCta')}</Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
