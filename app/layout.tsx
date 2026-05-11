import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'PT. Abimanyu Abadi - General Contractor & Supplier',
  description: 'Kontraktor umum dan supplier terpercaya dengan klien korporat tier-1 Indonesia. Infrastruktur migas, perkeretaapian, warehouse industri, properti premium.',
  generator: 'Next.js',
  metadataBase: new URL('https://abimanyu.id'),
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'PT. Abimanyu Abadi — General Contractor & Supplier',
    description: 'Kontraktor umum dan supplier dengan rekam jejak korporat tier-1 Indonesia',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'PT. Abimanyu Abadi Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" data-theme="light" className={`scroll-smooth snap-y snap-proximity ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className={`${plusJakarta.className} font-sans antialiased theme-bg-primary`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
