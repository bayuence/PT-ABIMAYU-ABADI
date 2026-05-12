import { sanityClient } from '@/lib/sanity.client'
import { heroSlidesQuery } from '@/lib/sanity.queries'

export async function GET() {
  try {
    const slides = await sanityClient.fetch(heroSlidesQuery)
    return Response.json(slides || [])
  } catch (error) {
    return Response.json([])
  }
}
