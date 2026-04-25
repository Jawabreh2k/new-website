import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

type ProductDetailBackLinkProps = {
  href: string
  label: string
  className?: string
}

export function ProductDetailBackLink({
  href,
  label,
  className,
}: ProductDetailBackLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 rounded-md border-2 border-neutral-300/90 bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300',
        'hover:border-neutral-950 hover:shadow-lg dark:border-neutral-600 dark:hover:border-neutral-50',
        'hover:scale-[1.02] motion-reduce:hover:scale-100',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
    >
      <ArrowLeft className="size-4 shrink-0 rtl:rotate-180" strokeWidth={2.25} aria-hidden />
      {label}
    </Link>
  )
}
