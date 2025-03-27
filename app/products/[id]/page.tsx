import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import NavHeader from "@/components/nav-header"
import type { Metadata } from "next"
import Footer from "@/components/footer"
import { getProductById } from "@/lib/db-actions"
import ProductDetailClient from "./ProductDetailClient"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const id = Number.parseInt(params.id)
    const product = await getProductById(id)

    return {
      title: `${product.name}`,
      description: product.description,
    }
  } catch (error) {
    return {
      title: "Product Not Found",
    }
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const id = Number.parseInt(params.id)

  try {
    const product = await getProductById(id)

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

          <ProductDetailClient product={product} />
        </div>

        <Footer />
      </div>
    )
  } catch (error) {
    notFound()
  }
}

