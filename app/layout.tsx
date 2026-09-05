import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://stefana912.github.io'),
  title: 'Stefana Muller — Technology & Infrastructure Leader',
  description: 'Writing and work from Stefana Muller, a technology executive focused on cloud infrastructure, operations, product, and people.',
  openGraph: {
    title: 'Stefana Muller — Technology & Infrastructure Leader',
    description: 'Infrastructure · Product · People',
    url: 'https://stefana912.github.io',
    siteName: 'Stefana Muller',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Stefana Muller — Infrastructure, Product, People' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stefana Muller — Technology & Infrastructure Leader',
    description: 'Infrastructure · Product · People',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
