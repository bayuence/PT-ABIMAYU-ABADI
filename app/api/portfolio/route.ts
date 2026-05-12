import { sanityClient } from '@/lib/sanity.client'
import { portfolioQuery } from '@/lib/sanity.queries'

export async function GET() {
  try {
    const portfolio = await sanityClient.fetch(portfolioQuery)
    return Response.json(portfolio || [])
  } catch (error) {
    return Response.json([])
  }
}
