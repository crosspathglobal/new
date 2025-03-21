import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TalentForge | Expert Developer Staffing Solutions',
  description: 'Connect with top-tier development talent. Our expert staffing solutions help you build the perfect tech team for your projects.',
  keywords: 'developer staffing, tech recruitment, software engineers, IT staffing, developer hiring',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}