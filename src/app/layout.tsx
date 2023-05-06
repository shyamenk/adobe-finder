import { Providers } from '@/Providers';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import { ClerkProvider } from '@clerk/nextjs/app-beta';

import './styles/globals.css';

export const metadata = {
  title: 'AdobeFinder | Discover Your Dream Home',
  description: 'The Ultimate Destination for Property Hunting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            <SiteFooter />
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
