import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, Truck, Shield, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | PrimeStone Quarry",
  description: "Learn about PrimeStone Quarry, a leading provider of high-quality stone products in Kenya since 2005.",
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-6">About PrimeStone Quarry</h1>
          <p className="text-muted-foreground mb-4">
            Established in 2005, PrimeStone Quarry has been a leading provider of high-quality stone products in Kenya.
            Our state-of-the-art quarrying facilities and experienced team ensure that we deliver the best materials for
            your construction projects.
          </p>
          <p className="text-muted-foreground mb-6">
            We take pride in our sustainable quarrying practices and commitment to environmental conservation. Our
            products meet the highest industry standards and are trusted by major construction companies across the
            country.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=600" alt="Quarry operations" fill className="object-cover" />
        </div>
      </div>

      <div className="grid gap-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Our Mission & Vision</h2>
          <p className="text-muted-foreground">
            At PrimeStone Quarry, we are committed to providing high-quality construction materials while maintaining
            sustainable practices and supporting the local community.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide superior quality stone products and exceptional service to our customers while maintaining
              environmentally responsible quarrying practices and contributing positively to the local community.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading provider of stone products in East Africa, recognized for our quality, reliability,
              innovation, and commitment to sustainable practices in the construction industry.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground">
            We stand out from the competition due to our commitment to quality, reliability, and customer satisfaction.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium mb-2">Quality Assurance</h3>
            <p className="text-muted-foreground">
              All our products undergo rigorous testing to ensure they meet the highest industry standards.
            </p>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium mb-2">Reliable Delivery</h3>
            <p className="text-muted-foreground">
              We ensure timely delivery of materials to your construction site, no matter the location.
            </p>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium mb-2">Expert Team</h3>
            <p className="text-muted-foreground">
              Our team of experienced professionals provides expert advice and exceptional service.
            </p>
          </div>
          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-medium mb-2">Modern Equipment</h3>
            <p className="text-muted-foreground">
              We use state-of-the-art machinery and equipment for efficient and precise quarrying operations.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Your Project?</h2>
            <p className="mb-6 text-primary-foreground/90">
              Contact us today for a free quote and consultation. Our team is ready to help you find the perfect
              materials for your construction needs.
            </p>
            <Button variant="secondary" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=600&width=800" alt="Construction site" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

