import type { LucideIcon } from 'lucide-react'
import { Droplets, Sparkles, UtensilsCrossed } from 'lucide-react'
import { translate } from '@/lib/i18n/translate'
import type { Locale } from '@/lib/i18n/types'
import { routes } from '@/lib/routes'

export type SiteService = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  ctaLabel: string
}

export function getSiteServices(locale: Locale): SiteService[] {
  const t = (path: string) => translate(locale, path)
  return [
    {
      title: t('services.laundryTitle'),
      description: t('services.laundryDescription'),
      href: routes.laundry,
      icon: Droplets,
      ctaLabel: t('services.laundryCta'),
    },
    {
      title: t('services.hkTitle'),
      description: t('services.hkDescription'),
      href: routes.housekeeping,
      icon: Sparkles,
      ctaLabel: t('services.hkCta'),
    },
    {
      title: t('services.kitchenTitle'),
      description: t('services.kitchenDescription'),
      href: routes.kitchen,
      icon: UtensilsCrossed,
      ctaLabel: t('services.kitchenCta'),
    },
  ]
}
