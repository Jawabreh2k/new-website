import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type ServiceCardProps = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  className?: string
  /** Larger home-page gateway cards (primary navigation to service routes) */
  variant?: 'default' | 'gateway'
  ctaLabel?: string
}

export function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  className,
  variant = 'default',
  ctaLabel = 'Explore service',
}: ServiceCardProps) {
  const gateway = variant === 'gateway'

  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col rounded-sm bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5',
        gateway
          ? 'border-2 border-border/80 p-7 sm:p-8 hover:border-primary hover:bg-muted hover:shadow-md dark:hover:border-brand-teal dark:hover:bg-muted/50 dark:hover:shadow-primary/10'
          : 'border border-border/80 p-6 hover:border-accent/50',
        className,
      )}
    >
      <div
        className={cn(
          'flex justify-between gap-3',
          gateway ? 'items-center' : 'items-start',
        )}
      >
        <div
          className={cn(
            'min-w-0',
            gateway ? 'flex flex-1 items-center gap-3 sm:gap-4' : 'contents',
          )}
        >
          <span
            className={cn(
              'inline-flex shrink-0 items-center justify-center rounded-sm bg-primary/5 text-primary ring-1 ring-primary/10 transition-colors group-hover:bg-accent/15 group-hover:text-accent-foreground',
              gateway ? 'size-14' : 'size-11',
            )}
          >
            <Icon className={gateway ? 'size-7' : 'size-5'} aria-hidden />
          </span>
          {gateway ? (
            <h3 className="min-w-0 flex-1 self-center text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
              {title}
            </h3>
          ) : null}
        </div>
        <ArrowUpRight
          className={cn(
            'shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent rtl:group-hover:-translate-x-0.5',
            gateway ? 'size-6' : 'size-5',
          )}
          aria-hidden
        />
      </div>
      {!gateway ? (
        <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{title}</h3>
      ) : null}
      <p
        className={cn(
          'mt-3 flex-1 leading-relaxed text-muted-foreground',
          gateway ? 'text-base' : 'mt-2 text-sm',
        )}
      >
        {description}
      </p>
      <span
        className={cn(
          'mt-5 text-sm font-semibold text-brand-teal',
          gateway
            ? 'inline-flex items-center gap-1 border-b border-transparent group-hover:border-brand-teal'
            : 'opacity-0 transition-opacity group-hover:opacity-100',
        )}
      >
        {ctaLabel}
        {gateway ? (
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
        ) : null}
      </span>
    </Link>
  )
}
