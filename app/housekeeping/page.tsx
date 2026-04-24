import type { Metadata } from 'next'
import { HousekeepingPage } from '@/views/HousekeepingPage'

export const metadata: Metadata = {
  title: 'Housekeeping',
  description:
    'Housekeeping and hygiene programs aligned to luxury hotel standards and operational realities in the Gulf.',
}

export default function Page() {
  return <HousekeepingPage />
}
