import Head from "next/head";
import React from 'react'
import HomePage from './pages/home-page'
import Script from "next/script";

export const metadata = {
  title: "Brahmani Graphics | Printing Services Hyderabad",
  description:
    "High-quality printing services for business cards, flyers, and t-shirts in Hyderabad.",
}

const page = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Brahmani Graphics",
    "description": "Professional printing services in Hyderabad including business cards, flyers, t-shirts, and banners.",
    "image": "https://brahmanigraphics.com/logo.jpeg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1-1-54 STREET NO.1, Kakateeya Nagar, Habsiguda",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500007",
      "addressCountry": "IN"
    },
    "telephone": "+91 8121146633",
    "openingHours": "Mo-Su 00:00-23:59",
    "url": "https://brahmanigraphics.com"
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://brahmanigraphics.com",
    "name": "Brahmani Graphics",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://brahmanigraphics.com/search?query={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://brahmanigraphics.com",
    "name": "Brahmani Graphics | Printing Services Hyderabad",
    "description": "High-quality printing services for business cards, flyers, and t-shirts in Hyderabad.",
    "speakable": {
      "@type": "SpeakableSpecification",
      "xpath": [
        "/html/head/title",
        "/html/head/meta[@name='description']/@content"
      ]
    }
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Business Card Printing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Brahmani Graphics"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Hyderabad"
    },
    "description": "Full-color, high-quality business card printing with same-day delivery options."
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Brahmani Graphics",
    "url": "https://brahmanigraphics.com/#why",
    "logo": "https://brahmanigraphics.com/logo.png",
    "founder": "Srinivas Kappera",
    "sameAs": [
      "https://www.facebook.com/brahmanigraphics",
      "https://www.instagram.com/brahmanigraphics"
    ]
  }

  const servicesListSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Business Card Printing",
        "serviceType": "Business Card Printing",
        "description": "Full-color, high-quality business card printing with same-day options.",
        "url": "https://brahmanigraphics.com/services/business-cards",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Brahmani Graphics",
          "url": "https://brahmanigraphics.com"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Hyderabad"
        }
      },
      {
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
      },
      {
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
      },
      {
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
    ]
  }

  //add later
  // {
  //   "@type": "Service",
  //   "name": "Poster & Large Poster Printing",
  //   "serviceType": "Poster Printing",
  //   "description": "High-resolution poster printing in multiple sizes and finishes for events and promotions.",
  //   "provider": {
  //     "@type": "LocalBusiness",
  //     "name": "Brahmani Graphics",
  //     "url": "https://brahmanigraphics.com"
  //   },
  //   "areaServed": {
  //     "@type": "Place",
  //     "name": "Hyderabad"
  //   }
  // },
  // {
  //   "@type": "Service",
  //   "name": "Graphic Design & Prepress",
  //   "serviceType": "Graphic Design",
  //   "description": "Design, layout and prepress services to prepare print-ready artwork.",
  //   "provider": {
  //     "@type": "LocalBusiness",
  //     "name": "Brahmani Graphics",
  //     "url": "https://brahmanigraphics.com"
  //   },
  //   "areaServed": {
  //     "@type": "Place",
  //     "name": "Hyderabad"
  //   }
  // }

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": "https://brahmanigraphics.com/#contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Brahmani Graphics",
      "url": "https://brahmanigraphics.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91 8121146633",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Telugu", "Hindi"],
          "email": "info@brahmanigraphics.com"
        }
      ]
    }
  }
  // .

  return (
    <>
      <Head>
        <title>Brahmani Graphics | Printing Services Hyderabad</title>
      </Head>

      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="ld-json-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <Script
        id="ld-json-webpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <Script
        id="ld-json-webpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Script
        id="ld-json-webpage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Script
        id="ld-json-services"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />

      <Script
        id="ld-json-contact"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <main>
        <HomePage />
      </main>
    </>
  )
}

export default page
