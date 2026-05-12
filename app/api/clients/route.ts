import { sanityClient } from '@/lib/sanity.client'
import { clientsQuery } from '@/lib/sanity.queries'

export async function GET() {
  try {
    const clients = await sanityClient.fetch(clientsQuery)
    return Response.json(clients || [])
  } catch (error) {
    return Response.json([])
  }
}
