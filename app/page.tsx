import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Truck, Building2, Hammer, Shield } from "lucide-react"
import MobileNav from "@/components/mobile-nav"
import ProductCard from "@/components/product-card"
import TestimonialCard from "@/components/testimonial-card"
import ContactForm from "@/components/contact-form"
import Gallery from "@/components/gallery"
import HeroCarousel from "@/components/hero-carousel"
import { products, testimonials } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">PrimeStone Quarry</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#products" className="text-sm font-medium transition-colors hover:text-primary">
              Products
            </Link>
            <Link href="#gallery" className="text-sm font-medium transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Phone className="mr-2 h-4 w-4" />
              <span>+254 700 000 000</span>
            </Button>
            <Button className="hidden md:flex">Get Quote</Button>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section>
          <HeroCarousel />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">About PrimeStone Quarry</h2>
                <p className="text-muted-foreground mb-4">
                  Established in 2005, PrimeStone Quarry has been a leading provider of high-quality stone products in
                  Kenya. Our state-of-the-art quarrying facilities and experienced team ensure that we deliver the best
                  materials for your construction projects.
                </p>
                <p className="text-muted-foreground mb-6">
                  We take pride in our sustainable quarrying practices and commitment to environmental conservation. Our
                  products meet the highest industry standards and are trusted by major construction companies across
                  the country.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">20+ Years</h4>
                      <p className="text-sm text-muted-foreground">Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">500+</h4>
                      <p className="text-sm text-muted-foreground">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/quarrysite1.jpg"
                  alt="Quarry operations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
              <p className="text-muted-foreground">
                We offer comprehensive quarrying and supply services to meet all your construction material needs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Hammer className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Stone Quarrying</h3>
                <p className="text-muted-foreground">
                  Extraction of high-quality natural stones using modern equipment and techniques.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Material Delivery</h3>
                <p className="text-muted-foreground">
                  Prompt and reliable delivery of materials to your construction site.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Quality Testing</h3>
                <p className="text-muted-foreground">
                  Rigorous testing to ensure all materials meet industry standards and specifications.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border hover:border-primary hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">Consultation</h3>
                <p className="text-muted-foreground">
                  Expert advice on the best materials for your specific construction project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Products</h2>
              <p className="text-muted-foreground">
                We offer a wide range of high-quality stone products for all your construction needs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Project Gallery</h2>
              <p className="text-muted-foreground">View some of our completed projects and quarry operations.</p>
            </div>
            <Gallery />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground">
                Don't just take our word for it. Here's what our clients have to say about our products and services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Start Your Project?</h2>
                  <p className="mb-6 text-primary-foreground/90">
                    Contact us today for a free quote and consultation. Our team is ready to help you find the perfect
                    materials for your construction needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="secondary" size="lg">
                      Get a Quote
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      Contact Sales
                    </Button>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg">
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="text-sm font-medium">Call Us</p>
                      <p>+254 700 000 000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg">
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="text-sm font-medium">Email Us</p>
                      <p>info@primestonequarry.co.ke</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <p className="text-sm font-medium">Visit Us</p>
                      <p>Juja, Kiambu County, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Us</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions or need a quote? Fill out the form below and our team will get back to you as soon as
                  possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+254 700 000 000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">info@primestonequarry.co.ke</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">Juja, Kiambu County, Kenya</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-medium mb-3">Follow Us</p>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-background flex items-center justify-center border hover:bg-muted transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-background flex items-center justify-center border hover:bg-muted transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-background flex items-center justify-center border hover:bg-muted transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm border">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">PrimeStone Quarry</h3>
              <p className="text-muted-foreground mb-4">
                Your trusted partner for high-quality construction materials since 2005.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-muted-foreground hover:text-foreground">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-muted-foreground hover:text-foreground">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#products" className="text-muted-foreground hover:text-foreground">
                    Building Stones
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-muted-foreground hover:text-foreground">
                    Ballast
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-muted-foreground hover:text-foreground">
                    Hardcore
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-muted-foreground hover:text-foreground">
                    Machine Cut Stones
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-muted-foreground hover:text-foreground">
                    Sand
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <span className="text-muted-foreground">Juja, Kiambu County, Kenya</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <span className="text-muted-foreground">+254 700 000 000</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <span className="text-muted-foreground">info@primestonequarry.co.ke</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} PrimeStone Quarry. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

