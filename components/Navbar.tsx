'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { routes } from '@/lib/routes'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { BrandLogo } from '@/components/BrandLogo'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import { useLocale } from '@/components/LocaleProvider'

export function Navbar() {
  const pathname = usePathname()
  const { t } = useLocale()
  const [open, setOpen] = React.useState(false)

  const navItems = React.useMemo(
    () =>
      [
        { href: routes.home, label: t('nav.home') },
        { href: routes.partners, label: t('nav.partners') },
        { href: routes.contact, label: t('nav.contact') },
      ] as const,
    [t],
  )

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-6xl items-center px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex w-full min-w-0 items-center gap-3 sm:gap-4">
          <div className="shrink-0">
            <BrandLogo variant="header" priority />
          </div>

          <nav
            className="hidden min-w-0 flex-1 justify-center md:flex"
            aria-label={t('nav.primaryLabel')}
          >
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const active =
                  item.href === routes.home
                    ? pathname === routes.home
                    : pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      active
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground',
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </nav>

          <div className="ms-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="flex items-center rounded-lg border border-border/70 bg-muted/20 p-0.5 shadow-sm backdrop-blur-sm">
              <ThemeToggle className="rounded-md" />
              <div
                className="hidden h-5 w-px shrink-0 bg-border/70 sm:block"
                aria-hidden
              />
              <LocaleSwitcher className="border-0 bg-transparent shadow-none" />
            </div>

            <Button
              variant="premium"
              size="sm"
              className="hidden whitespace-nowrap md:inline-flex"
              asChild
            >
              <Link href={routes.contact}>{t('nav.requestConsultation')}</Link>
            </Button>

            <button
              type="button"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted/80 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{t('nav.toggleMenu')}</span>
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'border-t border-border/80 bg-background md:hidden motion-safe:transition-all motion-safe:duration-300',
          open ? 'max-h-80 opacity-100' : 'max-h-0 overflow-hidden opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label={t('nav.mobileLabel')}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="premium" className="mt-2 w-full" asChild>
            <Link href={routes.contact}>{t('nav.requestConsultation')}</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
