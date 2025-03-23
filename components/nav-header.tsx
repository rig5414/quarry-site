"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import MobileNav from "@/components/mobile-nav"
import { usePathname } from "next/navigation"

export default function NavHeader() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "text-primary font-medium" : "text-sm font-medium transition-colors hover:text-primary"
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Londiani Building Stones</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <Link href="/about" className={isActive("/about")}>
            About
          </Link>
          <Link href="/products" className={isActive("/products")}>
            Products
          </Link>
          <Link href="/gallery" className={isActive("/gallery")}>
            Gallery
          </Link>
          <Link href="/faqs" className={isActive("/faqs")}>
            FAQs
          </Link>
          <Link href="/contact" className={isActive("/contact")}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Phone className="mr-2 h-4 w-4" />
            <Link href="tel:+254721964647">+254 721 964 647</Link>
          </Button>
          <Button asChild className="hidden md:flex">
            <Link href="/contact">Get Quote</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

