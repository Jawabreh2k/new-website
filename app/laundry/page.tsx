import type { Metadata } from 'next'
import { LaundryPage } from '@/views/LaundryPage'

export const metadata: Metadata = {
  title: 'Laundry',
  description:
    'High-performance laundry chemistry, fabric protection, consistency, and cost control for hospitality operators.',
}

export default function Page() {
  return <LaundryPage />
}
