import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://stefana912.github.io'),
  title: 'Stefana Muller — Global Infrastructure & Operations Executive',
  description: 'Stefana Muller is a global technology executive pioneering AI-native operations across cloud infrastructure, SRE, platform engineering, and enterprise SaaS.',
  openGraph: {
    title: 'Stefana Muller — Global Infrastructure & Operations Executive',
    description: 'AI-native operations · Cloud infrastructure · SRE',
    url: 'https://stefana912.github.io',
    siteName: 'Stefana Muller',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Stefana Muller — Infrastructure, Product, People' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stefana Muller — Global Infrastructure & Operations Executive',
    description: 'AI-native operations · Cloud infrastructure · SRE',
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
