// "use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// import { CartButton } from "@/components/cart-button"
import { ArrowLeft, Home, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Printing Services in Hyderabad | Brahmani Graphics",
  description:
    "Brahmani Graphics offers professional printing services in Hyderabad – business cards, flex banners, hoardings, flyers, T-shirts, and wedding cards. Fast, affordable, and high quality.",
  keywords: [
    "printing services Hyderabad",
    "flex banner printing Uppal",
    "t-shirt printing Habsiguda",
    "business card printing Hyderabad"
  ],
  alternates: {
    canonical: "https://brahmanigraphics.com/services"
  },
  openGraph: {
    title: "Printing Services in Hyderabad | Brahmani Graphics",
    description:
      "All-in-one printing solutions in Hyderabad – flex banners, business cards, flyers, T-shirts, and more.",
    url: "https://brahmanigraphics.com/services",
    siteName: "Brahmani Graphics",
    images: [
      {
        url: "https://brahmanigraphics.com/images/printing-services.jpg",
        width: 1200,
        height: 630,
        alt: "Printing services in Hyderabad"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};


export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="flex items-center space-x-2">
                  <Home className="h-4 w-4" />
                  <span className="font-semibold">Brahmani Graphics</span>
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Phone className="h-4 w-4" />
                  <span>+91 8121146633</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="h-4 w-4" />
                  <span>info@brahmanigraphics.com</span>
                </div>
              </div>
              {/* <CartButton /> */}
            </div>
          </div>
        </div>
      </header>

      {/* Services Navigation */}
      <nav className="border-b bg-muted/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-6 overflow-x-auto">
            <Link href="/services/business-cards">
              <Badge variant="outline" className="whitespace-nowrap hover:bg-primary hover:text-primary-foreground">
                Business Cards
              </Badge>
            </Link>
            <Link href="/services/flex-printing">
              <Badge variant="outline" className="whitespace-nowrap hover:bg-primary hover:text-primary-foreground">
                Flex Printing
              </Badge>
            </Link>
            <Link href="/services/t-shirt-printing">
              <Badge variant="outline" className="whitespace-nowrap hover:bg-primary hover:text-primary-foreground">
                T-Shirt Printing
              </Badge>
            </Link>
            <Link href="/services/wedding-cards">
              <Badge variant="outline" className="whitespace-nowrap hover:bg-primary hover:text-primary-foreground">
                Wedding Cards
              </Badge>
            </Link>
            <Link href="/services/pamphlets-flyers">
              <Badge variant="outline" className="whitespace-nowrap hover:bg-primary hover:text-primary-foreground">
                Pamphlets & Flyers
              </Badge>
            </Link>
            <Link href="/services/hoardings">
              <Badge variant="outline" className="whitespace-nowrap hover:bg-primary hover:text-primary-foreground">
                Hoardings
              </Badge>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Brahmani Graphics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
