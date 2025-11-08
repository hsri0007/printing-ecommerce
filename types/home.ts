export type Service = {
  id: string
  title: string
  description: string
  priceLabel: string
  image: string
  href: string
  alternativeText: string
  popular?: boolean
}

export type Feature = {
  iconKey: string
  title: string
  description: string
}

export type Stat = {
  number: string
  label: string
}

export type Testimonial = {
  name: string
  role: string
  content: string
  rating: number
  image: string
}

export type ContactInfo = {
  phone: string
  email: string
  address: string
}

export type HomeData = {
  header: {
    brand: string
  }
  footer: {
    brand: string
    description: string
    tagline: string
  }
  services: Service[]
  features: Feature[]
  stats: Stat[]
  testimonials: Testimonial[]
  contact: ContactInfo
}
