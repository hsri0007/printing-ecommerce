"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Star, Building, Eye, Download, Zap, Award, MapPin, ShoppingCart } from "lucide-react"
import Image from "next/image"

export default function HoardingsPage() {
  const hoardingTypes = [
    {
      name: "Standard Hoardings",
      size: "10x6 to 20x10 feet",
      price: "₹80/sq ft",
      features: ["Weather resistant", "High visibility", "Professional installation", "1 year warranty"],
      popular: false,
    },
    {
      name: "Premium Hoardings",
      size: "20x10 to 40x20 feet",
      price: "₹65/sq ft",
      features: ["Premium materials", "LED backlighting option", "Custom structures", "2 year warranty"],
      popular: true,
    },
    {
      name: "Mega Hoardings",
      size: "40x20+ feet",
      price: "₹50/sq ft",
      features: ["Maximum impact", "Premium installation", "Structural engineering", "3 year warranty"],
      popular: false,
    },
  ]

  const templates = [
    {
      id: 1,
      name: "Highway Billboard",
      category: "Highway",
      size: "40x20 feet",
      price: 32000,
      originalPrice: 36000,
      image: "/placeholder.svg?height=200&width=350",
      description: "High-impact highway billboard design",
      features: ["Maximum visibility", "Weather resistant", "Professional installation"],
      popular: true,
    },
    {
      id: 2,
      name: "City Center Display",
      category: "Urban",
      size: "20x10 feet",
      price: 14000,
      originalPrice: 16000,
      image: "/placeholder.svg?height=200&width=350",
      description: "Premium city center hoarding",
      features: ["High footfall area", "LED backlighting", "Premium finish"],
      popular: false,
    },
    {
      id: 3,
      name: "Shopping Mall Hoarding",
      category: "Commercial",
      size: "30x15 feet",
      price: 27000,
      originalPrice: 30000,
      image: "/placeholder.svg?height=200&width=350",
      description: "Shopping complex hoarding display",
      features: ["Target audience", "Premium location", "High visibility"],
      popular: true,
    },
    {
      id: 4,
      name: "Residential Area Board",
      category: "Residential",
      size: "15x8 feet",
      price: 9600,
      originalPrice: 11200,
      image: "/placeholder.svg?height=200&width=350",
      description: "Local community hoarding",
      features: ["Community focus", "Local visibility", "Cost effective"],
      popular: false,
    },
    {
      id: 5,
      name: "Metro Station Display",
      category: "Transit",
      size: "25x12 feet",
      price: 18000,
      originalPrice: 21000,
      image: "/placeholder.svg?height=200&width=350",
      description: "Metro station advertising hoarding",
      features: ["Commuter audience", "High frequency", "Strategic location"],
      popular: true,
    },
    {
      id: 6,
      name: "Airport Approach",
      category: "Airport",
      size: "35x18 feet",
      price: 28350,
      originalPrice: 31500,
      image: "/placeholder.svg?height=200&width=350",
      description: "Airport approach road hoarding",
      features: ["Business travelers", "Premium audience", "High impact"],
      popular: false,
    },
  ]

  const locations = [
    {
      type: "Highway Hoardings",
      visibility: "High Speed Traffic",
      size: "40x20 feet",
      price: "₹45/sq ft",
    },
    {
      type: "City Center",
      visibility: "Heavy Footfall",
      size: "20x10 feet",
      price: "₹70/sq ft",
    },
    {
      type: "Commercial Areas",
      visibility: "Business Districts",
      size: "30x15 feet",
      price: "₹60/sq ft",
    },
    {
      type: "Residential Areas",
      visibility: "Local Community",
      size: "15x8 feet",
      price: "₹80/sq ft",
    },
  ]

  const specifications = [
    { label: "Material", value: "Premium Vinyl Flex" },
    { label: "Print Quality", value: "1440 DPI" },
    { label: "Weather Resistance", value: "5+ Years" },
    { label: "Installation", value: "Professional Team" },
    { label: "Permits", value: "We Handle All" },
    { label: "Maintenance", value: "Annual Check-up" },
  ]

  const faqs = [
    {
      question: "Do you handle permits and approvals?",
      answer: "Yes, we handle all necessary permits and approvals from local authorities for hoarding installation.",
    },
    {
      question: "What's the typical installation time?",
      answer:
        "Standard hoardings take 1-2 days to install. Large format hoardings may take 3-5 days depending on complexity.",
    },
    {
      question: "Do you provide maintenance services?",
      answer: "Yes, we offer annual maintenance packages including cleaning, minor repairs, and structural checks.",
    },
    {
      question: "Can you help with location selection?",
      answer: "We can recommend high-visibility locations based on your target audience and budget.",
    },
    {
      question: "What happens during bad weather?",
      answer:
        "Our hoardings are designed to withstand harsh weather. We also provide emergency repair services if needed.",
    },
  ]

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                <Building className="h-4 w-4 mr-2" />
                Large Format Advertising
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                High-Impact
                <span className="text-primary block">Hoarding Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Maximize your brand visibility with our premium hoarding solutions. From design to installation, we
                handle everything for maximum impact.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm font-medium">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">10+ Daily Impressions</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find Locations
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Download className="mr-2 h-5 w-5" />
                  Location Map
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Hoarding Advertising"
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
            <h2 className="text-3xl font-bold mb-4">Premium Location Templates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our prime hoarding locations with ready-to-install packages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card key={template.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {template.popular && <Badge className="absolute top-3 left-3">Popular</Badge>}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary">
                      <Eye className="h-4 w-4 mr-1" />
                      View Location
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <CardDescription>
                        {template.category} • {template.size}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">₹{template.price.toLocaleString()}</div>
                      {template.originalPrice > template.price && (
                        <div className="text-sm text-muted-foreground line-through">
                          ₹{template.originalPrice.toLocaleString()}
                        </div>
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
                      Book Location
                    </Button>
                    <Button variant="outline" size="sm">
                      Site Visit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Locations
            </Button>
          </div>
        </div>
      </section>

      {/* Hoarding Types */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hoarding Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the right hoarding size and type for maximum brand impact
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {hoardingTypes.map((type, index) => (
              <Card key={index} className={`relative ${type.popular ? "border-primary shadow-lg" : ""}`}>
                {type.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                  <div className="text-sm text-muted-foreground mb-2">{type.size}</div>
                  <div className="text-3xl font-bold text-primary">{type.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full" variant={type.popular ? "default" : "outline"}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="locations" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="locations">Prime Locations</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
            </TabsList>

            <TabsContent value="locations" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {locations.map((location, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{location.type}</CardTitle>
                      <Badge variant="secondary">{location.price}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Visibility:</span>
                        <span className="font-medium">{location.visibility}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Typical Size:</span>
                        <span className="font-medium">{location.size}</span>
                      </div>
                      <Button variant="outline" className="w-full mt-4 bg-transparent">
                        View Locations
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="specs" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                  <CardDescription>Detailed specifications for our hoarding solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b">
                        <span className="font-medium">{spec.label}</span>
                        <span className="text-muted-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground">From concept to installation, we handle everything</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Location Survey</h3>
              <p className="text-muted-foreground">Site visit and location analysis for optimal placement</p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Permit Processing</h3>
              <p className="text-muted-foreground">Handle all legal requirements and approvals</p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Production</h3>
              <p className="text-muted-foreground">High-quality printing and fabrication</p>
            </div>
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Building className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Installation</h3>
              <p className="text-muted-foreground">Professional installation by certified team</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about hoarding advertising</p>
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
      {/* <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-muted-foreground">See how our hoardings helped businesses grow</p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.8/5</span>
              <span className="text-muted-foreground">(73 reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Rajesh Motors Owner"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Rajesh Motors</CardTitle>
                    <CardDescription>Car Dealership</CardDescription>
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
                  "Our highway hoarding has been a game-changer! 40x20 feet of premium visibility brought 30% more
                  customers. Brahmani Graphics handled permits, installation - everything professionally."
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center">
                    <Image
                      src="/placeholder.svg?height=80&width=120"
                      alt="Highway location before"
                      width={120}
                      height={80}
                      className="rounded-md mx-auto mb-1"
                    />
                    <span className="text-xs text-muted-foreground">Before</span>
                  </div>
                  <div className="text-center">
                    <Image
                      src="/placeholder.svg?height=80&width=120"
                      alt="Highway hoarding installed"
                      width={120}
                      height={80}
                      className="rounded-md mx-auto mb-1"
                    />
                    <span className="text-xs text-muted-foreground">After</span>
                  </div>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    40x20 ft Highway Hoarding
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Sharma Builders Representative"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Sharma Builders</CardTitle>
                    <CardDescription>Real Estate</CardDescription>
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
                  "Multiple hoardings across the city for our new project launch. Excellent quality materials that
                  withstand monsoons. Great ROI - sold 60% units within 3 months!"
                </p>
                <div className="flex space-x-2">
                  <Image
                    src="/placeholder.svg?height=60&width=80"
                    alt="Hoarding location 1"
                    width={80}
                    height={60}
                    className="rounded-md"
                  />
                  <Image
                    src="/placeholder.svg?height=60&width=80"
                    alt="Hoarding location 2"
                    width={80}
                    height={60}
                    className="rounded-md"
                  />
                  <div className="flex items-center justify-center w-20 h-15 bg-muted rounded-md">
                    <span className="text-xs text-muted-foreground">+3 more</span>
                  </div>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    Multiple City Locations
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="FoodZone Manager"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">FoodZone Restaurant</CardTitle>
                    <CardDescription>Restaurant Chain</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-4 w-4 text-gray-300" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  "City center hoardings for our new outlet launch. Great visibility and foot traffic increased
                  significantly. Installation took longer than expected but quality is good."
                </p>
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Restaurant hoarding in city center"
                  width={200}
                  height={100}
                  className="rounded-md w-full"
                />
                <div className="text-center">
                  <Badge variant="outline" className="text-xs">
                    City Center Location
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
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate the Skyline?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get maximum visibility for your brand with our premium hoarding solutions. Contact us for a free
            consultation and site survey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <MapPin className="mr-2 h-5 w-5" />
              Schedule Site Visit
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Get Location Map
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
