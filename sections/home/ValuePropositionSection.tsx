'use client'

import * as React from 'react'
import { Gauge, ShieldCheck, Users } from 'lucide-react'
import { SectionWrapper } from '@/components/SectionWrapper'
import { useLocale } from '@/components/LocaleProvider'

export function ValuePropositionSection() {
  const { t } = useLocale()

  const points = React.useMemo(
    () =>
      [
        {
          title: t('home.value1Title'),
          body: t('home.value1Body'),
          icon: Gauge,
        },
        {
          title: t('home.value2Title'),
          body: t('home.value2Body'),
          icon: ShieldCheck,
        },
        {
          title: t('home.value3Title'),
          body: t('home.value3Body'),
          icon: Users,
        },
      ] as const,
    [t],
  )

  return (
    <SectionWrapper
      eyebrow={t('home.valueEyebrow')}
      title={t('home.valueTitle')}
      subtitle={t('home.valueSubtitle')}
      variant="muted"
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-sm border border-border/70 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
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
  )
}
