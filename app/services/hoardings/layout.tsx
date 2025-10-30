import Script from 'next/script'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Banner & Hoarding Printing",
        "serviceType": "Large Format Printing",
        "description": "Outdoor and indoor banners, hoardings and vinyl prints with weather‑resistant materials.",
        "url": "https://brahmanigraphics.com/services/hoardings",
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
