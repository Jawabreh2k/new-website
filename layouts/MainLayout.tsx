import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollToTopButton } from '@/components/ScrollToTopButton'

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}
