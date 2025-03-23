import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Truck, Shield, Clock } from "lucide-react"
import { products } from "@/lib/data"
import { notFound } from "next/navigation"
import NavHeader from "@/components/nav-header"
import Footer from "@/components/footer"
import type { Metadata, ResolvingMetadata } from "next"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = Number.parseInt(params.id)
  const product = products.find((product) => product.id === id)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} | Londiani Building Stones`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductDetailPage({ params }: Props) {
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

  return (
    <div className="flex min-h-screen flex-col">
      <NavHeader />

      <div className="container py-12 md:py-16">
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productDetails.additionalImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-md border bg-muted cursor-pointer hover:border-primary transition-colors"
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
            {productDetails.relatedProducts.map((productId) => {
              const relatedProduct = products.find((p) => p.id === productId)
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
      </div>
      <Footer/>
    </div>
  )
}

