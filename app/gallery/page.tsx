import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import NavHeader from "@/components/nav-header"
import WhatsappButton from "@/components/whatsapp-button"
import { galleryImages } from "@/lib/data"
import type { Metadata } from "next"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Gallery | Londiani Building Stones",
  description:
    "View our project gallery showcasing our high-quality stone products and completed construction projects.",
}

export default function GalleryPage() {
  // Create an expanded gallery with more images
  const expandedGallery = [
    ...galleryImages,
    // Additional gallery images
    {
      id: 9,
      src: "/images/quarrysite1.jpg",
      alt: "Quarry operations",
      title: "Quarry Operations",
      description: "Our modern quarrying operations in action",
    },
    {
      id: 10,
      src: "/images/constructionsite1.jpg",
      alt: "Construction site",
      title: "Residential Project",
      description: "A residential project using our premium building stones",
    },
    {
      id: 11,
      src: "/images/buildedhouse.jpg",
      alt: "Completed building",
      title: "Commercial Building",
      description: "A completed  building constructed with our materials",
    },
    {
      id: 12,
      src: "/images/stoneprod.jpg",
      alt: "Stone production",
      title: "Stone Production",
      description: "Our stone production process ensuring high quality",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <NavHeader />
      <WhatsappButton />

      <main className="flex-1">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Project Gallery</h1>
              <p className="text-muted-foreground">
                Explore our completed projects and quarry operations showcasing our high-quality stone products.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">Request Quote</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {expandedGallery.map((image) => (
              <div
                key={image.id}
                className="group overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Materials for Your Project?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Contact us today to discuss your project requirements. Our team is ready to help you find the perfect
              materials for your construction needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

