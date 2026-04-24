import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { PartnerBrand } from '@/lib/partners'

type PartnerLogoTileProps = {
  partner: PartnerBrand
  className?: string
  /** Taller tile on the full partners page */
  variant?: 'preview' | 'page'
}

export function PartnerLogoTile({
  partner,
  className,
  variant = 'preview',
}: PartnerLogoTileProps) {
  const page = variant === 'page'

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-lg border border-border/80 bg-white shadow-sm dark:border-border dark:bg-white',
        /* Wide logos need width + height; keep padding small so object-contain fills the box */
        page
          ? 'h-36 sm:h-44 md:h-52'
          : 'h-32 sm:h-40 md:h-44',
        className,
      )}
    >
      <Image
        src={partner.logoSrc}
        alt={partner.logoAlt}
        fill
        sizes={
          page
            ? '(max-width: 640px) 100vw, 45vw'
            : '(max-width: 640px) 90vw, 360px'
        }
        className="object-contain object-center p-2 sm:p-2.5 md:p-3"
        priority={false}
      />
    </div>
  )
}
