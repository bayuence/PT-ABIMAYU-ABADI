import {footerQuery} from './sanity.queries'

export interface FooterData {
  _id: string
  brandName?: string
  tagline?: string
  description?: string
  copyright?: string
  footerInfo?: string
  socials?: {
    facebook?: string
    instagram?: string
    linkedin?: string
    twitter?: string
  }
}

export async function fetchFooter(): Promise<FooterData | null> {
  try {
    const res = await fetch('/api/footer', { cache: 'no-store' })
    return res.ok ? await res.json() : null
  } catch (error) {
    return null
  }
}
