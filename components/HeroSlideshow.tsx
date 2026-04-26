'use client'

import Image from 'next/image'
import * as React from 'react'
import { cn } from '@/lib/utils'

export type HeroSlide = { src: string; alt: string }

const INTERVAL_MS = 5500

export function HeroSlideshow({
  slides,
  className,
  intervalMs = INTERVAL_MS,
}: {
  slides: HeroSlide[]
  className?: string
  intervalMs?: number
}) {
  const [active, setActive] = React.useState(0)
  const [reduceMotion, setReduceMotion] = React.useState(false)

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  React.useEffect(() => {
    if (slides.length < 2 || reduceMotion) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [slides.length, intervalMs, reduceMotion])

  if (!slides.length) return null

  return (
    <div className={cn('relative h-full w-full', className)}>
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          className={cn(
            'object-cover object-center',
            reduceMotion && i > 0 ? 'hidden' : 'transition-opacity ease-in-out duration-1000',
            !reduceMotion && (i === active ? 'z-[1] opacity-100' : 'z-0 opacity-0'),
          )}
          sizes="(min-width: 1024px) 36rem, (min-width: 640px) 32rem, 28rem"
          priority={i === 0}
          loading={i === 0 ? undefined : 'lazy'}
        />
      ))}
    </div>
  )
}
