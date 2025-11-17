import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Web Adventures HN',
  description: 'Soluciones digitales modernas - Desarrollo web profesional en Honduras',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/wa-foot.png" />
        <title>Web Adventures HN</title>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}