"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Star, FileText, Download, Zap, Target, TrendingUp, ShoppingCart, Eye } from "lucide-react"
import Image from "next/image"
import { GetQuoteDialog } from "@/components/get-quote"

export default function PamphletsPage() {
  const pricingTiers = [
    {
      quantity: "100-500 pieces",
      price: "₹3/piece",
      features: ["Standard paper", "Single/Double sided", "Basic design", "3-4 days delivery"],
      popular: false,
    },
    {
      quantity: "500-2000 pieces",
      price: "₹2.5/piece",
      features: ["Premium paper", "Full color printing", "Professional design", "2-3 days delivery"],
      popular: true,
    },
    {
      quantity: "2000+ pieces",
      price: "₹2/piece",
      features: ["Best value", "Premium materials", "Rush delivery available", "Free design revision"],
      popular: false,
    },
  ]

  const templates = [
    {
      id: 1,
      name: "Restaurant Menu Flyer",
      category: "Food & Dining",
      format: "A4 Double Sided",
      price: 750,
      originalPrice: 900,
      image: "/placeholder.svg?height=200&width=150",
      description: "Appetizing menu flyer with food photography",
      features: ["Food photography", "Menu layout", "Contact details"],
      popular: true,
    },
    {
      id: 2,
      name: "Gym Membership Promo",
      category: "Fitness",
      format: "A5 Single Sided",
      price: 500,
      originalPrice: 600,
      image: "/placeholder.svg?height=200&width=150",
      description: "Motivational gym membership promotion",
      features: ["Fitness imagery", "Membership offers", "Contact info"],
      popular: false,
    },
    {
      id: 3,
      name: "Real Estate Listing",
      category: "Property",
      format: "A4 Single Sided",
      price: 600,
      originalPrice: 750,
      image: "/placeholder.svg?height=200&width=150",
      description: "Professional property listing flyer",
      features: ["Property photos", "Details layout", "Agent contact"],
      popular: true,
    },
    {
      id: 4,
      name: "Event Promotion",
      category: "Events",
      format: "A5 Double Sided",
      price: 650,
      originalPrice: 800,
      image: "/placeholder.svg?height=200&width=150",
      description: "Eye-catching event promotion flyer",
      features: ["Event details", "Colorful design", "RSVP information"],
      popular: false,
    },
    {
      id: 5,
      name: "Beauty Salon Services",
      category: "Beauty & Wellness",
      format: "A4 Double Sided",
      price: 700,
      originalPrice: 850,
      image: "/placeholder.svg?height=200&width=150",
      description: "Elegant beauty salon services flyer",
      features: ["Service menu", "Before/after photos", "Pricing"],
      popular: false,
    },
    {
      id: 6,
      name: "Educational Course",
      category: "Education",
      format: "A4 Single Sided",
      price: 550,
      originalPrice: 700,
      image: "/placeholder.svg?height=200&width=150",
      description: "Professional course information flyer",
      features: ["Course details", "Faculty info", "Admission process"],
      popular: true,
    },
  ]

  const paperOptions = [
    { name: "Standard Paper", weight: "80 GSM", finish: "Matte", price: "Base price" },
    { name: "Premium Paper", weight: "130 GSM", finish: "Glossy/Matte", price: "+₹0.5/piece" },
    { name: "Art Paper", weight: "170 GSM", finish: "High Gloss", price: "+₹1/piece" },
    { name: "Textured Paper", weight: "120 GSM", finish: "Linen/Canvas", price: "+₹1.5/piece" },
  ]

  const applications = [
    {
      title: "Marketing Campaigns",
      description: "Product launches, sales promotions, brand awareness",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Event Promotion",
      description: "Concerts, exhibitions, conferences, workshops",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Business Promotion",
      description: "Service offerings, company profiles, testimonials",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Educational Content",
      description: "Course information, admission details, guidelines",
      icon: <FileText className="h-6 w-6" />,
    },
  ]

  const faqs = [
    {
      question: "What's the minimum order quantity?",
      answer: "Minimum order is 100 pieces. We offer better pricing for larger quantities.",
    },
    {
      question: "Do you provide design services?",
      answer: "Yes, our design team can create professional pamphlets and flyers based on your requirements.",
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept AI, PSD, PDF, PNG, JPG files. High resolution (300 DPI) files work best for printing.",
    },
    {
      question: "How long does printing take?",
      answer: "Standard turnaround is 2-4 days. Rush orders can be completed in 24-48 hours with additional charges.",
    },
    {
      question: "Do you offer distribution services?",
      answer: "We can recommend distribution partners and bulk mailing services for your campaign needs.",
    },
  ]

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                <FileText className="h-4 w-4 mr-2" />
                Marketing Materials
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Professional
                <span className="text-primary block">Pamphlets & Flyers</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                High-impact marketing materials that get your message across effectively. Perfect for campaigns, events,
                and business promotion.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm font-medium">4.7/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-orange-600" />
                  <span className="text-sm font-medium">30+ Campaigns</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button size="lg" className="text-lg px-8">
                  Start Campaign
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Download className="mr-2 h-5 w-5" />
                  Templates
                </Button> */}
                <GetQuoteDialog title="Get Quote" variant="default" className="text-lg px-8" />
              </div>
            </div>
            <div className="relative">
              {/* <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Pamphlets and Flyers"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready-to-Use Templates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional templates for every business need - customize and order instantly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card key={template.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  {/* <Image
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    width={150}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {template.popular && <Badge className="absolute top-3 left-3">Popular</Badge>} */}
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
                        {template.category} • {template.format}
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
                    {/* <Button className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button> */}
                    <GetQuoteDialog title="Customize"  />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Templates
            </Button>
          </div> */}
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perfect For Every Campaign</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Versatile marketing materials for various business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4">
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg">{app.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{app.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Paper Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="pricing" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="paper">Paper Options</TabsTrigger>
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
                      <GetQuoteDialog className="w-full" variant={tier.popular ? "default" : "outline"} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="paper" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {paperOptions.map((paper, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{paper.name}</CardTitle>
                      <Badge variant="outline">{paper.price}</Badge>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Weight:</span>
                        <span className="font-medium">{paper.weight}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Finish:</span>
                        <span className="font-medium">{paper.finish}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Campaign Success Stories</h2>
            <p className="text-muted-foreground">See how our pamphlets helped businesses succeed</p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.7/5</span>
              <span className="text-muted-foreground">(94 reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Ravi Restaurant Owner"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Ravi's Restaurant</CardTitle>
                    <CardDescription>Food Business</CardDescription>
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
                  "Menu flyers for our new restaurant launch. The food photography came out amazing and we distributed
                  2000 pieces. Got 40% more customers in the first month!"
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Menu flyer front"
                      width={80}
                      height={80}
                      className="rounded-md mx-auto mb-1"
                    />
                    <span className="text-xs text-muted-foreground">Front</span>
                  </div>
                  <div className="text-center">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Menu flyer back"
                      width={80}
                      height={80}
                      className="rounded-md mx-auto mb-1"
                    />
                    <span className="text-xs text-muted-foreground">Back</span>
                  </div>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    2000 Flyers Distributed
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Fitness Arena Owner"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Fitness Arena</CardTitle>
                    <CardDescription>Gym & Fitness</CardDescription>
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
                  "Membership drive pamphlets with special offers. Great quality printing and the design team created an
                  attractive layout. 150 new memberships in 2 weeks!"
                </p>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=120&width=200"
                    alt="Gym membership pamphlet"
                    width={200}
                    height={120}
                    className="rounded-md w-full"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-500">Special Offer</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    150 New Members
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Elite Academy Director"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Elite Academy</CardTitle>
                    <CardDescription>Coaching Institute</CardDescription>
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
                  "Admission brochures for our coaching classes. Professional design and good paper quality. Slight
                  delay in delivery but overall satisfied with the results."
                </p>
                <Image
                  src="/placeholder.svg?height=100&width=200"
                  alt="Coaching institute brochure"
                  width={200}
                  height={100}
                  className="rounded-md w-full"
                />
                <div className="text-center">
                  <Badge variant="outline" className="text-xs">
                    Admission Brochure
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about pamphlet and flyer printing</p>
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
          <h2 className="text-3xl font-bold mb-4">Launch Your Next Campaign</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get professional pamphlets and flyers that deliver results. Start your marketing campaign today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button variant="secondary" size="lg">
              <Target className="mr-2 h-5 w-5" />
              Plan Campaign
            </Button> */}
            <GetQuoteDialog
              variant="outline"
              title="Get Free Quote"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
