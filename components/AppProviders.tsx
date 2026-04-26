'use client'

import * as React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { LocaleProvider } from '@/components/LocaleProvider'
import { Toaster } from '@/components/ui/sonner'

export function AppProviders({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const nav = performance.getEntriesByType('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined

    if (nav?.type !== 'reload') return

    const timeout = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, 80)

    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LocaleProvider>
        {children}
        <Toaster richColors position="top-center" />
      </LocaleProvider>
    </ThemeProvider>
  )
}
