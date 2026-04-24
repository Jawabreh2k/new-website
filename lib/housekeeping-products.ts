export type HousekeepingProduct = {
  slug: string
  image: string
  name: string
  description: string
}

export const housekeepingProducts: HousekeepingProduct[] = [
  {
    slug: 'fresh-s5-spray',
    image: '/products/housekeeping/fresh-s5-spray.png',
    name: 'Fresh S5 — Air freshener (RTU)',
    description:
      'Ready-to-use spray for guest rooms, corridors, and public areas—pleasant residual fragrance with housekeeping-friendly handling.',
  },
  {
    slug: 'furniture-s4',
    image: '/products/housekeeping/furniture-s4.png',
    name: 'Furniture S4 — Furniture care',
    description:
      'Care chemistry for wood, veneer, and treated surfaces in suites and executive areas—supports shine without sticky residue.',
  },
  {
    slug: 'multi-s2-spray',
    image: '/products/housekeeping/multi-s2-spray.png',
    name: 'Multi S2 — Multi-surface spray (RTU)',
    description:
      'Daily multi-surface cleaner for hard, non-porous areas—ideal for quick turnovers and trolley programs.',
  },
  {
    slug: 'speed-flash-s7-scaled-e1748327041786',
    image:
      '/products/housekeeping/speed-flash-s7-scaled-e1748327041786.png',
    name: 'Flash S7 — Fast cleaner',
    description:
      'Rapid-action cleaner for high-traffic touchpoints where speed and visible results matter between guest arrivals.',
  },
  {
    slug: 'speed-fresh-s5-conc-e1748337746940',
    image: '/products/housekeeping/speed-fresh-s5-conc-e1748337746940.png',
    name: 'Fresh S5 — Concentrate',
    description:
      'Concentrated air-care formulation for dilution systems—consistent fragrance economics across floors.',
  },
  {
    slug: 'speed-glass-s3-conc-e1748337530902',
    image: '/products/housekeeping/speed-glass-s3-conc-e1748337530902.png',
    name: 'Glass S3 — Concentrate',
    description:
      'Streak-conscious glass and mirror concentrate for elevators, lobby glazing, and bathroom enclosures.',
  },
  {
    slug: 'speed-hygienic-breeze-e1748338060266',
    image: '/products/housekeeping/speed-hygienic-breeze-e1748338060266.png',
    name: 'Hygienic Breeze',
    description:
      'Hygienic freshener suited to washrooms, back-of-house corridors, and areas needing a clean scent profile.',
  },
  {
    slug: 'speed-kettle-2',
    image: '/products/housekeeping/speed-kettle-2.jpg',
    name: 'Kettle descaler',
    description:
      'Descaling support for kettles and hot-water equipment in rooms and pantries—helps maintain appliance performance.',
  },
  {
    slug: 'speed-multi-s2-e1748337370951',
    image: '/products/housekeeping/speed-multi-s2-e1748337370951.png',
    name: 'Multi S2 — Multi-surface (line)',
    description:
      'Professional multi-surface program pairing for dilution or ready-to-use deployment—aligned to HTAQ housekeeping routes.',
  },
  {
    slug: 'speed-s3',
    image: '/products/housekeeping/speed-s3.png',
    name: 'Glass S3 — Glass cleaner (RTU)',
    description:
      'Ready-to-use glass cleaner for housekeeping carts and night teams—quick buff, low smear.',
  },
  {
    slug: 'speed-souring-s7-2-scaled-e1748338176862',
    image:
      '/products/housekeeping/speed-souring-s7-2-scaled-e1748338176862.png',
    name: 'Souring S7 — Acidic cleaner',
    description:
      'Acidic specialty for scale-prone sanitary fixtures and periodic deep tasks—use with trained procedures only.',
  },
  {
    slug: 'speed-toilet-s1-4',
    image: '/products/housekeeping/speed-toilet-s1-4.jpg',
    name: 'Toilet S1 — WC cleaner (RTU)',
    description:
      'Ready-to-use toilet and WC bowl program for room attendants and public restroom checks.',
  },
  {
    slug: 'speed-toilet-s1-conc-e1748337202579',
    image: '/products/housekeeping/speed-toilet-s1-conc-e1748337202579.png',
    name: 'Toilet S1 — Concentrate',
    description:
      'Concentrated restroom chemistry for dilution stations—economical coverage across large footprints.',
  },
]

export function getHousekeepingProductBySlug(
  slug: string,
): HousekeepingProduct | undefined {
  return housekeepingProducts.find((p) => p.slug === slug)
}
