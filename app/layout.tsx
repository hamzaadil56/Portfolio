import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/lib/theme-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Muhammad Hamza - Full Stack Engineer',
  description: 'Experienced Full Stack Engineer specializing in React.js, AI/ML, and cloud architecture. Building scalable web applications and innovative solutions.',
  keywords: ['Full Stack Engineer', 'React.js', 'Next.js', 'AI/ML', 'Cloud Architecture', 'Software Developer'],
  authors: [{ name: 'Muhammad Hamza' }],
  openGraph: {
    title: 'Muhammad Hamza - Full Stack Engineer',
    description: 'Experienced Full Stack Engineer specializing in React.js, AI/ML, and cloud architecture.',
    type: 'website',
    url: 'https://hamzaadil.dev',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}