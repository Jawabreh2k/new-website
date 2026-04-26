import Image from 'next/image'
import Link from 'next/link'
import { brandLogoAlt, brandLogoSrc } from '@/lib/branding'
import { routes } from '@/lib/routes'
import { cn } from '@/lib/utils'

type BrandLogoProps = {
  className?: string
  /** Default header size */
  variant?: 'header' | 'footer'
  priority?: boolean
}

/** Intrinsic size for sharp rendering; display size controlled via className */
const dimensions = {
  header: { width: 320, height: 120 },
  footer: { width: 360, height: 140 },
} as const

export function BrandLogo({
  className,
  variant = 'header',
  priority = false,
}: BrandLogoProps) {
  const { width, height } = dimensions[variant]
  const isFooter = variant === 'footer'

  return (
    <Link
      href={routes.home}
      className={cn(
        'inline-flex shrink-0 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        isFooter &&
          'rounded-md bg-white p-4 shadow-md ring-1 ring-black/5 dark:ring-white/10 sm:p-5',
        className,
      )}
    >
      <Image
        src={brandLogoSrc}
        alt={brandLogoAlt}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          'w-auto max-w-none object-contain object-center',
          variant === 'header' &&
            'h-12 object-left sm:h-14 md:h-16',
          variant === 'footer' &&
            'mx-auto h-16 object-center sm:h-20 md:h-[5.25rem]',
        )}
      />
    </Link>
  )
}
