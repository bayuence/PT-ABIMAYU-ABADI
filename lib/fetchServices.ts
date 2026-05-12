import {sanityClient} from './sanity.client'
import {servicesQuery} from './sanity.queries'

export interface Service {
  _id: string
  title: string
  description: string
  icon: string
  order?: number
}

export async function fetchServices(): Promise<Service[]> {
  try {
    const res = await fetch('/api/services', { cache: 'no-store' })
    return res.ok ? await res.json() : []
  } catch (error) {
    return []
  }
}
