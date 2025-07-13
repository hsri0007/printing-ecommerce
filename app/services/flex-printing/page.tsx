"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useCart } from "@/contexts/cart-context"
import {
  CheckCircle,
  Star,
  Palette,
  Download,
  Building,
  Store,
  Calendar,
  Megaphone,
  ShoppingCart,
  Eye,
} from "lucide-react"
import Image from "next/image"

export default function FlexPrintingPage() {
  const { dispatch } = useCart()

  const flexTypes = [
    {
      name: "Standard Flex",
      price: "₹45/sq ft",
      features: ["440 GSM vinyl", "Outdoor durability", "Vibrant colors", "2-3 days delivery"],
      popular: false,
    },
    {
      name: "Premium Flex",
      price: "₹65/sq ft",
      features: ["520 GSM premium vinyl", "UV resistant", "Laminated finish", "Same day delivery"],
      popular: true,
    },
    {
      name: "Backlit Flex",
      price: "₹85/sq ft",
      features: ["Translucent material", "LED compatible", "High brightness", "Professional finish"],
      popular: false,
    },
  ]

  const templates = [
    {
      id: "flex-restaurant-banner",
      name: "Restaurant Banner",
      category: "Flex Printing",
      style: "Food & Beverage",
      price: 450,
      originalPrice: 600,
      image: "/placeholder.svg?height=150&width=240",
      description: "Appetizing restaurant banner design",
      features: ["Food photography", "Menu highlights", "Contact details"],
      popular: true,
    },
    {
      id: "flex-real-estate-banner",
      name: "Real Estate Banner",
      category: "Flex Printing",
      style: "Property",
      price: 520,
      originalPrice: 680,
      image: "/placeholder.svg?height=150&width=240",
      description: "Professional property advertisement banner",
      features: ["Property images", "Contact info", "Professional layout"],
      popular: false,
    },
    {
      id: "flex-event-promotion",
      name: "Event Promotion",
      category: "Flex Printing",
      style: "Events",
      price: 380,
      originalPrice: 500,
      image: "/placeholder.svg?height=150&width=240",
      description: "Eye-catching event promotion banner",
      features: ["Event details", "Vibrant design", "Call-to-action"],
      popular: true,
    },
    {
      id: "flex-business-opening",
      name: "Business Opening",
      category: "Flex Printing",
      style: "Grand Opening",
      price: 420,
      originalPrice: 550,
      image: "/placeholder.svg?height=150&width=240",
      description: "Grand opening celebration banner",
      features: ["Opening details", "Festive design", "Brand colors"],
      popular: false,
    },
    {
      id: "flex-sale-promotion",
      name: "Sale Promotion",
      category: "Flex Printing",
      style: "Retail",
      price: 350,
      originalPrice: 450,
      image: "/placeholder.svg?height=150&width=240",
      description: "Attractive sale promotion banner",
      features: ["Discount highlights", "Product images", "Urgency elements"],
      popular: true,
    },
    {
      id: "flex-service-advertisement",
      name: "Service Advertisement",
      category: "Flex Printing",
      style: "Services",
      price: 480,
      originalPrice: 620,
      image: "/placeholder.svg?height=150&width=240",
      description: "Professional service advertisement",
      features: ["Service details", "Professional look", "Contact emphasis"],
      popular: false,
    },
  ]

  const applications = [
    {
      name: "Retail Stores",
      description: "Eye-catching banners for product promotions and sales",
      icon: <Store className="h-6 w-6" />,
    },
    {
      name: "Corporate Events",
      description: "Professional banners for conferences and meetings",
      icon: <Building className="h-6 w-6" />,
    },
    {
      name: "Festivals & Events",
      description: "Vibrant displays for celebrations and gatherings",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      name: "Advertising",
      description: "Large format advertising for maximum visibility",
      icon: <Megaphone className="h-6 w-6" />,
    },
  ]

  const faqs = [
    {
      question: "What sizes are available for flex printing?",
      answer:
        "We offer custom sizes from 2x3 feet to 20x40 feet. Standard sizes include 4x6, 6x8, 8x12, and 10x15 feet.",
    },
    {
      question: "How long does flex printing take?",
      answer:
        "Standard flex: 2-3 days. Premium and backlit flex: 3-4 days. Rush orders available for same-day delivery.",
    },
    {
      question: "Is the flex material weather-resistant?",
      answer: "Yes, our flex materials are UV-resistant and waterproof, suitable for both indoor and outdoor use.",
    },
    {
      question: "Do you provide installation services?",
      answer:
        "Yes, we offer professional installation services for an additional charge. Our team handles mounting and setup.",
    },
    {
      question: "What file format should I provide?",
      answer: "High-resolution PDF, AI, or PSD files work best. Minimum 150 DPI for large format printing.",
    },
  ]

  const addToCart = (template: (typeof templates)[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: template.id,
        name: template.name,
        price: template.price,
        originalPrice: template.originalPrice,
        image: template.image,
        category: template.category,
      },
    })
  }

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                <Palette className="h-4 w-4 mr-2" />
                Professional Flex Printing
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Large Format
                <span className="text-primary block">Flex Printing</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                High-quality flex banners for advertising, events, and promotions. Weather-resistant materials with
                vibrant colors that grab attention.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm font-medium">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">2000+ Banners Printed</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Design Your Banner
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Download className="mr-2 h-5 w-5" />
                  Size Guide
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Flex Printing"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Banner Templates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of professionally designed flex banner templates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card key={template.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    width={240}
                    height={150}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {template.popular && <Badge className="absolute top-3 left-3">Popular</Badge>}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <CardDescription>
                        {template.category} • {template.style}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">₹{template.price}</div>
                      {template.originalPrice > template.price && (
                        <div className="text-sm text-muted-foreground line-through">₹{template.originalPrice}</div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                  <div className="space-y-2">
                    {template.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1" onClick={() => addToCart(template)}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm">
                      Customize
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Templates
            </Button>
          </div>
        </div>
      </section>

      {/* Flex Types */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Flex Type</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Different materials for different needs and budgets
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {flexTypes.map((type, index) => (
              <Card key={index} className={`relative ${type.popular ? "border-primary shadow-lg" : ""}`}>
                {type.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{type.price}</div>
                  <div className="text-sm text-muted-foreground">Per square foot</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full" variant={type.popular ? "default" : "outline"}>
                    Choose This Type
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="applications" className="w-full">
            <TabsList className="grid w-full grid-cols-1">
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>

            <TabsContent value="applications" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {applications.map((app, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                        {app.icon}
                      </div>
                      <CardTitle className="text-lg">{app.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{app.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about flex printing</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Banner?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get high-quality flex banners that make your message stand out. Professional printing with fast delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Palette className="mr-2 h-5 w-5" />
              Start Design
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
