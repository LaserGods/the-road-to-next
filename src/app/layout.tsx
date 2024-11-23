import './globals.css';
import { LucideKanban } from 'lucide-react';
import localFont from 'next/font/local';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { homePath, ticketsPath } from '@/paths';
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
        <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 flex w-full justify-between border-b bg-background/95 px-5 py-2.5 backdrop-blur">
          <div>
            <Link href={homePath()} className={buttonVariants({ variant: 'ghost' })}>
              <LucideKanban />
              <h1 className="test-lg font-semibold">TicketBounty</h1>
            </Link>
          </div>
          <div>
            <Link href={ticketsPath()} className={buttonVariants({ variant: 'default' })}>
              Tickets
            </Link>
          </div>
        </nav>
        <main className="flex min-h-screen flex-1 flex-col overflow-y-auto overflow-x-hidden bg-secondary/20 px-8 py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
