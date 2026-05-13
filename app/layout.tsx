import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'
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
    default: 'PT. Abimayu Abadi \u2014 General Contractor & Supplier Indonesia',
    template: '%s | PT. Abimayu Abadi',
  },
  description:
    'PT. Abimayu Abadi adalah kontraktor umum dan supplier terpercaya di Indonesia. Berpengalaman dalam infrastruktur migas, perkeretaapian, warehouse industri, dan properti premium dengan klien korporat tier-1.',
  keywords: [
    'PT Abimayu Abadi',
    'Abimayu Abadi',
    'abimayuabadi',
    'kontraktor umum Indonesia',
    'general contractor Indonesia',
    'supplier industri Indonesia',
    'jasa kontraktor',
    'infrastruktur migas',
    'konstruksi perkeretaapian',
    'warehouse industri',
    'properti premium',
    'kontraktor terpercaya',
    'kontraktor berpengalaman',
    'supplier terpercaya Indonesia',
    'jasa konstruksi profesional',
    'kontraktor korporat',
    'proyek infrastruktur Indonesia',
    'abimayuabadi.com',
    'PT Abimayu',
    'general contractor supplier',
    'kontraktor oil and gas',
    'konstruksi nasional',
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
    title: 'PT. Abimayu Abadi \u2014 General Contractor & Supplier',
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
        alt: 'PT. Abimayu Abadi \u2014 General Contractor & Supplier Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT. Abimayu Abadi \u2014 General Contractor & Supplier',
    description:
      'Kontraktor umum dan supplier terpercaya dengan rekam jejak korporat tier-1 Indonesia.',
    images: ['/logo.png'],
  },
  // ✅ Google Search Console Verification
  verification: {
    google: 'oLt3FXSc1irlePDjj8qMX8SX3reiPDi13gEXAC5jQcc',
  },
}

// ═══════════════════════════════════════════════════
// JSON-LD Structured Data — Membantu Google mengenali
// perusahaan ini dan menampilkan rich results
// ═══════════════════════════════════════════════════

// 1. Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PT. Abimayu Abadi',
  alternateName: ['Abimayu Abadi', 'PT Abimayu Abadi'],
  url: 'https://abimayuabadi.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://abimayuabadi.com/logo.png',
    width: 512,
    height: 512,
  },
  description:
    'PT. Abimayu Abadi adalah kontraktor umum dan supplier terpercaya di Indonesia dengan pengalaman di infrastruktur migas, perkeretaapian, warehouse industri, dan properti premium.',
  foundingCountry: 'ID',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ID',
    addressLocality: 'Indonesia',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Indonesian', 'English'],
  },
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
  knowsAbout: [
    'General Contracting',
    'Industrial Supply',
    'Oil & Gas Infrastructure',
    'Railway Construction',
    'Industrial Warehouse',
    'Premium Property Development',
  ],
  sameAs: ['https://abimayuabadi.com'],
}

// 2. WebSite Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PT. Abimayu Abadi',
  url: 'https://abimayuabadi.com',
  description: 'Website resmi PT. Abimayu Abadi \u2014 General Contractor & Supplier Indonesia',
  inLanguage: 'id-ID',
  publisher: {
    '@type': 'Organization',
    name: 'PT. Abimayu Abadi',
    logo: {
      '@type': 'ImageObject',
      url: 'https://abimayuabadi.com/logo.png',
    },
  },
}

// 3. LocalBusiness / GeneralContractor Schema — Untuk pencarian lokal & bisnis
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'PT. Abimayu Abadi',
  image: 'https://abimayuabadi.com/logo.png',
  url: 'https://abimayuabadi.com',
  description:
    'Kontraktor umum dan supplier terpercaya di Indonesia dengan pengalaman di infrastruktur migas, perkeretaapian, warehouse, dan properti premium.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ID',
  },
  priceRange: '$$$$',
  openingHours: 'Mo-Fr 08:00-17:00',
  areaServed: 'Indonesia',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Layanan PT. Abimayu Abadi',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Infrastruktur Migas',
          description: 'Konstruksi dan supply untuk sektor minyak dan gas bumi',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Konstruksi Perkeretaapian',
          description: 'Pembangunan infrastruktur perkeretaapian nasional',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Warehouse Industri',
          description: 'Pembangunan gudang dan fasilitas industri skala besar',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Properti Premium',
          description: 'Pengembangan properti komersial dan residensial premium',
        },
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
    <html lang="id" data-theme="light" className={`scroll-smooth snap-y snap-mandatory ${plusJakarta.variable}`} suppressHydrationWarning>
      <head>
        {/* ✅ JSON-LD Structured Data untuk Google Rich Results */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${plusJakarta.className} font-sans antialiased theme-bg-primary`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
