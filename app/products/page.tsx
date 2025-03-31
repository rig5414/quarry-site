import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import NavHeader from "@/components/nav-header"
import type { Metadata } from "next"
import Footer from "@/components/footer"
import { getAllProducts } from "@/lib/db-actions"

export const metadata: Metadata = {
  title: "Products | londianibuildingstones",
  description: "Browse our wide range of high-quality stone products for all your construction needs.",
}

export default async function ProductsPage() {
  const products = await getAllProducts()

  // Group products by category
  const categories = products.reduce(
    (acc, product) => {
      const category = product.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(product)
      return acc
    },
    {} as Record<string, typeof products>,
  )

  // Format category names for display
  const formatCategoryName = (category: string) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Define custom category order
  const categoryOrder = ["building-stones", "hardcore", "sand", "ballast", "quarry-dust"]

  // Sort categories according to the custom order
  const sortedCategories = Object.entries(categories).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a[0])
    const indexB = categoryOrder.indexOf(b[0])

    // If a category isn't in our predefined order, place it at the end
    if (indexA === -1) return 1
    if (indexB === -1) return -1

    return indexA - indexB
  })

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

        {sortedCategories.map(([category, categoryProducts]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold tracking-tight mb-6">{formatCategoryName(category)}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div></div>
      <Footer />
    </div>
  )
}

