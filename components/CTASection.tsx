'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/components/LocaleProvider'
import { cn } from '@/lib/utils'

type CTASectionProps = {
  eyebrow?: string
  title: string
  description: string
  primaryCta: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  className?: string
}

export function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CTASectionProps) {
  const { t } = useLocale()

  return (
    <section
      className={cn(
        'border-t border-border/80 bg-gradient-to-br from-primary via-primary to-primary/95 text-primary-foreground',
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl motion-safe:animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow ?? t('common.nextStep')}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 motion-safe:animate-fade-in">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-sm bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta ? (
              <Button
                variant="outline"
                size="lg"
                className="rounded-sm border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
