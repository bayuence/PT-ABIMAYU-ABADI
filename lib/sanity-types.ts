/**
 * Sanity CMS Type Definitions
 * SANITY: Replace mock data with these queries when integrating Sanity CMS
 */

// SANITY: Use for fetching portfolio projects
export interface Project {
  _id: string
  title: string
  category: 'industri' | 'warehouse' | 'residensial' | 'komersial'
  client: string
  location: string
  year: number
  image?: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
}

// SANITY: Use for fetching client logos
export interface Client {
  _id: string
  name: string
  logo?: {
    asset: {
      url: string
    }
  }
  tier: 'platinum' | 'gold' | 'standard'
}

// SANITY: Use for fetching services
export interface Service {
  _id: string
  title: string
  description: string
  icon: string
  slug: {
    current: string
  }
}

// SANITY: Use for fetching company profile PDF
export interface CompanyProfile {
  _id: string
  pdfFile: {
    asset: {
      url: string
    }
  }
  updatedAt: string
}

// SANITY: Example GROQ queries to use with @sanity/client
/*
// Get all projects
const PROJECTS_QUERY = `*[_type == "project"] | order(year desc) {
  _id,
  title,
  category,
  client,
  location,
  year,
  "image": image.asset->url,
  slug
}`

// Get all clients
const CLIENTS_QUERY = `*[_type == "client"] {
  _id,
  name,
  "logo": logo.asset->url,
  tier
}`

// Get services
const SERVICES_QUERY = `*[_type == "service"] {
  _id,
  title,
  description,
  icon,
  slug
}`

// Get company profile
const COMPANY_PROFILE_QUERY = `*[_type == "companyProfile"][0] {
  _id,
  pdfFile,
  updatedAt
}`
*/
