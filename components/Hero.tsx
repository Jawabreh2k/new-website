import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TypewriterText } from '@/components/TypewriterText'
import { cn } from '@/lib/utils'
import { heroHomeDefault } from '@/assets/hero-home'

type HeroProps = {
  eyebrow?: string
  title: string
  description: string
  primaryCta?: { href: string; label: string }
  secondaryCta?: { href: string; label: string }
  className?: string
  align?: 'left' | 'center'
  imageSrc?: string | StaticImageData
  imageAlt?: string
  titleClassName?: string
  /** Applied to the inner grid wrapper (padding, alignment tweaks per page) */
  innerClassName?: string
  /** Animate description with a typewriter effect (e.g. home hero) */
  descriptionTypewriter?: boolean
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  align = 'left',
  imageSrc = heroHomeDefault.src,
  imageAlt = heroHomeDefault.alt,
  titleClassName,
  innerClassName,
  descriptionTypewriter = false,
}: HeroProps) {
  const centered = align === 'center'

  const descriptionClassName = cn(
    'mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg',
    centered && 'mx-auto max-w-2xl',
  )

  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-muted/40 to-background',
        className,
      )}
    >
      <div
        className={cn(
          'mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-24',
          centered && 'lg:grid-cols-1 lg:text-center',
          innerClassName,
        )}
      >
        <div
          className={cn(
            'motion-safe:animate-fade-up',
            centered && 'mx-auto max-w-3xl',
          )}
        >
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              'mt-3 text-balance text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl',
              titleClassName,
            )}
          >
            {title}
          </h1>
          {descriptionTypewriter ? (
            <TypewriterText text={description} className={descriptionClassName} speedMs={18} />
          ) : (
            <p className={descriptionClassName}>{description}</p>
          )}
          {primaryCta || secondaryCta ? (
            <div
              className={cn(
                'mt-8 flex flex-wrap gap-3',
                centered && 'justify-center',
              )}
            >
              {primaryCta ? (
                <Button variant="premium" size="lg" asChild>
                  <Link href={primaryCta.href}>{primaryCta.label}</Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button variant="outline" size="lg" asChild>
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>

        {!centered ? (
          <div className="relative w-full max-w-md justify-self-center motion-safe:animate-fade-in sm:max-w-lg lg:max-w-xl lg:justify-self-end rtl:lg:justify-self-start">
            <div className="relative aspect-square w-full overflow-hidden rounded-full border border-border/80 bg-muted shadow-xl shadow-primary/10 ring-2 ring-primary/10 ring-offset-4 ring-offset-background">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 36rem, (min-width: 640px) 32rem, 28rem"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-brand-teal/5" />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
