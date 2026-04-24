import type { HousekeepingProduct } from '@/lib/housekeeping-products'
import type { Locale } from '@/lib/i18n/types'
import { translate } from '@/lib/i18n/translate'

export function getHousekeepingProductCopy(
  product: HousekeepingProduct,
  locale: Locale,
): { name: string; description: string } {
  if (locale === 'en') {
    return { name: product.name, description: product.description }
  }
  const name = translate(locale, `housekeepingProducts.${product.slug}.name`)
  const description = translate(
    locale,
    `housekeepingProducts.${product.slug}.description`,
  )
  return { name, description }
}
