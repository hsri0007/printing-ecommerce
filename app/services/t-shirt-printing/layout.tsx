import Script from 'next/script'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "T-Shirt & Apparel Printing",
        "serviceType": "Apparel Printing",
        "description": "Custom t-shirt printing (DTG, screen print, heat transfer) for small and bulk orders.",
        "url": "https://brahmanigraphics.com/services/t-shirt-printing",
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
