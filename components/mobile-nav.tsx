"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-bold text-xl" onClick={() => setOpen(false)}>
              Londiani Building Stones
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/gallery"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/faqs"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-col gap-2 mt-4">
            <Button asChild className="w-full">
              <Link href="/contact">Get Quote</Link>
            </Button>
            <div className="flex items-center gap-2 mt-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="tel:+254721964647">+254 721 964 647</Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

