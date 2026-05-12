import {sanityClient} from './sanity.client'
import {portfolioQuery} from './sanity.queries'
import {urlFor} from './sanity.image'

export interface PortfolioImage {
  _key: string
  asset: {
    _id: string
    url: string
  }
  hotspot?: any
  crop?: any
}

export interface Portfolio {
  _id: string
  name: string
  category: 'industri' | 'warehouse' | 'residensial' | 'komersial'
  client: string
  location?: string
  year?: number
  description?: string
  images: PortfolioImage[]
}

export async function fetchPortfolio(): Promise<Portfolio[]> {
  try {
    const res = await fetch('/api/portfolio', { cache: 'no-store' })
    return res.ok ? await res.json() : []
  } catch (error) {
    return []
  }
}

export function getPortfolioImageUrl(image: PortfolioImage): string {
  if (image?.asset?.url) {
    return image.asset.url
  }
  return ''
}
