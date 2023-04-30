import './styles/globals.css';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import Header from '@/Head';
import { Providers } from '@/Providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Header />
      <body className="bg-bluegray-200 text-bluegray-900 dark:bg-bluegray-900 dark:text-black">
        <Providers>
          <SiteHeader />
          <main className="h-screen">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
