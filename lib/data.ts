import type { Product, Testimonial } from "./types"

export const products: Product[] = [
  {
    id: 1,
    name: "Building Stones",
    description: "Durable and aesthetically pleasing stones for building construction.",
    image: "/images/buildingstones.jpg",
    category: "construction",
  },
  {
    id: 2,
    name: "Ballast",
    description: "High-quality ballast in various sizes for concrete mixing and foundation work.",
    image: "/images/ballast.jpg",
    category: "construction",
  },
  {
    id: 3,
    name: "Hardcore",
    description: "Crushed stone aggregate ideal for road construction and foundation filling.",
    image: "/images/hardcore.jpg",
    category: "construction",
  },
  {
    id: 4,
    name: "Machine Cut Stones",
    description: "Precisely cut stones for uniform and strong wall construction.",
    image: "/images/machinecutstones.jpg",
    category: "construction",
  },
  {
    id: 5,
    name: "Sand",
    description: "Clean, well-graded sand for masonry, plastering, and concrete work.",
    image: "/images/sand.jpg",
    category: "construction",
  },
  {
    id: 6,
    name: "Quarry Dust",
    description: "Fine material used for block making and as a sand substitute.",
    image: "/images/coarsequarrydust.jpg",
    category: "construction",
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Kamau",
    company: "Nairobi Construction Ltd",
    quote:
      "Londiani Building Stones has been our trusted supplier for over 5 years. Their materials are consistently high quality and deliveries are always on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mary Wanjiku",
    company: "Wanjiku Developers",
    quote:
      "The building stones we purchased were of excellent quality. Our clients were impressed with the final look of their homes. We'll definitely continue working with Londiani Building Stones.",
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

// Gallery images for the gallery component
export const galleryImages = [
  {
    id: 1,
    src: "/images/quarrysite.jpg",
    alt: "Quarry site overview",
    title: "Main Quarry Site",
    description: "Our main quarry site in Londiani, Kericho County",
  },
  {
    id: 2,
    src: "/images/stonecutter.jpeg",
    alt: "Stone cutting process",
    title: "Stone Cutting Process",
    description: "Modern machinery used for precise stone cutting",
  },
  {
    id: 3,
    src: "/images/stonesstacked1.jpeg",
    alt: "Building stones stacked",
    title: "Building Stone Production",
    description: "High-quality building stones ready for delivery",
  },
  {
    id: 4,
    src: "/images/constructionsite1.jpg",
    alt: "Construction site using our materials",
    title: "Project Implementation",
    description: "A residential project using our building materials",
  },
  {
    id: 5,
    src: "/images/ballast2.jpeg",
    alt: "Ballast production",
    title: "Ballast Production",
    description: "Production of various sizes of ballast for construction",
  },
  {
    id: 6,
    src: "/images/deliverytrucks.jpg",
    alt: "Delivery trucks",
    title: "Material Delivery",
    description: "Our fleet of trucks ensuring timely delivery",
  },
  {
    id: 7,
    src: "/images/concretetesting.jpg",
    alt: "Quality testing",
    title: "Quality Assurance",
    description: "Rigorous testing to ensure material quality",
  },
  {
    id: 8,
    src: "/images/finishedhouse.jpg",
    alt: "Completed building project",
    title: "Completed Project",
    description: "A commercial building constructed with our materials",
  },
]

// Hero images for the carousel
export const heroImages = [
  {
    image: "/images/quarrysite.jpg",
    alt: "Quarry site overview",
    title: "Quality Stone Products for Construction Excellence",
    description:
      "We provide premium quality natural stones, ballast, and construction materials for all your building needs.",
  },
  {
    image: "/images/stoneprod.jpg",
    alt: "Stone production",
    title: "Building the Future with Quality Materials",
    description: "Our state-of-the-art quarrying facilities ensure the highest quality construction materials.",
  },
  {
    image: "/images/constructionsite.jpg",
    alt: "Construction site",
    title: "Trusted by Leading Construction Companies",
    description: "Join hundreds of satisfied customers who rely on our premium stone products.",
  },
]
