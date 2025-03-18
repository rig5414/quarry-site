import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | PrimeStone Quarry",
  description:
    "Get in touch with PrimeStone Quarry for quotes, inquiries, or any questions about our stone products and services.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Contact Us</h1>
          <p className="text-muted-foreground">Have questions or need a quote? Get in touch with our team.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-4 mb-8">
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

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Business Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday</span>
                <span>8:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Location</h2>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              {/* Replace with actual map embed */}
              <div className="w-full h-full flex items-center justify-center bg-muted">
                <p className="text-muted-foreground">Map Embed Goes Here</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-background p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

