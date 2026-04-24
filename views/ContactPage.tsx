'use client'

import { Hero } from '@/components/Hero'
import { SectionWrapper } from '@/components/SectionWrapper'
import { ContactForm } from '@/components/ContactForm'
import { useLocale } from '@/components/LocaleProvider'
import { routes } from '@/lib/routes'
import { Mail, MapPin, Phone } from 'lucide-react'

export function ContactPage() {
  const { t } = useLocale()

  return (
    <>
      <Hero
        eyebrow={t('contact.heroEyebrow')}
        title={t('contact.heroTitle')}
        description={t('contact.heroDescription')}
        primaryCta={{ href: '#contact-form', label: t('contact.primaryCta') }}
        secondaryCta={{ href: routes.partners, label: t('contact.secondaryCta') }}
        align="center"
      />
      <SectionWrapper
        id="contact-form"
        eyebrow={t('contact.formEyebrow')}
        title={t('contact.formTitle')}
        subtitle={t('contact.formSubtitle')}
      >
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <aside className="space-y-6 lg:col-span-2">
            <div className="rounded-sm border border-border/80 bg-muted/40 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
                {t('contact.companyTitle')}
              </h3>
              <p className="mt-3 text-lg font-semibold text-primary">HTAQ Trading</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t('contact.companyBlurb')}
              </p>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 size-5 shrink-0 text-brand-teal"
                  aria-hidden
                />
                <div>
                  <p className="font-medium text-foreground">{t('contact.hqLabel')}</p>
                  <p className="text-muted-foreground">
                    {t('contact.hqLine1')}
                    <span className="block text-xs text-muted-foreground/90">
                      {t('contact.hqLine2')}
                    </span>
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="mt-0.5 size-5 shrink-0 text-brand-teal"
                  aria-hidden
                />
                <div>
                  <p className="font-medium text-foreground">{t('contact.phoneLabel')}</p>
                  <p className="text-muted-foreground">+97466211922</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 size-5 shrink-0 text-brand-teal"
                  aria-hidden
                />
                <div>
                  <p className="font-medium text-foreground">{t('contact.emailLabel')}</p>
                  <p className="text-muted-foreground">e.abdullah@htaqgroup.com</p>
                </div>
              </li>
            </ul>
            <div className="overflow-hidden rounded-sm border border-border/80 bg-muted/30">
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-primary/10 via-muted to-background">
                <p className="px-6 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {t('contact.mapPlaceholder')}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </>
  )
}
