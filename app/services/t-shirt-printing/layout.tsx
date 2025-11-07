import Script from 'next/script'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom T-Shirt & Apparel Printing in Uppal, Habsiguda, Hyderabad",
  "url": "https://brahmanigraphics.com/services/t-shirt-printing",
  "serviceType": [
    "T-Shirt Printing",
    "Custom Apparel Printing",
    "Screen Printing",
    "DTG Printing",
    "Heat Transfer Printing"
  ],
  "description": "Custom t-shirt and apparel printing in Uppal, Habsiguda, and Hyderabad. Brahmani Graphics offers DTG, screen, sublimation, and heat transfer printing for personalized, corporate, and event wear. Bulk and single orders accepted with premium quality and fast turnaround.",
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
    "name": "T-Shirt & Apparel Printing Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Single-Color Screen Printing",
        "priceCurrency": "INR",
        "price": "150",
        "description": "High-quality single-color screen print on cotton T-shirts, ideal for events and branding in Hyderabad."
      },
      {
        "@type": "Offer",
        "name": "Full-Color DTG Printing",
        "priceCurrency": "INR",
        "price": "350",
        "description": "Direct-to-Garment printing for vibrant full-color custom T-shirts. Fast service across Uppal and Habsiguda."
      },
      {
        "@type": "Offer",
        "name": "Heat Transfer / Vinyl Printing",
        "priceCurrency": "INR",
        "price": "250",
        "description": "Durable heat transfer or vinyl printing suitable for sportswear and uniforms in Hyderabad."
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "85"
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
