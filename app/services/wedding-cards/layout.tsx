import Script from 'next/script'
import React from 'react'

const layout = ({children}:{ children: React.ReactNode}) => {
   const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Card Printing",
    "url": "https://brahmanigraphics.com/services/business-card-printing",
    "serviceType": "Business Card Printing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Brahmani Graphics",
      "url": "https://brahmanigraphics.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Hyderabad"
    },
    "description": "Full-color, high-quality business card printing with same-day delivery options."
  }
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
