import Script from 'next/script'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
   const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Hoarding & Banner Printing in Uppal, Habsiguda, Hyderabad",
  "url": "https://brahmanigraphics.com/services/hoardings",
  "serviceType": [
    "Hoarding Printing",
    "Outdoor Advertising Printing",
    "Banner Printing",
    "Large Format Printing",
    "Vinyl Hoarding Design and Printing"
  ],
  "description": "Professional hoarding and banner printing in Uppal, Habsiguda, and Hyderabad. Brahmani Graphics delivers high-quality, weather-resistant vinyl hoardings and flex banners for outdoor advertising, events, and promotions with fast delivery and premium finishing.",
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
    "name": "Hoarding & Banner Printing Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Standard Flex Hoarding Printing",
        "priceCurrency": "INR",
        "price": "40",
        "description": "Standard 300 GSM flex material suitable for outdoor hoardings across Hyderabad."
      },
      {
        "@type": "Offer",
        "name": "Star Flex Hoarding Printing",
        "priceCurrency": "INR",
        "price": "55",
        "description": "High-quality star flex with UV protection and long durability for Uppal and Habsiguda clients."
      },
      {
        "@type": "Offer",
        "name": "Vinyl & Backlit Hoardings",
        "priceCurrency": "INR",
        "price": "65",
        "description": "Premium vinyl and backlit hoardings for commercial branding across Hyderabad."
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "80"
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
