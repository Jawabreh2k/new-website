'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  delayMs?: number
}

export function ScrollReveal({ children, className, delayMs = 0 }: ScrollRevealProps) {
  const [visible, setVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn('scroll-reveal', visible && 'scroll-reveal--visible', className)}
      style={{ '--reveal-delay': `${delayMs}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
