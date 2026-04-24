import { cn } from '@/lib/utils'

type SectionWrapperProps = {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  innerClassName?: string
  variant?: 'default' | 'muted' | 'dark'
  /** When true, constrains subtitle width for readability */
  narrowSubtitle?: boolean
}

export function SectionWrapper({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  innerClassName,
  variant = 'default',
  narrowSubtitle = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'section-divider scroll-mt-24',
        variant === 'muted' && 'bg-muted/50',
        variant === 'dark' &&
          'border-border/60 bg-primary text-primary-foreground section-divider',
        className,
      )}
    >
      <div
        className={cn(
          'mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24',
          innerClassName,
        )}
      >
        <header
          className={cn(
            'motion-safe:animate-fade-up',
            variant === 'dark' && 'text-primary-foreground',
          )}
        >
          {eyebrow ? (
            <p
              className={cn(
                'text-xs font-semibold uppercase tracking-[0.2em]',
                variant === 'dark' ? 'text-accent' : 'text-brand-teal',
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={cn(
              'mt-3 max-w-3xl text-balance text-2xl font-semibold tracking-tight sm:text-3xl',
              variant === 'dark' ? 'text-primary-foreground' : 'text-primary',
            )}
          >
            {title}
          </h2>
          {subtitle ? (
            <p
              className={cn(
                'mt-4 text-base leading-relaxed sm:text-lg',
                narrowSubtitle && 'max-w-2xl',
                variant === 'dark'
                  ? 'text-primary-foreground/85'
                  : 'text-muted-foreground',
              )}
            >
              {subtitle}
            </p>
          ) : null}
        </header>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  )
}
