export const routes = {
  home: '/',
  laundry: '/laundry',
  housekeeping: '/housekeeping',
  kitchen: '/kitchen',
  partners: '/partners',
  contact: '/contact',
} as const

export type RouteKey = keyof typeof routes
