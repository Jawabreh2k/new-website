'use client'

import * as React from 'react'
import Link from 'next/link'
import { BrandLogo } from '@/components/BrandLogo'
import { useLocale } from '@/components/LocaleProvider'
import { routes } from '@/lib/routes'

export function Footer() {
  const { t } = useLocale()

  const footerLinks = React.useMemo(
    () =>
      [
        {
          title: t('footer.servicesTitle'),
          items: [
            { href: routes.laundry, label: t('footer.laundry') },
            { href: routes.housekeeping, label: t('footer.housekeeping') },
            { href: routes.kitchen, label: t('footer.kitchen') },
          ],
        },
        {
          title: t('footer.companyTitle'),
          items: [
            { href: routes.partners, label: t('nav.partners') },
            { href: routes.contact, label: t('nav.contact') },
          ],
        },
      ] as const,
    [t],
  )

  return (
    <footer className="section-divider bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <BrandLogo variant="footer" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/85">
              {t('footer.tagline')}
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {group.title}
              </p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <p className="text-primary-foreground/60">{t('footer.regionLine')}</p>
        </div>
      </div>
    </footer>
  )
}
