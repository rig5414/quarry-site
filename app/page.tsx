import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Truck, Building2, Hammer, Shield } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"
import ProductCard from "@/components/product-card"
import TestimonialCard from "@/components/testimonial-card"
import ContactForm from "@/components/contact-form"
import Gallery from "@/components/gallery"
import HeroCarousel from "@/components/hero-carousel"
import NavHeader from "@/components/nav-header"
import Footer from "@/components/footer"
import { products, testimonials } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <NavHeader />

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
                <h2 className="text-3xl font-bold tracking-tight mb-6">About Londani Building Stones</h2>
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">10+ Years</h4>
                      <p className="text-sm text-muted-foreground">Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">200+</h4>
                      <p className="text-sm text-muted-foreground">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/quarrysite1.jpg" alt="Quarry operations" fill className="object-cover" />
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
              <div className="bg-quarry-background/30 rounded-lg p-6 shadow-sm border hover:border-primary hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Hammer className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Stone Quarrying</h3>
                <p className="text-black">
                  Extraction of high-quality natural stones using modern equipment and techniques.
                </p>
              </div>
              <div className="bg-quarry-background/30 rounded-lg p-6 shadow-sm border hover:border-primary hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Material Delivery</h3>
                <p className="text-black">
                  Prompt and reliable delivery of materials to your construction site.
                </p>
              </div>
              <div className="bg-quarry-background/30 rounded-lg p-6 shadow-sm border hover:border-primary hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Testing</h3>
                <p className="text-black">
                  Rigorous testing to ensure all materials meet industry standards and specifications.
                </p>
              </div>
              <div className="bg-quarry-background/30 rounded-lg p-6 shadow-sm border hover:border-primary hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-black">
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
            <div className="text-center mt-10">
              <Button size="lg" asChild>
                <Link href="/products">View All Products</Link>
              </Button>
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
                    <Button variant="secondary" size="lg" asChild>
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                      asChild
                    >
                      <Link href="/contact">Contact Sales</Link>
                    </Button>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg">
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="text-sm font-medium">Call Us</p>
                      <p>+254 721 964 647</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg">
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="text-sm font-medium">Email Us</p>
                      <p>londianibuildingstones@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <p className="text-sm font-medium">Visit Us</p>
                      <p>Londiani, Kericho County, Kenya</p>
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
                      <p className="font-medium">+254 721 964 647</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <a href={`mailto:londianibuildingstones@gmail.com`}
                      className="h-5 w-5"
                      aria-label="londianibuildingstones@gmail.com"
                      ><Mail className="h-5 w-5" /></a>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a 
                        href={`mailto:londianibuildingstones@gmail.com`}
                        className="font-medium">
                          londianibuildingstones@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium">Londiani, Kericho County, Kenya</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-medium mb-3">Follow Us</p>
                  <div className="flex gap-4">
                    <Link
                      href="https://facebook.com/londianibuildingstones"
                      target="_blank"
                      className="h-10 w-10 rounded-full bg-background flex items-center justify-center border hover:bg-muted transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-background flex items-center justify-center border hover:bg-muted transition-colors"
                    >
                    <FaXTwitter className="w-5 h-5" />
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
      <Footer/>
    </div>
  )
}

