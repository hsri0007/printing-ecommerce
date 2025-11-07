import Script from 'next/script'
import React from 'react'

const layout = ({children}:{ children: React.ReactNode}) => {
  const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Pamphlet & Flyer Printing in Uppal, Habsiguda, Hyderabad",
  "url": "https://brahmanigraphics.com/services/pamphlets-flyers",
  "serviceType": [
    "Pamphlet Printing",
    "Flyer Printing",
    "Leaflet Printing",
    "Brochure Printing",
    "Marketing Collateral Printing"
  ],
  "description": "Professional pamphlet and flyer printing services in Uppal, Habsiguda, and Hyderabad. Brahmani Graphics offers single and double-sided leaflets in various paper types, sizes, and finishes — perfect for promotions, events, and marketing campaigns. Fast turnaround and doorstep delivery across Hyderabad.",
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
    "name": "Pamphlet & Flyer Printing Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "A5 Single-Sided Flyers",
        "priceCurrency": "INR",
        "price": "3",
        "description": "A5 flyers printed on 130 GSM art paper — ideal for events and product promotions in Hyderabad."
      },
      {
        "@type": "Offer",
        "name": "A4 Double-Sided Pamphlets",
        "priceCurrency": "INR",
        "price": "5",
        "description": "A4 double-sided pamphlets printed on 170 GSM paper with matte or gloss finish, delivery available across Uppal & Habsiguda."
      },
      {
        "@type": "Offer",
        "name": "Custom Folded Leaflets",
        "priceCurrency": "INR",
        "price": "7",
        "description": "Tri-fold or bi-fold leaflets printed on 200 GSM paper, perfect for marketing campaigns in Hyderabad."
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "70"
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
