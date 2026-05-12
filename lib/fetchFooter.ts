import {footerQuery} from './sanity.queries'

export interface FooterData {
  _id: string
  brandName?: string
  tagline?: string
  description?: string
  copyright?: string
  footerInfo?: string
  socialLinks?: Array<{ platform: string; url: string }>
  quickLinks?: Array<{ label: string; href: string }>
}

export async function fetchFooter(): Promise<FooterData | null> {
  try {
    const res = await fetch('/api/footer', { cache: 'no-store' })
    return res.ok ? await res.json() : null
  } catch (error) {
    return null
  }
}
