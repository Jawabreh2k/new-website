'use client'

import * as React from 'react'
import {
  defaultLocale,
  LOCALE_STORAGE_KEY,
  translate,
  type Locale,
} from '@/lib/i18n'

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (path: string) => string
}

const LocaleContext = React.createContext<LocaleContextValue | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale
  try {
    const v = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return v === 'ar' ? 'ar' : 'en'
  } catch {
    return defaultLocale
  }
}

function applyDocumentLocale(locale: Locale) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = locale === 'ar' ? 'ar' : 'en'
  document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(defaultLocale)
  const [ready, setReady] = React.useState(false)

  React.useLayoutEffect(() => {
    setLocaleState(readStoredLocale())
    setReady(true)
  }, [])

  React.useLayoutEffect(() => {
    if (!ready) return
    applyDocumentLocale(locale)
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
  }, [locale, ready])

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const t = React.useCallback(
    (path: string) => translate(locale, path),
    [locale],
  )

  const value = React.useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext)
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider')
  }
  return ctx
}
