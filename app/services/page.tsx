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

const page = () => {
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
    )
}

export default page;
