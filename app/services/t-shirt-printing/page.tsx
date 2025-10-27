"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Star, Download, Package, ShoppingCart, Eye } from "lucide-react"
import Image from "next/image"

export default function TShirtPrintingPage() {
  const pricingTiers = [
    {
      quantity: "1-10 pieces",
      price: "₹250/piece",
      features: ["Digital printing", "Premium cotton", "Custom design", "Same day delivery"],
      popular: false,
    },
    {
      quantity: "11-50 pieces",
      price: "₹200/piece",
      features: ["Screen printing", "Bulk discount", "Premium materials", "Free design revision"],
      popular: true,
    },
    {
      quantity: "50+ pieces",
      price: "₹150/piece",
      features: ["Best value", "Multiple printing options", "Wholesale pricing", "Free delivery"],
      popular: false,
    },
  ]

  const templates = [
    {
      id: 1,
      name: "Corporate Team Tee",
      category: "Business",
      type: "Cotton Round Neck",
      price: 299,
      originalPrice: 349,
      image: "/placeholder.svg?height=200&width=200",
      description: "Professional corporate t-shirt design",
      features: ["Company logo placement", "Employee name option", "Premium cotton"],
      popular: true,
    },
    {
      id: 2,
      name: "Sports Team Jersey",
      category: "Sports",
      type: "Dri-Fit Sports",
      price: 399,
      originalPrice: 449,
      image: "/placeholder.svg?height=200&width=200",
      description: "Athletic team jersey with numbers",
      features: ["Player name & number", "Moisture-wicking", "Team colors"],
      popular: false,
    },
    {
      id: 3,
      name: "Event Volunteer Tee",
      category: "Events",
      type: "Cotton Round Neck",
      price: 249,
      originalPrice: 299,
      image: "/placeholder.svg?height=200&width=200",
      description: "Event volunteer identification t-shirt",
      features: ["Event branding", "Role identification", "Comfortable fit"],
      popular: false,
    },
    {
      id: 4,
      name: "Band Merchandise",
      category: "Music",
      type: "Premium Cotton",
      price: 349,
      originalPrice: 399,
      image: "/placeholder.svg?height=200&width=200",
      description: "Band merchandise t-shirt design",
      features: ["Album artwork", "Tour dates", "Premium quality"],
      popular: true,
    },
    {
      id: 5,
      name: "Gym Workout Tee",
      category: "Fitness",
      type: "Tank Top",
      price: 199,
      originalPrice: 249,
      image: "/placeholder.svg?height=200&width=200",
      description: "Motivational gym workout t-shirt",
      features: ["Motivational quotes", "Breathable fabric", "Gym branding"],
      popular: false,
    },
    {
      id: 6,
      name: "College Fest Tee",
      category: "Education",
      type: "Cotton Round Neck",
      price: 279,
      originalPrice: 329,
      image: "/placeholder.svg?height=200&width=200",
      description: "College festival commemorative t-shirt",
      features: ["College logo", "Fest theme", "Year mention"],
      popular: false,
    },
  ]

  const printingMethods = [
    {
      name: "Screen Printing",
      description: "Best for bulk orders with solid colors",
      minOrder: "25 pieces",
      durability: "Excellent",
      colors: "Up to 6 colors",
    },
    {
      name: "Digital Printing",
      description: "Perfect for detailed designs and photos",
      minOrder: "1 piece",
      durability: "Very Good",
      colors: "Full color",
    },
    {
      name: "Heat Transfer",
      description: "Great for small quantities and names",
      minOrder: "1 piece",
      durability: "Good",
      colors: "Full color",
    },
    {
      name: "Embroidery",
      description: "Premium finish for corporate wear",
      minOrder: "10 pieces",
      durability: "Excellent",
      colors: "Up to 12 colors",
    },
  ]

  const tshirtTypes = [
    { name: "Cotton Round Neck", price: "₹150", description: "100% cotton, comfortable fit" },
    { name: "Cotton Polo", price: "₹200", description: "Premium polo with collar" },
    { name: "Dri-Fit Sports", price: "₹250", description: "Moisture-wicking sports wear" },
    { name: "Premium Cotton", price: "₹180", description: "High-quality cotton blend" },
    { name: "Hoodie", price: "₹400", description: "Warm hoodie with front pocket" },
    { name: "Tank Top", price: "₹120", description: "Sleeveless summer wear" },
  ]

  const faqs = [
    {
      question: "What's the minimum order quantity?",
      answer:
        "We accept orders starting from 1 piece for digital printing. Screen printing requires a minimum of 25 pieces.",
    },
    {
      question: "How long does printing take?",
      answer: "Digital printing: Same day to 24 hours. Screen printing: 2-3 days. Embroidery: 3-5 days.",
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept AI, PSD, PDF, PNG, JPG files. High resolution (300 DPI) files work best.",
    },
    {
      question: "Do you provide design services?",
      answer: "Yes, our design team can create custom designs based on your requirements for an additional fee.",
    },
    {
      question: "What sizes are available?",
      answer: "We stock sizes from XS to 5XL. Custom sizes available on request.",
    },
  ]

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Custom T-Shirt Printing
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Premium Quality
                <span className="text-primary block">T-Shirt Printing</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Custom t-shirt printing with multiple techniques and premium materials. Perfect for events, corporate
                wear, and personal use.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm font-medium">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">1000+ Orders Completed</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Start Designing
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Download className="mr-2 h-5 w-5" />
                  Size Chart
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Custom T-Shirt Printing"
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
            <h2 className="text-3xl font-bold mb-4">Popular T-Shirt Designs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of popular designs or customize them to match your brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card key={template.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                        {template.category} • {template.type}
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
                    <Button className="flex-1">
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
              View All Designs
            </Button>
          </div>
        </div>
      </section>

      {/* Printing Methods */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Printing Methods</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Choose the best printing method for your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {printingMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{method.name}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Min Order:</span>
                    <span className="font-medium">{method.minOrder}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Durability:</span>
                    <span className="font-medium">{method.durability}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Colors:</span>
                    <span className="font-medium">{method.colors}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & T-shirt Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="pricing" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pricing">Printing Prices</TabsTrigger>
              <TabsTrigger value="tshirts">T-Shirt Types</TabsTrigger>
            </TabsList>

            <TabsContent value="pricing" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <Card key={index} className={`relative ${tier.popular ? "border-primary shadow-lg" : ""}`}>
                    {tier.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle className="text-lg">{tier.quantity}</CardTitle>
                      <div className="text-3xl font-bold text-primary">{tier.price}</div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                        Get Quote
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tshirts" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tshirtTypes.map((tshirt, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{tshirt.name}</CardTitle>
                          <CardDescription>{tshirt.description}</CardDescription>
                        </div>
                        <Badge variant="secondary">{tshirt.price}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full bg-transparent">
                        Select This Type
                      </Button>
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
              <p className="text-muted-foreground">Everything you need to know about t-shirt printing</p>
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

      {/* Testimonials Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
            <p className="text-muted-foreground">See what our customers say about our t-shirt printing</p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.8/5</span>
              <span className="text-muted-foreground">(89 reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Arjun Singh"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Arjun Singh</CardTitle>
                    <CardDescription>Cricket Team Captain</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  "Ordered 25 team jerseys with custom names and numbers. The screen printing quality is fantastic and
                  the colors haven't faded even after multiple washes. Great job!"
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Image
                    src="/placeholder.svg?height=100&width=80"
                    alt="Cricket jersey front"
                    width={80}
                    height={100}
                    className="rounded-md mx-auto"
                  />
                  <Image
                    src="/placeholder.svg?height=100&width=80"
                    alt="Cricket jersey back"
                    width={80}
                    height={100}
                    className="rounded-md mx-auto"
                  />
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    25 Jerseys Printed
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Maya Sinha"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Maya Sinha</CardTitle>
                    <CardDescription>Event Planner</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  "Needed 100 t-shirts for a corporate event with just 2 days notice. Brahmani prints delivered on time with
                  perfect quality. The digital printing looked amazing!"
                </p>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=120&width=200"
                    alt="Corporate event t-shirts"
                    width={200}
                    height={120}
                    className="rounded-md w-full"
                  />
                  <Badge className="absolute top-2 right-2 bg-blue-500">Rush Order</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-xs">
                    100 T-shirts in 48 hours
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Rohit Desai"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Rohit Desai</CardTitle>
                    <CardDescription>Startup Founder</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  "Bulk order of 200 company t-shirts. Excellent bulk pricing and the embroidery work is top-notch. Our
                  employees love the quality and comfort of the shirts."
                </p>
                <div className="flex space-x-2">
                  <Image
                    src="/placeholder.svg?height=80&width=60"
                    alt="Company t-shirt design 1"
                    width={60}
                    height={80}
                    className="rounded-md"
                  />
                  <Image
                    src="/placeholder.svg?height=80&width=60"
                    alt="Company t-shirt design 2"
                    width={60}
                    height={80}
                    className="rounded-md"
                  />
                  <Image
                    src="/placeholder.svg?height=80&width=60"
                    alt="Company t-shirt design 3"
                    width={60}
                    height={80}
                    className="rounded-md"
                  />
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    Bulk Order - 200 pieces
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Custom T-Shirts?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Upload your design or let us create one for you. Get started with your custom t-shirt order today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Upload Design
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
