"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Truck, Shield, Clock } from "lucide-react"
import type { ProductType } from "@/lib/db-actions"
import { getRelatedProducts } from "@/lib/db-actions"
import { useEffect } from "react"

interface ProductDetailClientProps {
  product: ProductType
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  // Generate additional product images (in a real app, these would come from the database)
  const additionalImages = [
    `/images/${product.category}-detail-1.jpg`,
    `/images/${product.category}-detail-2.jpg`,
    `/images/${product.category}-detail-3.jpg`,
  ]

  const [selectedImage, setSelectedImage] = useState<string>(product.image)
  const [relatedProducts, setRelatedProducts] = useState<ProductType[]>([])
  const allImages = [product.image, ...additionalImages]

  // Fetch related products
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      const related = await getRelatedProducts(product.id, product.category)
      setRelatedProducts(related)
    }

    fetchRelatedProducts()
  }, [product.id, product.category])

  return (
    <div className="space-y-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt={product.name}
              fill
              quality={90}
              className="object-cover"
              priority
            />
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
                  quality={90}
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
                <p className="font-medium">Efficient Delivery</p>
                <p className="text-muted-foreground">Efficient product delivery</p>
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
                <p className="text-muted-foreground">Orders processed from the moment go</p>
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

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Specifications</h2>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Color</span>
              <span className="text-muted-foreground">{product.color}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Size Options</span>
              <span className="text-muted-foreground">{product.size_options}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Weight</span>
              <span className="text-muted-foreground">{product.weight}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="font-medium">Application</span>
              <span className="text-muted-foreground">{product.application.split(", ")[0]}</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Applications</h2>
          <ul className="space-y-3">
            {product.application.split(", ").map((app, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="group overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-medium mb-2">{relatedProduct.name}</h3>
                  <p className="text-muted-foreground mb-4">{relatedProduct.description.substring(0, 100)}...</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground"
                    asChild
                  >
                    <Link href={`/products/${relatedProduct.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

