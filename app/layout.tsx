import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { Cherry_Cream_Soda, Ultra, Besley, Alfa_Slab_One, Luckiest_Guy } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import WhatsappButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

// Define all the fonts
const cherryCreamSoda = Cherry_Cream_Soda({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-cherry-cream-soda',
})

const ultra = Ultra({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-ultra',
})

const besley = Besley({ 
  subsets: ["latin"],
  variable: '--font-besley',
})

const alfaSlabOne = Alfa_Slab_One({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-alfa-slab-one',
})

const luckiestGuy = Luckiest_Guy({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-luckiest-guy',
})

export const metadata: Metadata = {
  title: {
    default: "Londiani Building Stones | Quality Stone Products",
    template: "%s | Londiani Building Stones",
  },
  description:
    "Londiani Building Stones provides premium quality natural stones, ballast, and construction materials for all your building needs.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`
        ${cherryCreamSoda.variable} 
        ${ultra.variable} 
        ${besley.variable} 
        ${alfaSlabOne.variable} 
        ${luckiestGuy.variable}
      `}
    >
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <WhatsappButton />
          <Toaster />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}