import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"
import WhatsAppButton from "@/components/whats-app"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brahmani Graphics | Printing Services in Hyderabad | Brahmani Graphics – Uppal • Habsiguda • Tarnaka",
  description: "Brahmani Graphics offers premium printing services in Hyderabad, Uppal, Habsiguda – business cards, flex banners, hoardings, flyers, T-shirts and wedding cards. Fast delivery, local & professional.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Brahmani Graphics | Printing Services in Hyderabad | Brahmani Graphics – Uppal • Habsiguda • Tarnaka",
    description: "Brahmani Graphics offers premium printing services in Hyderabad, Uppal, Habsiguda – business cards, flex banners, hoardings, flyers, T-shirts and wedding cards. Fast delivery, local & professional.",
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
       <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NHR3V4GZJP"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NHR3V4GZJP');
          `}
        </Script>
      </head> 
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
