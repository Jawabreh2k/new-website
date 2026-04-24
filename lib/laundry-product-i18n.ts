import type { LaundryProduct } from '@/lib/laundry-products'
import type { Locale } from '@/lib/i18n/types'
import { translate } from '@/lib/i18n/translate'

export function getLaundryProductCopy(
  product: LaundryProduct,
  locale: Locale,
): { name: string; description: string } {
  if (locale === 'en') {
    return { name: product.name, description: product.description }
  }
  const name = translate(locale, `laundryProducts.${product.slug}.name`)
  const description = translate(
    locale,
    `laundryProducts.${product.slug}.description`,
  )
  return { name, description }
}
