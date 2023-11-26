import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { Inter } from 'next/font/google';

import { Providers } from '@/provider/provider';

import './globals.css';
import Header from '@/components/layoutComponents/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'mongoManager',
  description: 'A next js mongo manger for all your mongo needs',
  icons: {
    icon: '/favicon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Toaster />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
