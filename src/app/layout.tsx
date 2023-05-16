import { Providers } from '@/Providers'
import SiteHeader from '@/components/layout/SiteHeader'
import './styles/globals.css'
import dynamic from 'next/dynamic'
import { Toaster } from 'react-hot-toast'
import AuthProvider from '@/components/AuthProvider'

export const metadata = {
  title: 'AdobeFinder | Discover Your Dream Home',
  description: 'The Ultimate Destination for Property Hunting',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const DynamicFooter = dynamic(() => import('@/components/layout/SiteFooter'))
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth antialiased`}
    >
      <body>
        <AuthProvider>
          <Providers>
            <Toaster />
            <SiteHeader />
            <main>{children}</main>
            <DynamicFooter />
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
}
