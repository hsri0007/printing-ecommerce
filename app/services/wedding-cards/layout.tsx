import Script from 'next/script'
import React from 'react'

const layout = ({children}:{ children: React.ReactNode}) => {
   const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wedding Invitation & Card Printing in Uppal, Habsiguda, Hyderabad",
  "url": "https://brahmanigraphics.com/services/wedding-card-printing",
  "serviceType": [
    "Wedding Card Printing",
    "Invitation Card Printing",
    "Engagement Card Printing",
    "Customized Wedding Invitations"
  ],
  "description": "Elegant and customizable wedding card printing in Uppal, Habsiguda, and Hyderabad. Brahmani Graphics offers premium invitation cards with foil, emboss, matte, and glossy finishes. Perfect for weddings, engagements, and special occasions with quick turnaround and affordable pricing.",
  "provider": {
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
      "latitude": "17.4009",
      "longitude": "78.5591"
    },
    "openingHours": "Mo-Sa 09:00-20:00",
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wedding Card Printing Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Standard Wedding Cards",
        "priceCurrency": "INR",
        "price": "25",
        "description": "Classic wedding invitation cards with premium paper and elegant fonts, ideal for traditional events."
      },
      {
        "@type": "Offer",
        "name": "Luxury Foil & Emboss Cards",
        "priceCurrency": "INR",
        "price": "60",
        "description": "Gold and silver foil, embossed wedding cards with rich design options, perfect for grand celebrations."
      },
      {
        "@type": "Offer",
        "name": "Custom Designer Invitations",
        "priceCurrency": "INR",
        "price": "80",
        "description": "Fully customized wedding invitations with your theme, couple names, and unique artwork."
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "72"
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
