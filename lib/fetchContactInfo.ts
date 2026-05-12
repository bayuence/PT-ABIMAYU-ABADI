import {sanityClient} from './sanity.client'
import {contactInfoQuery} from './sanity.queries'

export interface ContactInfo {
  _id: string
  title: string
  phones?: string[]
  emails?: string[]
  address?: string
  whatsappNumber?: string
  companyProfileUrl?: string
  socials?: {
    facebook?: string
    instagram?: string
    linkedin?: string
    twitter?: string
  }
}

export async function fetchContactInfo(): Promise<ContactInfo | null> {
  try {
    const res = await fetch('/api/contact-info', { cache: 'no-store' })
    return res.ok ? await res.json() : null
  } catch (error) {
    return null
  }
}
