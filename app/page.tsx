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

      <main>
        <HomePage />
      </main>
    </>
  )
}

export default page
