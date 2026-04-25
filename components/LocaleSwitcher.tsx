'use client'

import { Globe } from 'lucide-react'
import { useLocale } from '@/components/LocaleProvider'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function LocaleSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className={cn(
            'size-9 shrink-0 rounded-md border-border/80 bg-background/90 shadow-sm backdrop-blur-sm sm:size-10',
            className,
          )}
          aria-label={t('nav.language')}
        >
          <Globe className="size-4 text-foreground sm:size-[1.15rem]" strokeWidth={2} aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[10.5rem]" sideOffset={6}>
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(v) => setLocale(v as Locale)}
        >
          <DropdownMenuRadioItem value="en" className="cursor-pointer">
            {t('nav.localeEn')}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ar" className="cursor-pointer">
            {t('nav.localeAr')}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
