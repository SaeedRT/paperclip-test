import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const accentSans = Manrope({
  variable: '--font-accent-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sakura Sushi — Authentic Japanese Cuisine',
  description:
    'Experience the finest sushi and Japanese cuisine in town. Fresh ingredients, traditional techniques, unforgettable flavors.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} ${accentSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
