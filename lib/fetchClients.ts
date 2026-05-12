import {sanityClient} from './sanity.client'
import {clientsQuery} from './sanity.queries'

export interface ClientLogo {
  asset?: {
    _id: string
    url: string
  }
  hotspot?: any
  crop?: any
}

export interface Client {
  _id: string
  name: string
  logo?: ClientLogo
  order?: number
}

export async function fetchClients(): Promise<Client[]> {
  try {
    const res = await fetch('/api/clients', { cache: 'no-store' })
    return res.ok ? await res.json() : []
  } catch (error) {
    return []
  }
}

export function getClientLogoUrl(logo: ClientLogo | undefined): string | null {
  if (logo?.asset?.url) {
    return logo.asset.url
  }
  return null
}
