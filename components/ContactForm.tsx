'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useLocale } from '@/components/LocaleProvider'

type FormValues = {
  name: string
  email: string
  company: string
  message: string
}

function ContactFormFields({ t }: { t: (path: string) => string }) {
  const schema = React.useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('contact.errName')),
        email: z.string().email(t('contact.errEmail')),
        company: z.string().min(2, t('contact.errCompany')),
        message: z.string().min(10, t('contact.errMessage')),
      }),
    [t],
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  })

  const onSubmit = React.useCallback(
    async (data: FormValues) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        toast.error(t('contact.formError'))
        return
      }

      toast.success(t('contact.formSuccess'))
      reset()
    },
    [reset, t],
  )

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-sm border border-border/80 bg-card p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">{t('contact.formName')}</Label>
          <Input
            id="contact-name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register('name')}
          />
          {errors.name ? (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">{t('contact.formEmail')}</Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-company">{t('contact.formCompany')}</Label>
        <Input
          id="contact-company"
          autoComplete="organization"
          aria-invalid={!!errors.company}
          {...register('company')}
        />
        {errors.company ? (
          <p className="text-xs text-destructive">{errors.company.message}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">{t('contact.formMessage')}</Label>
        <Textarea
          id="contact-message"
          rows={5}
          aria-invalid={!!errors.message}
          placeholder={t('contact.formPlaceholder')}
          {...register('message')}
        />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        ) : null}
      </div>
      <Button
        type="submit"
        variant="premium"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? t('contact.formSending') : t('contact.formSubmit')}
      </Button>
    </form>
  )
}

export function ContactForm() {
  const { locale, t } = useLocale()
  return <ContactFormFields key={locale} t={t} />
}
