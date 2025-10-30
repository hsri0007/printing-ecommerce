import Script from 'next/script'
import React from 'react'

const layout = ({children}:{ children: React.ReactNode}) => {
   const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Flyer & Leaflet Printing",
        "serviceType": "Flyer Printing",
        "description": "Single and double-sided flyers and leaflets in various paper stocks and finishes.",
        "url": "https://brahmanigraphics.com/services/pamphlets-flyers",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Brahmani Graphics",
          "url": "https://brahmanigraphics.com"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Hyderabad"
        }
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
