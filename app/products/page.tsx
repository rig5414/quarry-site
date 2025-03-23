import Link from "next/link"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import ProductCard from "@/components/product-card"
import NavHeader from "@/components/nav-header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | Londiani Building Stones",
  description: "Browse our wide range of high-quality stone products for all your construction needs.",
}

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavHeader />

      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">Our Products</h1>
            <p className="text-muted-foreground">
              Browse our wide range of high-quality stone products for all your construction needs.
            </p>
          </div>
          <Button asChild>
            <Link href="/contact">Request Quote</Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

