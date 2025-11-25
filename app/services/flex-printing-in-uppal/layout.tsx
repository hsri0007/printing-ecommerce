import Script from 'next/script'
import React from 'react'

export const metadata = {
  title: "Flex Printing in Uppal | High-Quality Flex Banners & Vinyl Prints – Brahmani Graphics",
  description:
    "Looking for flex printing in Uppal? Get high-quality flex banners, vinyl prints, shop boards, and hoardings with same-day delivery. Brahmani Graphics – trusted printing shop in Uppal & Habsiguda.",
    alternates: {
      canonical: "https://brahmanigraphics.com/services/flex-printing"
    },
    keywords: [
      "flex printing Hyderabad",
      "banner printing Uppal",
      "poster printing Habsiguda",
      "large format printing Hyderabad"
    ],
  openGraph: {
    title: "Flex & Banner Printing in Hyderabad | Brahmani Graphics",
    description:
      "Premium flex printing for outdoor and indoor promotions in Hyderabad.",
    url: "https://brahmanigraphics.com/services/flex-printing-in-uppal",
    siteName: "Brahmani Graphics",
    images: [
      {
        url: "https://brahmanigraphics.com/images/flex-printing.jpg",
        width: 1200,
        height: 630,
        alt: "Flex printing Hyderabad"
      }
    ],
    locale: "en_IN",
    type: "website"
  }
};


const layout = ({children}:{ children: React.ReactNode}) => {
 const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Flex Printing in Uppal",
  "url": "https://brahmanigraphics.com/services/flex-printing-in-uppal",
  "description": "High-quality flex printing in Uppal with same-day delivery. Flex banners, vinyl prints, hoardings, and shop boards for businesses, events, and promotions.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Brahmani Graphics",
    "image": "https://brahmanigraphics.com/logo.jpeg",
    "url": "https://brahmanigraphics.com",
    "telephone": "+91 8121146633",
    "priceRange": "₹25 - ₹5000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1-1-54 STREET NO.1, Kakateeya Nagar, Habsiguda",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500007",
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
    ]
  },
  "serviceType": [
    "Flex Printing",
    "Large Format Printing",
    "Poster Printing",
    "Banner Printing",
    "Vinyl Flex Printing"
  ],
  "areaServed": [
    { "@type": "Place", "name": "Uppal, Hyderabad" },
    { "@type": "Place", "name": "Habsiguda, Hyderabad" },
    { "@type": "Place", "name": "Hyderabad, Telangana" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Flex Printing Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Standard Flex Banner Printing",
        "priceCurrency": "INR",
        "price": "25",
        "description": "Standard flex printing on 280 GSM material, suitable for indoor/outdoor advertising in Hyderabad."
      },
      {
        "@type": "Offer",
        "name": "Star Flex Printing",
        "priceCurrency": "INR",
        "price": "35",
        "description": "High-quality star flex material with UV protection and premium color finish. Delivery available across Uppal and Habsiguda."
      },
      {
        "@type": "Offer",
        "name": "Eco-Solvent Printing",
        "priceCurrency": "INR",
        "price": "45",
        "description": "Vibrant eco-solvent prints for indoor displays, exhibitions, and retail branding in Hyderabad."
      }
    ]
  }
};

  return (
    <>
      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {children}
    </>
  )
}

export default layout
