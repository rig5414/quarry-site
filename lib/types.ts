export interface Product {
  id: number
  name: string
  description: string
  image: string
  price?: string
  category?: string
}

export interface Testimonial {
  id: number
  name: string
  company: string
  quote: string
  rating: number
}

