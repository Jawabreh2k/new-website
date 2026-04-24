import { ar } from './ar'
import { en } from './en'
import type { Locale } from './types'

const dictionaries = { en, ar } as const

export type Messages = typeof en

export function translate(locale: Locale, path: string): string {
  const keys = path.split('.')
  let node: unknown = dictionaries[locale]
  for (const k of keys) {
    if (node && typeof node === 'object' && k in (node as object)) {
      node = (node as Record<string, unknown>)[k]
    } else {
      node = undefined
      break
    }
  }
  if (typeof node !== 'string') {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[i18n] Missing string: ${locale}.${path}`)
    }
    return path
  }
  return node
}
