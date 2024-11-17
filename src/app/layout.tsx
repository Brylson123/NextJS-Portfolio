import { LanguageProvider } from '@/context/LanguageContext';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My own portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>
      <LanguageProvider>
        {children}
      </LanguageProvider>
      </body>
      </html>
  );
}
