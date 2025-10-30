import Script from 'next/script'
import React from 'react'

const layout = ({children}:{ children: React.ReactNode}) => {
   const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Poster, Large Poster Printing, Large Format Flex Printing",
        "serviceType": "Poster Printing",
        "description": "High-quality flex banners for advertising, events, and promotions. Weather-resistant materials with vibrant colors that grab attention.",
         "url": "https://brahmanigraphics.com/services/services/flex-printing",
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
