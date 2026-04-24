import type { StaticImageData } from 'next/image'
import photo from './6.png'

/** Default home hero — static import so Next always emits the asset */
export const heroHomeDefault: {
  src: StaticImageData
  alt: string
} = {
  src: photo,
  alt: 'Laundry: stainless washers with teal-accent lighting in a professional hospitality facility',
}
