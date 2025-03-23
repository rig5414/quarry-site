import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"
import NavHeader from "@/components/nav-header"
import Link from "next/link"
import type { Metadata } from "next"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us | Londiani Building Stones",
  description:
    "Get in touch with Londiani Building Stones for quotes, inquiries, or any questions about our stone products and services.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavHeader />

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
                  <p className="font-medium">+254 721 964 647</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">info@lbs.co.ke</p>
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

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Business Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Follow Us</h2>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com/londianibuildingstones"
                  target="_blank"
                  className="h-10 w-10 rounded-full bg-background flex items-center justify-center border hover:bg-muted transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-background flex items-center justify-center border hover:bg-muted transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="h-10 w-10 rounded-full bg-background flex items-center justify-center border hover:bg-muted transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div>
             <h2 className="text-xl font-bold mb-4">Location</h2>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                {/* Replace with actual map embed for Londiani Town */}
                <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.54011270278!2d35.63220459999999!3d0.1873105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a4729f8c47141%3A0x6330101e4a819c43!2sLondiani%2C%20Kericho%20County%2C%20Kenya!5e0!3m2!1sen!2ske!4v1709197022216!5m2!1sen!2ske"
                 width="100%"
                 height="100%"
                 className="border-0"
                 allowFullScreen={false}
                 title="Londiani Town, Kericho County, Kenya"
                ></iframe>
               </div>
            </div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

