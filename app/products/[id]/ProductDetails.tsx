import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"

interface ProductDetailsProps {
  productId: number
}

export default function ProductDetails({ productId }: ProductDetailsProps) {
  const product = products.find((product) => product.id === productId)

  if (!product) {
    return <div>Product not found</div>
  }

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
      .filter((p) => p.id !== productId)
      .slice(0, 3)
      .map((p) => p.id),
    additionalImages: [
      `/images/${product.id}-detail-1.jpg`,
      `/images/${product.id}-detail-2.jpg`,
      `/images/${product.id}-detail-3.jpg`,
      `/images/${product.id}-detail-4.jpg`,
    ],
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Features & Benefits</h2>
          <ul className="space-y-3">
            {productDetails.features.map((feature, index) => (
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
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Specifications</h2>
          <div className="space-y-3">
            {productDetails.specifications.map((spec, index) => (
              <div key={index} className="flex justify-between py-2 border-b">
                <span className="font-medium">{spec.name}</span>
                <span className="text-muted-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-6">Related Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productDetails.relatedProducts.map((relatedProductId) => {
            const relatedProduct = products.find((p) => p.id === relatedProductId)
            if (!relatedProduct) return null
            return (
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
                  <p className="text-muted-foreground mb-4">{relatedProduct.description}</p>
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
            )
          })}
        </div>
      </div>
    </>
  )
}

