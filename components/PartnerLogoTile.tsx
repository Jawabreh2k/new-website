'use client'

import * as React from 'react'
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
  const [showNeoPopup, setShowNeoPopup] = React.useState(false)
  const [showIntercarePopup, setShowIntercarePopup] = React.useState(false)
  const isNeoLogo = partner.id === 'neo-eco-clean'
  const isIntercareLogo = partner.id === 'intercare'

  const tileClassName = cn(
    'group relative w-full overflow-hidden rounded-sm border-2 border-border/80 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-muted hover:shadow-md hover:shadow-primary/10 dark:hover:border-brand-teal dark:hover:bg-muted/50',
    /* Wide logos need width + height; keep padding small so object-contain fills the box */
    page ? 'h-36 sm:h-44 md:h-52' : 'h-32 sm:h-40 md:h-44',
    className,
  )

  const logoImage = (
    <Image
      src={partner.logoSrc}
      alt={partner.logoAlt}
      fill
      sizes={
        page
          ? '(max-width: 640px) 100vw, 45vw'
          : '(max-width: 640px) 90vw, 360px'
      }
      className={cn(
        'object-contain object-center',
        page ? 'p-4 sm:p-5 md:p-6' : 'origin-center p-4 sm:p-5 md:p-6',
      )}
      priority={false}
    />
  )

  return (
    <>
      {isNeoLogo || isIntercareLogo ? (
        <button
          type="button"
          onClick={() => {
            if (isNeoLogo) setShowNeoPopup(true)
            if (isIntercareLogo) setShowIntercarePopup(true)
          }}
          className={cn(
            tileClassName,
            'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          )}
          aria-label={
            isNeoLogo ? 'Open Neo Eco Clean details' : 'Open Intercare Limited details'
          }
        >
          {logoImage}
        </button>
      ) : (
        <div className={tileClassName}>{logoImage}</div>
      )}

      {isNeoLogo && showNeoPopup ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-primary/30 px-3 py-3 backdrop-blur-sm sm:px-5 sm:py-5"
          role="dialog"
          aria-modal="true"
          aria-label="Neo Eco Clean details"
          onClick={() => setShowNeoPopup(false)}
        >
          <div
            className="w-full max-w-6xl rounded-2xl border border-border bg-background p-5 shadow-2xl sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
              Our Partner - Neo Eco Clean
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              <p className="break-words">
                HTAQ proudly partners with Neo Eco Clean, a leading provider of premium,
                eco-conscious cleaning and hygiene solutions designed for high-end hospitality and
                commercial environments.
              </p>
              <p className="break-words">
                Their comprehensive portfolio includes advanced systems for kitchen hygiene,
                dishwashing, surface care, and fabric treatment-each developed to deliver
                exceptional results while protecting materials and maintaining the highest
                standards of cleanliness and presentation.
              </p>
              <p className="break-words">
                Beyond products, Neo Eco Clean offers integrated, performance-driven solutions
                that enhance operational efficiency, optimize chemical usage, and ensure
                consistent, reliable outcomes across all areas of operation.
              </p>
              <p className="break-words">
                Together, we deliver a refined standard of hygiene-defined by performance,
                precision, and lasting quality.
              </p>
            </div>
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={() => setShowNeoPopup(false)}
                className="inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {isIntercareLogo && showIntercarePopup ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-primary/30 px-3 py-3 backdrop-blur-sm sm:px-5 sm:py-5"
          role="dialog"
          aria-modal="true"
          aria-label="Intercare Limited details"
          onClick={() => setShowIntercarePopup(false)}
        >
          <div
            className="w-full max-w-6xl rounded-2xl border border-border bg-background p-5 shadow-2xl sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
              Our Partner - Intercare Limited
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              <p className="break-words">
                HTAQ proudly partners with Intercare Limited, a leading provider of advanced
                hygiene and cleaning solutions with decades of expertise across the GCC.
              </p>
              <p className="break-words">
                Their comprehensive portfolio includes specialty chemicals, institutional laundry
                systems, kitchen hygiene solutions, floorcare equipment, and washroom systems
                designed to meet the highest standards of hospitality, healthcare, and large-scale
                facilities.
              </p>
              <p className="break-words">
                Combining innovation, quality manufacturing, and sustainable practices, Intercare
                delivers reliable, high-performance solutions that enhance operational efficiency
                and ensure consistent results.
              </p>
              <p className="break-words">
                Together, we deliver elevated hygiene standards defined by performance,
                reliability, and long-term value.
              </p>
            </div>
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={() => setShowIntercarePopup(false)}
                className="inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
