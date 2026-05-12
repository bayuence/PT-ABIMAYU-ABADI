import { sanityClient } from '@/lib/sanity.client'
import { servicesQuery } from '@/lib/sanity.queries'

export async function GET() {
  try {
    const services = await sanityClient.fetch(servicesQuery)
    return Response.json(services || [])
  } catch (error) {
    return Response.json([])
  }
}
