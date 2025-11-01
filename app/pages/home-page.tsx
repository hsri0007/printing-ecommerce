"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Printer, Palette, Clock, Shield, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CartButton } from "@/components/cart-button"
import type { HomeData, Feature } from "@/types/home"
import HomeSkeleton from "@/components/home-skeleton"
import { GetQuoteDialog } from "@/components/get-quote"

export default function HomePage() {
  const [data, setData] = useState<HomeData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    async function load() {
      try {
        setLoading(true)
        const res = await fetch("/api/home", { cache: "no-store" })
        if (!res.ok) throw new Error("Failed to load homepage data")
        const json: HomeData = await res.json()
        if (active) setData(json)
      } catch (e: any) {
        if (active) setError(e?.message || "Something went wrong")
      } finally {
        if (active) setLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [])

  const iconMap = useMemo(
    () => ({
      printer: Printer,
      palette: Palette,
      clock: Clock,
      shield: Shield,
    }),
    [],
  )

  if (loading) {
    return <HomeSkeleton />
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6 border rounded-lg text-center space-y-3">
          <h2 className="text-xl font-semibold">Unable to load content</h2>
          <p className="text-muted-foreground">{error}</p>
          <Button onClick={() => location.reload()}>Retry</Button>
        </div>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative w-[150px] h-[40px]">
              <Image
                src="/logo.jpeg"
                alt="Brahmani Graphics logo"
                fill
                className="object-contain rounded"
                // sizes="(max-width: 768px) 2rem, 2.5rem"
                priority
              />
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="/services/business-cards" className="text-muted-foreground hover:text-foreground">
              Services
            </Link>
            <Link href="#why" className="text-muted-foreground hover:text-foreground">
              Why Us
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            {/* <CartButton /> */}
            {/* <Button asChild>
              <Link href="#quote">Get Quote</Link>
            </Button> */}
                 <GetQuoteDialog />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Professional Printing
            <span className="text-primary"> Made Simple</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From business cards to large format printing, we deliver high-quality results with fast turnaround times and
            competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <Link href="#services">
                Browse Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Printing Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide range of professional printing services, each tailored to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {service.popular && (
                    <Badge className="absolute top-4 left-4">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {service.title}
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{service.priceLabel}</span>
                    <Button asChild size="sm">
                      <Link href={service.href}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="why" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose {data.header.brand}?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with exceptional service to deliver outstanding printing results every
              time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.features.map((feature: Feature, index) => {
              const Icon = iconMap[feature.iconKey]
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Customer Reviews
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.testimonials.map((t, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-center space-x-1">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{t.content}"</p>
                  <div className="flex items-center justify-center space-x-3">
                    <Image
                      src={t.image || "/placeholder.svg"}
                      alt={t.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="text-left">
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section id="quote" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free quote today and see why thousands of customers trust {data.header.brand} for their printing
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GetQuoteDialog title="Get Free Quote" variant="secondary" />
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href={`tel:${data.contact.phone.replace(/\s/g, "")}`}>Call Us Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Printer className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">{data.header.brand}</span>
              </div>
              <p className="text-muted-foreground">
                Professional printing services for all your business and personal needs. Quality guaranteed.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Services</h3>
              <div className="space-y-2 text-sm">
                {data.services.slice(0, 4).map((svc) => (
                  <Link key={svc.id} href={svc.href} className="block text-muted-foreground hover:text-foreground">
                    {svc.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <div className="space-y-2 text-sm">
                <Link href="#why" className="block text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
                <Link href="#contact" className="block text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
                <Link href="/privacy-policy" className="block text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="block text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Contact Info</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>📞 {data.contact.phone}</div>
                <div>✉️ {data.contact.email}</div>
                <div>📍 {data.contact.address}</div>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} {data.header.brand}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
