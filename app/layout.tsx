import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"
import WhatsAppButton from "@/components/whats-app"
import Script from "next/script"
import FestivalBanner from "@/components/FestivalBanner"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brahmani Graphics | Printing Services in Hyderabad | Brahmani Graphics – Uppal • Habsiguda • Tarnaka",
  description: "Brahmani Graphics offers premium printing services in Hyderabad, Uppal, Habsiguda – business cards, flex banners, hoardings, flyers, T-shirts and wedding cards. Fast delivery, local & professional.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
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

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Brahmani Graphics",
  "description": "Professional printing services in Hyderabad including business cards, flyers, t-shirts, and banners.",
  "image": "https://brahmanigraphics.com/logo.jpeg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1-1-54 STREET NO.1, Kakateeya Nagar, Habsiguda",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500007",
    "addressCountry": "IN"
  },
  "telephone": "+91 8121146633",
  "openingHours": "Mo-Su 00:00-23:59",
  "url": "https://brahmanigraphics.com"
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://brahmanigraphics.com",
  "name": "Brahmani Graphics",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://brahmanigraphics.com/search?query={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "url": "https://brahmanigraphics.com",
  "name": "Brahmani Graphics | Printing Services Hyderabad",
  "description": "High-quality printing services for business cards, flyers, and t-shirts in Hyderabad.",
  "speakable": {
    "@type": "SpeakableSpecification",
    "xpath": [
      "/html/head/title",
      "/html/head/meta[@name='description']/@content"
    ]
  }
}

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Brahmani Graphics",
  "image": "https://brahmanigraphics.com/logo.jpeg",
  "url": "https://brahmanigraphics.com",
  "telephone": "+91 8121146633",
  "priceRange": "₹25 - ₹5000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Uppal Main Road, Near Metro Station",
    "addressLocality": "Uppal",
    "addressRegion": "Telangana",
    "postalCode": "500039",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "17.41853619239367",
    "longitude": "78.54074002698685"
  },
  "openingHours": "Mo-Sa 09:00-20:00",
  "sameAs": [
    "https://www.facebook.com/brahmanigraphics",
    "https://www.instagram.com/brahmanigraphics"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "120"
  },
  "areaServed": [
    { "@type": "Place", "name": "Uppal, Hyderabad" },
    { "@type": "Place", "name": "Habsiguda, Hyderabad" },
    { "@type": "Place", "name": "Hyderabad, Telangana" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Printing Services Offered by Brahmani Graphics",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Business Card Printing",
        "url": "https://brahmanigraphics.com/services/business-card-printing",
        "serviceType": "Business Card Printing",
        "description": "Full-color, premium business card printing with matte, glossy, and texture finishes. Same-day printing in Hyderabad."
      },
      {
        "@type": "Service",
        "name": "Flex & Banner Printing",
        "url": "https://brahmanigraphics.com/services/flex-printing",
        "serviceType": "Flex Printing",
        "description": "Weather-resistant flex banners and posters for outdoor advertising, events, and promotions."
      },
      {
        "@type": "Service",
        "name": "Hoarding & Large Format Printing",
        "url": "https://brahmanigraphics.com/services/hoardings",
        "serviceType": "Large Format Printing",
        "description": "High-quality hoardings and vinyl prints for outdoor visibility and brand promotion."
      },
      {
        "@type": "Service",
        "name": "Pamphlet & Flyer Printing",
        "url": "https://brahmanigraphics.com/services/pamphlets-flyers",
        "serviceType": "Flyer Printing",
        "description": "Custom flyers and leaflets in multiple paper stocks and finishes. Affordable bulk printing for marketing campaigns."
      },
      {
        "@type": "Service",
        "name": "T-Shirt & Apparel Printing",
        "url": "https://brahmanigraphics.com/services/t-shirt-printing",
        "serviceType": "Apparel Printing",
        "description": "DTG, screen, and heat transfer t-shirt printing for events, corporate wear, and custom designs."
      },
      {
        "@type": "Service",
        "name": "Wedding Card Printing",
        "url": "https://brahmanigraphics.com/services/wedding-card-printing",
        "serviceType": "Wedding Invitation Printing",
        "description": "Elegant, customized wedding and invitation cards with foil, emboss, and matte finishes for every occasion."
      }
    ]
  }
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brahmani Graphics",
  "url": "https://brahmanigraphics.com/#why",
  "logo": "https://brahmanigraphics.com/logo.png",
  "founder": "Srinivas Kappera",
  "sameAs": [
    "https://www.facebook.com/brahmanigraphics",
    "https://www.instagram.com/brahmanigraphics"
  ]
}

const servicesListSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Business Card Printing",
      "serviceType": "Business Card Printing",
      "description": "Full-color, high-quality business card printing with same-day options.",
      "url": "https://brahmanigraphics.com/services/business-cards",
      "provider": {
       "@type": "LocalBusiness",
  "name": "Brahmani Graphics",
  "description": "Professional printing services in Hyderabad including business cards, flyers, t-shirts, and banners.",
  "image": "https://brahmanigraphics.com/logo.jpeg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1-1-54 STREET NO.1, Kakateeya Nagar, Habsiguda",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500007",
    "addressCountry": "IN"
  },
  "telephone": "+91 8121146633",
  "openingHours": "Mo-Su 00:00-23:59",
  "url": "https://brahmanigraphics.com"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Hyderabad"
      }
    },
    {
      "@type": "Service",
      "name": "Flyer & Leaflet Printing",
      "serviceType": "Flyer Printing",
      "description": "Single and double-sided flyers and leaflets in various paper stocks and finishes.",
      "url": "https://brahmanigraphics.com/services/pamphlets-flyers",
      "provider": {
       "@type": "LocalBusiness",
  "name": "Brahmani Graphics",
  "description": "Professional printing services in Hyderabad including business cards, flyers, t-shirts, and banners.",
  "image": "https://brahmanigraphics.com/logo.jpeg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1-1-54 STREET NO.1, Kakateeya Nagar, Habsiguda",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500007",
    "addressCountry": "IN"
  },
  "telephone": "+91 8121146633",
  "openingHours": "Mo-Su 00:00-23:59",
  "url": "https://brahmanigraphics.com"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Hyderabad"
      }
    },
    {
      "@type": "Service",
      "name": "T-Shirt & Apparel Printing",
      "serviceType": "Apparel Printing",
      "description": "Custom t-shirt printing (DTG, screen print, heat transfer) for small and bulk orders.",
      "url": "https://brahmanigraphics.com/services/t-shirt-printing",
      "provider": {
     "@type": "LocalBusiness",
  "name": "Brahmani Graphics",
  "description": "Professional printing services in Hyderabad including business cards, flyers, t-shirts, and banners.",
  "image": "https://brahmanigraphics.com/logo.jpeg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1-1-54 STREET NO.1, Kakateeya Nagar, Habsiguda",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500007",
    "addressCountry": "IN"
  },
  "telephone": "+91 8121146633",
  "openingHours": "Mo-Su 00:00-23:59",
  "url": "https://brahmanigraphics.com"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Hyderabad"
      }
    },
    {
      "@type": "Service",
      "name": "Banner & Hoarding Printing",
      "serviceType": "Large Format Printing",
      "description": "Outdoor and indoor banners, hoardings and vinyl prints with weather‑resistant materials.",
      "url": "https://brahmanigraphics.com/services/hoardings",
      "provider": {
       "@type": "LocalBusiness",
  "name": "Brahmani Graphics",
  "description": "Professional printing services in Hyderabad including business cards, flyers, t-shirts, and banners.",
  "image": "https://brahmanigraphics.com/logo.jpeg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1-1-54 STREET NO.1, Kakateeya Nagar, Habsiguda",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500007",
    "addressCountry": "IN"
  },
  "telephone": "+91 8121146633",
  "openingHours": "Mo-Su 00:00-23:59",
  "url": "https://brahmanigraphics.com"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Hyderabad"
      }
    },
    {
      "@type": "Service",
      "name": "Poster, Large Poster Printing, Large Format Flex Printing",
      "serviceType": "Poster Printing",
      "description": "High-quality flex banners for advertising, events, and promotions. Weather-resistant materials with vibrant colors that grab attention.",
      "url": "https://brahmanigraphics.com/services/services/flex-printing",
      "provider": {
      "@type": "LocalBusiness",
  "name": "Brahmani Graphics",
  "description": "Professional printing services in Hyderabad including business cards, flyers, t-shirts, and banners.",
  "image": "https://brahmanigraphics.com/logo.jpeg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1-1-54 STREET NO.1, Kakateeya Nagar, Habsiguda",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500007",
    "addressCountry": "IN"
  },
  "telephone": "+91 8121146633",
  "openingHours": "Mo-Su 00:00-23:59",
  "url": "https://brahmanigraphics.com"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Hyderabad"
      }
    }
  ]
}

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://brahmanigraphics.com/#contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Brahmani Graphics",
    "url": "https://brahmanigraphics.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 8121146633",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Telugu", "Hindi"],
        "email": "info@brahmanigraphics.com"
      }
    ]
  }
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
          id="ld-json"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <Script
          id="ld-json-webpage"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
        <Script
          id="ld-json-webpage"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <Script
          id="ld-json-webpage"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <Script
          id="ld-json-services"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
        />

        <Script
          id="ld-json-contact"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        />
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
        <FestivalBanner />
        <CartProvider>
          {children}
          <WhatsAppButton />
          <CartSidebar />
        </CartProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
