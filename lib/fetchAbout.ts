import { sanityClient } from './sanity.client'

export interface AboutData {
  tagline: string
  title: string
  description: string
  stats: {
    value: number
    suffix: string
    label: string
  }[]
  badges: {
    name: string
    description: string
  }[]
  videos: {
    title: string
    location: string
    videoId: string
  }[]
}

export async function fetchAbout(): Promise<AboutData | null> {
  const query = `*[_type == "about" && !(_id in drafts.**)][0] {
    tagline,
    title,
    description,
    stats,
    badges,
    videos
  }`
  
  try {
    const data = await sanityClient.fetch(query)
    return data
  } catch (error) {
    console.error("Error fetching about data:", error)
    return null
  }
}
