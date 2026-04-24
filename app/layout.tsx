import type { Metadata } from 'next'
import Script from 'next/script'
import { DM_Sans, Noto_Sans_Arabic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { MainLayout } from '@/layouts/MainLayout'
import { AppProviders } from '@/components/AppProviders'
import { LOCALE_STORAGE_KEY } from '@/lib/i18n/types'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
})

export const metadata: Metadata = {
  title: {
    default: 'HTAQ Trading | Premium chemical solutions for hospitality',
    template: '%s | HTAQ Trading',
  },
  description:
    'High-performance chemical solutions for commercial laundry, housekeeping, and kitchen operations across Qatar and the Gulf.',
  generator: 'v0.app',
  /**
   * Favicons: use `app/icon.png` + `app/apple-icon.png` (copies of HTAQ logo).
   * File-based icons are what Next.js serves reliably; metadata `icons` alone
   * often loses to defaults or cache in dev.
   */
}

const localeBootstrapScript = `(function(){try{var k=${JSON.stringify(LOCALE_STORAGE_KEY)};var v=localStorage.getItem(k)||'en';document.documentElement.lang=v==='ar'?'ar':'en';document.documentElement.dir=v==='ar'?'rtl':'ltr';}catch(e){}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${dmSans.variable} ${notoSansArabic.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <Script
          id="htaq-locale-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: localeBootstrapScript }}
        />
        <AppProviders>
          <MainLayout>{children}</MainLayout>
        </AppProviders>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
