import { Providers } from '@/Providers'
import SiteHeader from '@/components/layout/SiteHeader'
import { ClerkProvider } from '@clerk/nextjs'

import './styles/globals.css'
import dynamic from 'next/dynamic'

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
        <ClerkProvider>
          <Providers>
            <SiteHeader />
            <main>{children}</main>
            <DynamicFooter />
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  )
}
