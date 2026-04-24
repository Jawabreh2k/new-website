import type { Metadata } from 'next'
import { KitchenPage } from '@/views/KitchenPage'

export const metadata: Metadata = {
  title: 'Kitchen & F&B',
  description:
    'Food-safe kitchen cleaning systems: compliance, efficiency, and clarity for high-volume culinary operations.',
}

export default function Page() {
  return <KitchenPage />
}
