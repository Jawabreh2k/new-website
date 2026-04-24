import type { Metadata } from 'next'
import { PartnersPage } from '@/views/PartnersPage'

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'International partnerships and regional implementation for HTAQ Trading hospitality chemical programs.',
}

export default function Page() {
  return <PartnersPage />
}
