export type PartnerBrand = {
  id: string
  name: string
  logoSrc: string
  logoAlt: string
}

/** Approved partner marks shown on the site (expand as you add logos). */
export const partnerBrands: PartnerBrand[] = [
  {
    id: 'intercare',
    name: 'Intercare',
    logoSrc: '/partners/intercare.png',
    logoAlt: 'Intercare',
  },
  {
    id: 'neo-eco-clean',
    name: 'neo ECO CLEAN',
    logoSrc: '/partners/neo-eco-clean.png',
    logoAlt: 'neo ECO CLEAN',
  },
]
