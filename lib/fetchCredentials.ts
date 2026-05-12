import {sanityClient} from './sanity.client'
import {credentialsQuery} from './sanity.queries'

export interface Credential {
  _id: string
  label: string
  value: string
  description?: string
  order?: number
}

export async function fetchCredentials(): Promise<Credential[]> {
  try {
    const res = await fetch('/api/credentials', { cache: 'no-store' })
    return res.ok ? await res.json() : []
  } catch (error) {
    return []
  }
}
