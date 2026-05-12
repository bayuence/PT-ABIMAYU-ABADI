// Hero Slides
export const heroSlidesQuery = `
  *[_type == "heroSlide" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    title,
    subtitle,
    tag,
    youtubeVideoId,
    duration,
    order
  }
`

// Services
export const servicesQuery = `
  *[_type == "service" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    title,
    description,
    icon,
    order
  }
`

// Portfolio Projects
export const portfolioQuery = `
  *[_type == "portfolio" && !(_id in path("drafts.**"))] {
    _id,
    name,
    category,
    client,
    location,
    year,
    description,
    images[] {
      _key,
      asset-> {
        _id,
        url
      },
      hotspot,
      crop
    }
  }
`

// Portfolio by Category
export const portfolioByCategoryQuery = (category: string) => `
  *[_type == "portfolio" && category == "${category}" && !(_id in path("drafts.**"))] {
    _id,
    name,
    category,
    client,
    location,
    year,
    description,
    images[] {
      _key,
      asset-> {
        _id,
        url
      }
    }
  }
`

// Clients
export const clientsQuery = `
  *[_type == "client" && defined(name) && name != "" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    name,
    logo {
      asset-> {
        _id,
        url
      },
      hotspot,
      crop
    },
    order
  }
`

// Credentials
export const credentialsQuery = `
  *[_type == "credential" && !(_id in path("drafts.**"))] | order(order asc) {
    _id,
    label,
    value,
    description,
    order
  }
`

// Contact Info (single document)
export const contactInfoQuery = `
  *[_type == "contactInfo" && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    phones,
    emails,
    address,
    whatsappNumber,
    "companyProfileUrl": companyProfile.asset->url,
    socials
  }
`

// Footer (single document)
export const footerQuery = `
  *[_type == "footer" && !(_id in path("drafts.**"))][0] {
    _id,
    brandName,
    tagline,
    description,
    copyright,
    footerInfo,
    socials
  }
`
