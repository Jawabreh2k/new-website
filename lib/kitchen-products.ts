export type KitchenProduct = {
  slug: string
  image: string
  name: string
  description: string
}

export const kitchenProducts: KitchenProduct[] = [
  {
    slug: 'alcosan-e1748336091743',
    image: '/products/kitchen/alcosan-e1748336091743.png',
    name: 'Alcosan',
    description:
      'Chlorinated alkaline chemistry for demanding pot-wash and pre-soak tasks where protein and starch soils need controlled oxidative support.',
  },
  {
    slug: 'clear-e1748334955221',
    image: '/products/kitchen/clear-e1748334955221.png',
    name: 'Clear — Rinse aid',
    description:
      'Rinse-aid performance for conveyor and door-type warewashers—sheeting water for faster dry-down and fewer spots on glass and flatware.',
  },
  {
    slug: 'crystal-bright-5l-1',
    image: '/products/kitchen/crystal-bright-5l-1.jpg',
    name: 'Crystal Bright',
    description:
      'Brightening chemistry for stainless presentation ware and selected machine programs—supports a polished, inspection-ready finish.',
  },
  {
    slug: 'crystal-de-lime-e1748335143305',
    image: '/products/kitchen/crystal-de-lime-e1748335143305.png',
    name: 'Crystal De-Lime',
    description:
      'Descaling support for dishmachines, spray arms, and hot-water equipment affected by regional hardness—use with trained procedures.',
  },
  {
    slug: 'crystal-decho-10l-1',
    image: '/products/kitchen/crystal-decho-10l-1.jpg',
    name: 'Crystal Decho — Machine detergent',
    description:
      'Machine warewash detergent for high-volume F&B operations—balanced for soil load, water conditions, and throughput targets.',
  },
  {
    slug: 'crystal-dip-1',
    image: '/products/kitchen/crystal-dip-1.jpg',
    name: 'Crystal Dip',
    description:
      'Dip-tank chemistry for utensils, inserts, and smallwares—reduces manual scrub time while keeping stewarding workflows organized.',
  },
  {
    slug: 'crystal-drain-1',
    image: '/products/kitchen/crystal-drain-1.jpg',
    name: 'Crystal Drain',
    description:
      'Drain-line and grease-trap maintenance chemistry for back-of-house hygiene—pairs with scheduled pump-outs and good kitchen practices.',
  },
  {
    slug: 'crystal-gain-e1748335072119',
    image: '/products/kitchen/crystal-gain-e1748335072119.png',
    name: 'Crystal Gain',
    description:
      'Performance additive for challenging banquet peaks and mixed soil profiles—helps stabilize wash results when menus vary.',
  },
  {
    slug: 'crystal-silver-e1748336347276',
    image: '/products/kitchen/crystal-silver-e1748336347276.png',
    name: 'Crystal Silver',
    description:
      'Metal-care line for presentation silver and selected alloys—protects appearance when used per manufacturer guidance.',
  },
  {
    slug: 'degreaser-e1748335320887',
    image: '/products/kitchen/degreaser-e1748335320887.png',
    name: 'Degreaser',
    description:
      'Heavy-duty degreaser for hood filters, equipment feet, and non-food-contact zones where grease films build between deep cleans.',
  },
  {
    slug: 'forte-e1748334516723',
    image: '/products/kitchen/forte-e1748334516723.png',
    name: 'Forte',
    description:
      'Fortified cleaner for stubborn carbonized soils on production equipment—suited to periodic detail tasks under supervision.',
  },
  {
    slug: 'grill-e1748335412139',
    image: '/products/kitchen/grill-e1748335412139.png',
    name: 'Grill cleaner',
    description:
      'Targeted chemistry for grills, griddles, and high-heat surfaces—supports turnaround between services with clear safety messaging.',
  },
  {
    slug: 'quat-e1748336023630',
    image: '/products/kitchen/quat-e1748336023630.png',
    name: 'Quat sanitizer',
    description:
      'Quaternary ammonium sanitizer for food-contact surfaces per your approved dilution and contact-time program.',
  },
  {
    slug: 'sanidet-e1748335878231',
    image: '/products/kitchen/sanidet-e1748335878231.png',
    name: 'Sanidet',
    description:
      'Combined detergent–sanitizer positioning for stewarding sinks and spray applications where SOPs allow a unified step.',
  },
  {
    slug: 'sanigain-1',
    image: '/products/kitchen/sanigain-1.jpg',
    name: 'Sanigain',
    description:
      'Additive chemistry to reinforce sanitizing routes—pairs with your HACCP-aligned concentrations and verification checks.',
  },
  {
    slug: 'stainless-1',
    image: '/products/kitchen/stainless-1.png',
    name: 'Stainless steel care',
    description:
      'Cleaner/polish for visible stainless in open kitchens and buffet lines—restores uniform appearance between services.',
  },
  {
    slug: 'surface-e1748335504829',
    image: '/products/kitchen/surface-e1748335504829.png',
    name: 'Surface cleaner',
    description:
      'General-purpose surface cleaner for prep tables, counters, and non-porous work areas—fits labeled spray-bottle stations.',
  },
]

export function getKitchenProductBySlug(slug: string): KitchenProduct | undefined {
  return kitchenProducts.find((p) => p.slug === slug)
}
