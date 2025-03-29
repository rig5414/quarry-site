import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building2, Truck, Shield, Users } from "lucide-react"
import NavHeader from "@/components/nav-header"
import type { Metadata } from "next"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us | Londiani Building Stones",
  description: "Learn about Londiani Building Stones, a leading provider of high-quality stone products in Kenya since 2005.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavHeader />

      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-6">About Londiani Building Stones</h1>
            <p className="text-muted-foreground mb-4 text-black">
  Londiani and Kedowa quarries have been known to produce the best natural stones for construction. 
  <span className="font-bold">Londiani Building Stones</span> is situated in the heart of the region. 
  We are the leading provider of high-quality stone products in the <span className="font-bold text-green-800">Rift Valley</span>, <span className="font-bold text-orange-800">Nyanza</span> and <span className="font-bold text-cyan-800">Western</span> regions. 
  We offer a wide variety of locally produced stones, including grey, black, and yellow stones, among others, that come in the ideal sizes of 6 by 9 and 9 by 9.
  <br /><br />
  <span className="font-bold">Londiani Building Stones</span> also outsources other products from other partnered manufacturers thus maintaining a strategic supply and offering a one-stop site for clients
</p>
<p className="text-muted-foreground mb-6 text-black">
  Customers seek our products because of their strength, durability and aesthetic value. Our stones can also withstand any weather condition making 
  them ideal for any project. Our state-of-the-art quarrying facilities and experienced team ensure that we deliver the best materials for your construction projects.
</p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/images/quarrysite1.jpg" alt="Quarry operations" fill className="object-cover" />
          </div>
        </div>

        <div className="grid gap-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Our Mission & Vision</h2>
            <p className="text-muted-foreground">
              At Londiani Building Stones, we are committed to providing high-quality construction materials while maintaining
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
              We stand out from the competition due to our commitment to quality, reliability, and customer
              satisfaction.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-quarry-background/30 rounded-lg p-6 shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground text-black">
                All our products undergo rigorous testing to ensure they meet the highest industry standards.
              </p>
            </div>
            <div className="bg-quarry-background/30 rounded-lg p-6 shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">Reliable Delivery</h3>
              <p className="text-muted-foreground text-black">
                We ensure timely delivery of materials to your construction site, no matter the location.
              </p>
            </div>
            <div className="bg-quarry-background/30 rounded-lg p-6 shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">Expert Team</h3>
              <p className="text-muted-foreground text-black">
                Our team of experienced professionals provides expert advice and exceptional service.
              </p>
            </div>
            <div className="bg-quarry-background/30 rounded-lg p-6 shadow-sm border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium mb-2">Modern Equipment</h3>
              <p className="text-muted-foreground text-black">
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
              <Image src="/images/constructionsite1.jpg" alt="Construction site" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

