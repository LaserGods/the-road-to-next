import './globals.css';
import localFont from 'next/font/local';
import { Header } from '@/components/header';
import { ThemProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  description: 'My Road to Next application...',
  title: 'The Road to Next',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemProvider>
          <Header />
          <main className="flex min-h-screen flex-1 flex-col overflow-y-auto overflow-x-hidden bg-secondary/20 px-8 py-24">
            {children}
          </main>
          <Toaster expand />
        </ThemProvider>
      </body>
    </html>
  );
}
