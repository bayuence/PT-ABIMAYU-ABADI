import { sanityClient } from '@/lib/sanity.client'
import { contactInfoQuery } from '@/lib/sanity.queries'

export async function GET() {
  try {
    const contactInfo = await sanityClient.fetch(contactInfoQuery)
    return Response.json(contactInfo || null)
  } catch (error) {
    return Response.json(null)
  }
}
