"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Truck, Shield, Clock } from "lucide-react"
import { products } from "@/lib/data"
import { notFound } from "next/navigation"
import { useState } from "react"

type Props = {
  params: { id: string }
}

export default function ProductDetailPageClient({ params }: Props) {
  const id = Number.parseInt(params.id)
  const product = products.find((product) => product.id === id)

  if (!product) {
    notFound()
  }

  // Additional product details (these would come from your database in a real app)
  const productDetails = {
    features: [
      "High durability and strength",
      "Consistent quality and dimensions",
      "Excellent thermal insulation properties",
      "Weather resistant",
      "Environmentally sustainable sourcing",
    ],
    specifications: [
      { name: "Material", value: "Natural Stone" },
      { name: "Color", value: "Gray/Beige" },
      { name: "Size Options", value: "Standard, Custom" },
      { name: "Weight", value: "Varies by product" },
      { name: "Application", value: "Construction, Landscaping" },
    ],
    relatedProducts: products
      .filter((p) => p.id !== id)
      .slice(0, 3)
      .map((p) => p.id),
    additionalImages: [
      `/images/${product.id}-detail-1.jpg`,
      `/images/${product.id}-detail-2.jpg`,
      `/images/${product.id}-detail-3.jpg`,
      `/images/${product.id}-detail-4.jpg`,
    ],
  }

  const [selectedImage, setSelectedImage] = useState<string>(product.image || "/placeholder.svg")
  const allImages = [product.image || "/placeholder.svg", ...productDetails.additionalImages]

  return (
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <div className="space-y-4">
        <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
          <Image src={selectedImage || "/placeholder.svg"} alt={product.name} fill className="object-cover" priority />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {allImages.map((img, i) => (
            <div
              key={i}
              className={`relative aspect-square overflow-hidden rounded-md border ${
                selectedImage === img ? "border-primary border-2" : "border-muted"
              } bg-muted cursor-pointer hover:border-primary transition-colors`}
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img || "/placeholder.svg"}
                alt={`${product.name} view ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{product.name}</h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-sm font-medium">Available</div>
          <div className="text-sm text-muted-foreground">Product ID: {product.id}</div>
        </div>

        <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

        <div className="space-y-6 mb-8">
          <div className="flex items-center gap-3 text-sm">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Free Delivery</p>
              <p className="text-muted-foreground">For orders within Nairobi</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Quality Guarantee</p>
              <p className="text-muted-foreground">All products undergo rigorous testing</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="font-medium">Fast Processing</p>
              <p className="text-muted-foreground">Orders processed within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link href="/contact">Request Quote</Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Download Specifications
          </Button>
        </div>
      </div>
    </div>
  )
}

