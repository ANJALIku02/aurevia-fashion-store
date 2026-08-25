import type { Metadata } from 'next';
import './globals.css';
import {CartProvider} from './components/CartProvider';import Header from './components/Header';import Footer from './components/Footer';
import NavigationFix from './components/NavigationFix';

export const metadata: Metadata = {
  metadataBase: new URL('https://aurevia-fashion.mauryaanjal777.chatgpt.site'),
  title: 'AUREVIA — Wear What Feels Like You',
  description: 'Modern clothing, thoughtful style and personal shopping by AUREVIA.',
  openGraph: {
    title: 'AUREVIA — Wear What Feels Like You',
    description: 'Modern silhouettes, thoughtful style and limited-run fashion for real life.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'AUREVIA — Wear what feels like you.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AUREVIA — Wear What Feels Like You',
    description: 'Modern silhouettes, thoughtful style and limited-run fashion for real life.',
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
      <body>
        <CartProvider><NavigationFix/><Header/>{children}<Footer/></CartProvider>
      </body>
    </html>
  );
}

