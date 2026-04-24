import type { Metadata } from 'next'
import { ContactPage } from '@/views/ContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact HTAQ Trading for consultations, program design, and partnership inquiries.',
}

export default function Page() {
  return <ContactPage />
}
