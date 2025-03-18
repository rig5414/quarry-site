import type { Product, Testimonial } from "./types"

export const products: Product[] = [
  {
    id: 1,
    name: "Building Stones",
    description: "Durable and aesthetically pleasing stones for building construction.",
    image: "/placeholder.svg?height=400&width=600",
    category: "construction",
  },
  {
    id: 2,
    name: "Ballast",
    description: "High-quality ballast in various sizes for concrete mixing and foundation work.",
    image: "/placeholder.svg?height=400&width=600",
    category: "construction",
  },
  {
    id: 3,
    name: "Hardcore",
    description: "Crushed stone aggregate ideal for road construction and foundation filling.",
    image: "/placeholder.svg?height=400&width=600",
    category: "construction",
  },
  {
    id: 4,
    name: "Machine Cut Stones",
    description: "Precisely cut stones for uniform and strong wall construction.",
    image: "/placeholder.svg?height=400&width=600",
    category: "construction",
  },
  {
    id: 5,
    name: "Sand",
    description: "Clean, well-graded sand for masonry, plastering, and concrete work.",
    image: "/placeholder.svg?height=400&width=600",
    category: "construction",
  },
  {
    id: 6,
    name: "Quarry Dust",
    description: "Fine material used for block making and as a sand substitute.",
    image: "/placeholder.svg?height=400&width=600",
    category: "construction",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Kamau",
    company: "Nairobi Construction Ltd",
    quote:
      "PrimeStone Quarry has been our trusted supplier for over 5 years. Their materials are consistently high quality and deliveries are always on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mary Wanjiku",
    company: "Wanjiku Developers",
    quote:
      "The building stones we purchased were of excellent quality. Our clients were impressed with the final look of their homes. We'll definitely continue working with PrimeStone.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Omondi",
    company: "Omondi & Sons Contractors",
    quote:
      "Their customer service is exceptional. They went above and beyond to ensure we got the right materials for our project. Highly recommended!",
    rating: 4,
  },
]

