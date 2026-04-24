import type { Metadata } from 'next'
import { HomePage } from '@/views/HomePage'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'HTAQ Trading — premium chemical solutions for laundry, housekeeping, and kitchen operations in Qatar and the Gulf.',
}

export default function Page() {
  return <HomePage />
}
