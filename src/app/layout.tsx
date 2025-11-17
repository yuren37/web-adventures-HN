import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/navbar';

export const metadata: Metadata = {
  title: 'Web Adventures HN | Desarrollo Web Profesional',
  description: 'Agencia especializada en diseño y desarrollo web en Honduras',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="pt-16"> {/* Espacio para el navbar fixed */}
          {children}
        </main>
      </body>
    </html>
  );
}