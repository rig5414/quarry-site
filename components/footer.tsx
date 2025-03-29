import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-quarry-accent2 text-white py-12 mt-auto">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Londiani Building Stones</h3>
            <p className="text-muted/80 mb-4">
              Your trusted partner for high-quality construction materials since 2005.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com/londianibuildingstones"
                target="_blank"
                className="text-white/80 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/80 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-white/80 hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-white/80 hover:text-white">
                  Building Stones
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white">
                  Ballast
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white">
                  Hardcore
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white">
                  Machine Cut Stones
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white">
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
                <span className="text-white/80">Londiani, Kericho County, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-white/80">+254 721 964 647</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <span className="text-white/80">info@lbs.co.ke</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground text-black">
            &copy; {new Date().getFullYear()} Londiani Building Stones. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

