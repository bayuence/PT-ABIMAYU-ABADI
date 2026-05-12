// Hero Slides
export const heroSlidesQuery = `
  *[_type == "heroSlide"] | order(order asc) {
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
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    order
  }
`

// Portfolio Projects
export const portfolioQuery = `
  *[_type == "portfolio"] {
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
  *[_type == "portfolio" && category == "${category}"] {
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
  *[_type == "client" && defined(name) && name != ""] | order(order asc) {
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
  *[_type == "credential"] | order(order asc) {
    _id,
    label,
    value,
    description,
    order
  }
`

// Contact Info (single document)
export const contactInfoQuery = `
  *[_type == "contactInfo"][0] {
    _id,
    title,
    phones,
    emails,
    address,
    whatsappNumber
  }
`
