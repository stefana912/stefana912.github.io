import type { Metadata } from 'next';
import { siteUrl } from './content';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Stefana Muller | Global Infrastructure & Operations Executive',
  description: 'Stefana Muller is a global technology executive pioneering agentic development and operations across cloud infrastructure, SRE, platform engineering, and enterprise SaaS.',
  openGraph: {
    title: 'Stefana Muller | Global Infrastructure & Operations Executive',
    description: 'Agentic development and operations · Cloud infrastructure · SRE',
    url: siteUrl,
    siteName: 'Stefana Muller',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Stefana Muller | Infrastructure, Product, People' }],
    type: 'website',
  },
  icons: { icon: '/favicon.svg' },
  twitter: {
    card: 'summary_large_image',
    title: 'Stefana Muller | Global Infrastructure & Operations Executive',
    description: 'Agentic development and operations · Cloud infrastructure · SRE',
    images: ['/og.jpg'],
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
