import { sanityClient } from '@/lib/sanity.client'
import { footerQuery } from '@/lib/sanity.queries'

export async function GET() {
  try {
    const footer = await sanityClient.fetch(footerQuery)
    return Response.json(footer || null)
  } catch (error) {
    return Response.json(null)
  }
}
