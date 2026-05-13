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
  metadataBase: new URL('https://abimayuabadi.com'),
  title: {
    default: 'PT. Abimayu Abadi — General Contractor & Supplier Indonesia',
    template: '%s | PT. Abimayu Abadi',
  },
  description:
    'PT. Abimayu Abadi adalah kontraktor umum dan supplier terpercaya di Indonesia. Berpengalaman dalam infrastruktur migas, perkeretaapian, warehouse industri, dan properti premium dengan klien korporat tier-1.',
  keywords: [
    'PT Abimayu Abadi',
    'kontraktor umum Indonesia',
    'general contractor',
    'supplier industri',
    'infrastruktur migas',
    'konstruksi perkeretaapian',
    'warehouse industri',
    'properti premium',
    'kontraktor terpercaya',
  ],
  authors: [{ name: 'PT. Abimayu Abadi' }],
  creator: 'PT. Abimayu Abadi',
  publisher: 'PT. Abimayu Abadi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://abimayuabadi.com',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  openGraph: {
    title: 'PT. Abimayu Abadi — General Contractor & Supplier',
    description:
      'Kontraktor umum dan supplier terpercaya dengan rekam jejak korporat tier-1 Indonesia. Infrastruktur migas, perkeretaapian, dan properti premium.',
    url: 'https://abimayuabadi.com',
    siteName: 'PT. Abimayu Abadi',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'PT. Abimayu Abadi Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT. Abimayu Abadi — General Contractor & Supplier',
    description:
      'Kontraktor umum dan supplier terpercaya dengan rekam jejak korporat tier-1 Indonesia.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" data-theme="light" className={`scroll-smooth snap-y snap-mandatory ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className={`${plusJakarta.className} font-sans antialiased theme-bg-primary`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
