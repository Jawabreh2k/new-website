export type LaundryProduct = {
  /** URL segment: /laundry/[slug] */
  slug: string
  /** Public URL under /public/products/laundry */
  image: string
  name: string
  description: string
}

export const laundryProducts: LaundryProduct[] = [
  {
    slug: 'safe-essential',
    image: '/products/laundry/safe-essential.png',
    name: 'Essential V — Main wash',
    description:
      'Liquid main wash detergent for consistent soil removal and finish on institutional textiles.',
  },
  {
    slug: 'complete',
    image: '/products/laundry/complete-e1748332683540.png',
    name: 'Complete',
    description:
      'All-in-one formulation support for balanced cleaning performance across mixed loads.',
  },
  {
    slug: 'echoforte',
    image: '/products/laundry/Echoforte-e1748332605137.png',
    name: 'Echoforte',
    description:
      'Fortified wash chemistry for demanding soils and high-throughput tunnel or washer-extractor lines.',
  },
  {
    slug: 'actifos',
    image: '/products/laundry/actifos-e1748332828347.png',
    name: 'Actifos',
    description:
      'Active surfactant system to boost detergency and help suspend soils in hard water.',
  },
  {
    slug: 'alkazol',
    image: '/products/laundry/alkazol-e1748333724552.png',
    name: 'Alkazol',
    description:
      'Alkaline booster for grease, food, and heavy industrial soils in main wash.',
  },
  {
    slug: 'color-care',
    image: '/products/laundry/color-e1748333043409.png',
    name: 'Color care',
    description:
      'Formulated to help protect dyes and reduce greying on coloured linen and uniforms.',
  },
  {
    slug: 'safe-white',
    image: '/products/laundry/safe-white-e1748334156928.png',
    name: 'Safe White',
    description:
      'Optical brightening support and whitening discipline for whites and institutional flatwork.',
  },
  {
    slug: 'safe-bleach',
    image: '/products/laundry/safe-bleach.png',
    name: 'Safe Bleach',
    description:
      'Controlled bleaching for stain removal and hygiene with process-safe dosing guidance.',
  },
  {
    slug: 'safe-oxygen',
    image: '/products/laundry/safe-oxygen.png',
    name: 'Safe Oxygen',
    description:
      'Oxygen-based bleaching alternative for temperature-sensitive or coloured articles.',
  },
  {
    slug: 'safe-boost',
    image: '/products/laundry/Safe-Boost-1-2.png',
    name: 'Safe Boost',
    description:
      'Performance booster to lift stubborn stains and improve overall wash results.',
  },
  {
    slug: 'safe-intense',
    image: '/products/laundry/Safe-Intense-20L-1-1.png',
    name: 'Safe Intense',
    description:
      'High-strength chemistry for peak soil periods without sacrificing textile care.',
  },
  {
    slug: 'safe-iron-blaster',
    image: '/products/laundry/safe-iron-blaster-e1748333318206.png',
    name: 'Safe Iron Blaster',
    description:
      'Targeted chemistry for iron and mineral staining common in regional water profiles.',
  },
  {
    slug: 'safe-neutra-soft',
    image: '/products/laundry/Safe-Neutra-Soft-20L-1-2.png',
    name: 'Safe Neutra Soft',
    description:
      'Neutralizing and softening finish for hand-feel, static control, and pH balance.',
  },
  {
    slug: 'safe-oilaway',
    image: '/products/laundry/safe-oilaway.png',
    name: 'Safe Oil Away',
    description:
      'Degreasing aid for F&B, engineering, and industrial oil-based soils on textiles.',
  },
  {
    slug: 'safe-oilgo',
    image: '/products/laundry/safe-oilgo.png',
    name: 'Safe Oil Go',
    description:
      'Fast-acting oil and grease release for pre-wash or main wash programs.',
  },
  {
    slug: 'safe-prime',
    image: '/products/laundry/Safe-Prime-20L-1-2.png',
    name: 'Safe Prime',
    description:
      'Primer and wetting agent to improve water penetration on heavy or hydrophobic loads.',
  },
  {
    slug: 'safe-rust',
    image: '/products/laundry/Safe-Rust-20L-1-2.png',
    name: 'Safe Rust',
    description:
      'Rust and metal oxide stain treatment compatible with professional laundry workflows.',
  },
  {
    slug: 'safe-sour',
    image: '/products/laundry/Safe-Sour-20L-1-2.png',
    name: 'Safe Sour',
    description:
      'Souring agent for final pH correction, iron control, and finishing stability.',
  },
]

export function getLaundryProductBySlug(slug: string): LaundryProduct | undefined {
  return laundryProducts.find((p) => p.slug === slug)
}
