'use client'

import * as React from 'react'

type TypewriterTextProps = {
  text: string
  className?: string
  /** Delay between each character (ms) */
  speedMs?: number
}

export function TypewriterText({
  text,
  className,
  speedMs = 20,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = React.useState('')

  React.useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || !text) {
      setDisplayed(text)
      return
    }

    setDisplayed('')
    let i = 0
    const id = window.setInterval(() => {
      i += 1
      setDisplayed(text.slice(0, i))
      if (i >= text.length) window.clearInterval(id)
    }, speedMs)

    return () => window.clearInterval(id)
  }, [text, speedMs])

  const typing = displayed.length < text.length

  return (
    <p className={className}>
      {displayed}
      {typing ? (
        <span
          className="ms-0.5 inline-block h-[1.05em] w-0.5 animate-pulse bg-muted-foreground align-middle motion-reduce:hidden"
          aria-hidden
        />
      ) : null}
    </p>
  )
}
