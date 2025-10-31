import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"
import WhatsAppButton from "@/components/whats-app"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brahmani Graphics - Professional Printing Services",
  description: "High-quality printing services for all your business and personal needs",
  openGraph: {
    title: "Brahmani Graphics | prints - Professional Printing Services",
    description: "We design logos, business cards, websites & graphics that elevate your brand presence.",
    url: "https://brahmanigraphics.com",
    siteName: "Brahmani Graphics",
    images: [
      {
        url: "https://brahmanigraphics.com/brahmani_graphics.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brahmani Graphics | prints - Professional Printing Services",
    description: "We design logos, business cards, websites & graphics that elevate your brand presence.",
    images: ["https://brahmanigraphics.com/brahmani_graphics.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
          <WhatsAppButton />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}
