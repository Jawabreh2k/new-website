'use client'

import * as React from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-7 end-6 z-40 flex size-16 items-center justify-center rounded-full border-2 border-neutral-300/90 bg-background/95 text-neutral-900 shadow-md backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.22] hover:border-neutral-950 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:border-neutral-600 dark:text-neutral-100 dark:hover:border-neutral-50 motion-reduce:transition-none motion-reduce:hover:scale-100',
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="size-7 shrink-0" strokeWidth={3.25} aria-hidden />
    </button>
  )
}
