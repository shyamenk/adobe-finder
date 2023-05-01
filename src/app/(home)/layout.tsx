import { Providers } from '@/(home)/Providers';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import Header from './Header';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Header />
      <body>
        <Providers>
          <SiteHeader />
          <main className="h-screen bg-mode-light text-mode-dark dark:bg-mode-dark dark:text-mode-light">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
