import Head from 'next/head';
import './styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>AdobeFinder | Discover Your Dream Home</title>
        <meta
          name="description"
          content="The Ultimate Destination for Property Hunting"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
