'use client'

import { useLocale } from '@/components/LocaleProvider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function LocaleSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale()

  return (
    <div
      className={cn(
        'flex shrink-0 items-center rounded-md border border-border/80 bg-background/80 p-0.5',
        className,
      )}
      role="group"
      aria-label={t('nav.language')}
    >
      <Button
        type="button"
        variant={locale === 'en' ? 'secondary' : 'ghost'}
        size="sm"
        className="h-7 min-w-8 px-2 text-xs font-medium sm:h-8 sm:px-2.5"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        {t('nav.localeEn')}
      </Button>
      <Button
        type="button"
        variant={locale === 'ar' ? 'secondary' : 'ghost'}
        size="sm"
        className="h-7 min-w-8 px-2 text-xs font-medium sm:h-8 sm:px-2.5"
        onClick={() => setLocale('ar')}
        aria-pressed={locale === 'ar'}
      >
        {t('nav.localeAr')}
      </Button>
    </div>
  )
}
