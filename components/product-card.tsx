import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import type { ProductType } from "@/lib/db-actions"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: ProductType | Product
}

export default function ProductCard({ product }: ProductCardProps) {
  // Check if the product has the properties from ProductType
  const isProductType = (prod: any): prod is ProductType => {
    return "color" in prod && "size_options" in prod && "weight" in prod && "application" in prod
  }

  // Get the product description, handling both types
  const description = isProductType(product) ? product.description.substring(0, 100) + "..." : product.description

  // Get the product ID, handling both types
  const productId = isProductType(product) ? product.id : product.id.toString()

  return (
    <div className="group overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-md transition-all">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          quality={90}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-medium mb-2">{product.name}</h3>
        <p className="text-muted-foreground mb-4 text-quarry-text">{description}</p>
        <Button
          variant="outline"
          size="sm"
          className="group-hover:bg-quarry-accent2 group-hover:text-white border-quarry-accent2 text-quarry-accent2"
          asChild
        >
          <Link href={`/products/${productId}`}>
            Learn More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

