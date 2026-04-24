import type { KitchenProduct } from '@/lib/kitchen-products'
import type { Locale } from '@/lib/i18n/types'
import { translate } from '@/lib/i18n/translate'

export function getKitchenProductCopy(
  product: KitchenProduct,
  locale: Locale,
): { name: string; description: string } {
  if (locale === 'en') {
    return { name: product.name, description: product.description }
  }
  const name = translate(locale, `kitchenProducts.${product.slug}.name`)
  const description = translate(
    locale,
    `kitchenProducts.${product.slug}.description`,
  )
  return { name, description }
}
