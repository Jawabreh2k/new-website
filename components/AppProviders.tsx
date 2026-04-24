'use client'

import * as React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { LocaleProvider } from '@/components/LocaleProvider'
import { Toaster } from '@/components/ui/sonner'

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LocaleProvider>
        {children}
        <Toaster richColors position="top-center" />
      </LocaleProvider>
    </ThemeProvider>
  )
}
