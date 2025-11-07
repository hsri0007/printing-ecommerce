import Script from 'next/script'
import React from 'react'

export const metadata = {
  title: "Business Card Printing in Hyderabad | Brahmani Graphics",
  description:
    "Premium business card printing in Hyderabad, Uppal & Habsiguda. Matte, glossy, and textured finishes with same-day delivery. Order online at Brahmani Graphics.",
  keywords: [
    "business card printing Hyderabad",
    "visiting card printing Uppal",
    "custom business cards Habsiguda",
    "corporate cards Hyderabad"
  ],
  alternates: {
    canonical: "https://brahmanigraphics.com/services/business-card-printing"
  },
  openGraph: {
    title: "Business Card Printing in Hyderabad | Brahmani Graphics",
    description:
      "Custom-designed business cards printed with premium quality and fast delivery across Hyderabad.",
    url: "https://brahmanigraphics.com/services/business-card-printing",
    siteName: "Brahmani Graphics",
    images: [
      {
        url: "https://brahmanigraphics.com/images/business-card-printing.jpg",
        width: 1200,
        height: 630,
        alt: "Business card printing Hyderabad"
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
  "name": "Business Card Printing in Uppal, Habsiguda & Hyderabad",
  "url": "https://brahmanigraphics.com/services/business-cards",
  "serviceType": [
    "Business Card Printing",
    "Visiting Card Printing",
    "Custom Business Cards",
    "Premium Business Card Design and Printing"
  ],
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
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://www.facebook.com/brahmanigraphics",
      "https://www.instagram.com/brahmanigraphics"
    ]
  },
  "areaServed": [
    { "@type": "Place", "name": "Uppal, Hyderabad" },
    { "@type": "Place", "name": "Habsiguda, Hyderabad" },
    { "@type": "Place", "name": "Hyderabad, Telangana" }
  ],
  "description": "Professional business card printing in Uppal, Habsiguda, and Hyderabad. Brahmani Graphics offers premium and custom visiting cards with matte, gloss, and textured finishes. Same-day printing and delivery available across Hyderabad.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Business Card Printing Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Standard Business Cards",
        "priceCurrency": "INR",
        "price": "8",
        "description": "350 GSM matte/gloss finish, 2-3 day delivery in Hyderabad"
      },
      {
        "@type": "Offer",
        "name": "Premium Business Cards",
        "priceCurrency": "INR",
        "price": "12",
        "description": "400 GSM premium stock with UV coating, next-day delivery for Uppal & Habsiguda"
      },
      {
        "@type": "Offer",
        "name": "Luxury Business Cards",
        "priceCurrency": "INR",
        "price": "20",
        "description": "Textured paper, foil stamping & embossing, bespoke finishes for Hyderabad businesses"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "120"
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
