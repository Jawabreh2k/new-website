'use client'

import * as React from 'react'
import { SectionWrapper } from '@/components/SectionWrapper'
import { useLocale } from '@/components/LocaleProvider'

export function WhyChooseSection() {
  const { t } = useLocale()

  const reasons = React.useMemo(
    () =>
      [
        { title: t('home.why1Title'), body: t('home.why1Body') },
        { title: t('home.why2Title'), body: t('home.why2Body') },
        { title: t('home.why3Title'), body: t('home.why3Body') },
        { title: t('home.why4Title'), body: t('home.why4Body') },
      ] as const,
    [t],
  )

  return (
    <SectionWrapper
      eyebrow={t('home.whyEyebrow')}
      title={t('home.whyTitle')}
      subtitle={t('home.whySubtitle')}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="border-s-2 border-accent ps-5 motion-safe:transition-transform motion-safe:hover:translate-x-0.5 rtl:motion-safe:hover:-translate-x-0.5"
          >
            <h3 className="text-base font-semibold text-primary">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {r.body}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
