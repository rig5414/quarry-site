"use client"

import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappButton() {
  // Phone number with country code
  const phoneNumber = "254721964647" // Replace with actual number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%2C%20I'm%20interested%20in%20your%20products.`

  return (
    <div className="fixed bottom-16 right-6 z-50">
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg animate-pulse-slow"
        onClick={() => window.open(whatsappUrl, "_blank")}
      >
        <FaWhatsapp className="h-7 w-7 text-white" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </Button>
    </div>
  )
}

