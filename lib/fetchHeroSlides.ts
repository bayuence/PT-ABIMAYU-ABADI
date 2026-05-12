import {sanityClient} from './sanity.client'
import {heroSlidesQuery} from './sanity.queries'

export interface HeroSlide {
  _id: string
  title: string
  subtitle: string
  tag?: string
  youtubeVideoId: string
  duration?: number
  order?: number
}

export async function fetchHeroSlides(): Promise<HeroSlide[]> {
  try {
    const res = await fetch('/api/hero-slides', { cache: 'no-store' })
    return res.ok ? await res.json() : []
  } catch (error) {
    return []
  }
}
