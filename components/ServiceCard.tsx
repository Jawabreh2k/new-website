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
        'group relative flex flex-col rounded-sm border border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-primary/5',
        gateway ? 'p-7 sm:p-8' : 'p-6',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className={cn(
            'inline-flex items-center justify-center rounded-sm bg-primary/5 text-primary ring-1 ring-primary/10 transition-colors group-hover:bg-accent/15 group-hover:text-accent-foreground',
            gateway ? 'size-14' : 'size-11',
          )}
        >
          <Icon className={gateway ? 'size-7' : 'size-5'} aria-hidden />
        </span>
        <ArrowUpRight
          className={cn(
            'shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent rtl:group-hover:-translate-x-0.5',
            gateway ? 'size-6' : 'size-5',
          )}
          aria-hidden
        />
      </div>
      <h3
        className={cn(
          'mt-5 font-semibold tracking-tight text-foreground',
          gateway ? 'text-xl sm:text-2xl' : 'text-lg',
        )}
      >
        {title}
      </h3>
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
