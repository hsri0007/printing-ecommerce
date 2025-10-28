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
  CreditCard,
  Download,
  Briefcase,
  Users,
  Award,
  Sparkles,
  ShoppingCart,
  Eye,
} from "lucide-react"
import Image from "next/image"

export default function BusinessCardsPage() {
  const { dispatch } = useCart()

  const cardTypes = [
    {
      name: "Standard Cards",
      price: "₹8/piece",
      features: ["350 GSM cardstock", "Matte/Glossy finish", "Standard size", "2-3 days delivery"],
      popular: false,
    },
    {
      name: "Premium Cards",
      price: "₹12/piece",
      features: ["400 GSM premium stock", "UV coating", "Rounded corners", "Same day delivery"],
      popular: true,
    },
    {
      name: "Luxury Cards",
      price: "₹20/piece",
      features: ["Textured paper", "Foil stamping", "Embossing", "Unique finishes"],
      popular: false,
    },
  ]

  const templates = [
    {
      id: "bc-corporate-executive",
      name: "Corporate Executive",
      category: "Business Cards",
      style: "Professional",
      price: 12,
      originalPrice: 15,
      image: "/placeholder.svg?height=150&width=240",
      description: "Clean professional design for executives",
      features: ["Premium cardstock", "UV coating", "Corporate colors"],
      popular: true,
    },
    {
      id: "bc-creative-designer",
      name: "Creative Designer",
      category: "Business Cards",
      style: "Artistic",
      price: 18,
      originalPrice: 22,
      image: "/placeholder.svg?height=150&width=240",
      description: "Unique design for creative professionals",
      features: ["Textured paper", "Creative layout", "Color gradients"],
      popular: false,
    },
    {
      id: "bc-medical-professional",
      name: "Medical Professional",
      category: "Business Cards",
      style: "Clean & Trust",
      price: 14,
      originalPrice: 18,
      image: "/placeholder.svg?height=150&width=240",
      description: "Professional healthcare business card",
      features: ["Medical symbols", "Clean design", "Trust colors"],
      popular: false,
    },
    {
      id: "bc-real-estate-agent",
      name: "Real Estate Agent",
      category: "Business Cards",
      style: "Property Focus",
      price: 16,
      originalPrice: 20,
      image: "/placeholder.svg?height=150&width=240",
      description: "Property-focused business card design",
      features: ["Property imagery", "Contact emphasis", "Professional look"],
      popular: true,
    },
    {
      id: "bc-restaurant-owner",
      name: "Restaurant Owner",
      category: "Business Cards",
      style: "Appetizing",
      price: 15,
      originalPrice: 19,
      image: "/placeholder.svg?height=150&width=240",
      description: "Food business card with appetizing design",
      features: ["Food imagery", "Warm colors", "Menu highlights"],
      popular: false,
    },
    {
      id: "bc-tech-startup",
      name: "Tech Startup",
      category: "Business Cards",
      style: "Modern Tech",
      price: 20,
      originalPrice: 25,
      image: "/placeholder.svg?height=150&width=240",
      description: "Modern tech-focused business card",
      features: ["Tech elements", "Modern fonts", "Digital feel"],
      popular: true,
    },
  ]

  const finishOptions = [
    { name: "Matte Finish", description: "Elegant, non-reflective surface", price: "Base price" },
    { name: "Glossy Finish", description: "Shiny, vibrant colors", price: "Base price" },
    { name: "UV Coating", description: "High-gloss protective coating", price: "+₹2/piece" },
    { name: "Foil Stamping", description: "Metallic gold/silver accents", price: "+₹5/piece" },
  ]

  const industries = [
    {
      name: "Corporate",
      description: "Professional cards for executives and employees",
      icon: <Briefcase className="h-6 w-6" />,
    },
    {
      name: "Creative",
      description: "Unique designs for artists and designers",
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      name: "Healthcare",
      description: "Clean, trustworthy designs for medical professionals",
      icon: <Award className="h-6 w-6" />,
    },
    {
      name: "Services",
      description: "Eye-catching cards for service providers",
      icon: <Users className="h-6 w-6" />,
    },
  ]

  const faqs = [
    {
      question: "What's the minimum order quantity?",
      answer: "Minimum order is 100 pieces. We offer better pricing for quantities of 500+ pieces.",
    },
    {
      question: "What information should I include?",
      answer: "Typically: Name, title, company, phone, email, website, and address. We can help optimize the layout.",
    },
    {
      question: "Do you provide design services?",
      answer: "Yes, our designers can create professional business card designs based on your brand and preferences.",
    },
    {
      question: "How long does printing take?",
      answer: "Standard cards: 2-3 days. Premium cards with special finishes: 3-5 days. Rush orders available.",
    },
    {
      question: "What file format should I provide?",
      answer: "AI, PSD, PDF files work best. We also accept high-resolution PNG/JPG files (300 DPI minimum).",
    },
  ]

  const addToCart = (template: (typeof templates)[0]) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: template.id,
        name: template.name,
        price: template.price,
        quantity: 1,
        image: template.image,
        category: template.category,
      },
    })
  }

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                <CreditCard className="h-4 w-4 mr-2" />
                Professional Business Cards
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Make a Lasting
                <span className="text-primary block">First Impression</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Premium business cards that represent your brand professionally. From standard to luxury finishes, we
                create cards that get you noticed.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">10,000+ Cards Printed</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Design Your Card
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Download className="mr-2 h-5 w-5" />
                  Templates
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Business Cards"
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
            <h2 className="text-3xl font-bold mb-4">Professional Templates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of industry-specific business card templates
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
                      <div className="text-lg font-bold text-primary">₹{template.price.toString()}</div>
                      {template.originalPrice && template.originalPrice > template.price && (
                        <div className="text-sm text-muted-foreground line-through">
                          ₹{template.originalPrice.toString()}
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
                    {/* <Button className="flex-1" onClick={() => addToCart(template)}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button> */}
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

      {/* Card Types */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Card Type</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From standard to luxury, we have options for every budget and style
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cardTypes.map((type, index) => (
              <Card key={index} className={`relative ${type.popular ? "border-primary shadow-lg" : ""}`}>
                {type.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{type.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{type.price}</div>
                  <div className="text-sm text-muted-foreground">Minimum 100 pieces</div>
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

      {/* Industries & Finishes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="industries" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="industries">Industries</TabsTrigger>
              <TabsTrigger value="finishes">Finish Options</TabsTrigger>
            </TabsList>

            <TabsContent value="industries" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {industries.map((industry, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                        {industry.icon}
                      </div>
                      <CardTitle className="text-lg">{industry.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{industry.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="finishes" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {finishOptions.map((finish, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{finish.name}</CardTitle>
                      <Badge variant="outline">{finish.price}</Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{finish.description}</CardDescription>
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
            <h2 className="text-3xl font-bold mb-4">Professional Success Stories</h2>
            <p className="text-muted-foreground">See how our business cards helped professionals network better</p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5</span>
              <span className="text-muted-foreground">(112 reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Ankit Sharma"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Ankit Sharma</CardTitle>
                    <CardDescription>Financial Advisor</CardDescription>
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
                  "Premium business cards with UV coating look absolutely professional. The quality impressed my clients
                  and I've received more referrals since using these cards!"
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center">
                    <Image
                      src="/placeholder.svg?height=60&width=90"
                      alt="Business card front"
                      width={90}
                      height={60}
                      className="rounded-md mx-auto mb-1"
                    />
                    <span className="text-xs text-muted-foreground">Front</span>
                  </div>
                  <div className="text-center">
                    <Image
                      src="/placeholder.svg?height=60&width=90"
                      alt="Business card back"
                      width={90}
                      height={60}
                      className="rounded-md mx-auto mb-1"
                    />
                    <span className="text-xs text-muted-foreground">Back</span>
                  </div>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    UV Coating Finish
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Priya Gupta"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Priya Gupta</CardTitle>
                    <CardDescription>Interior Designer</CardDescription>
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
                  "The design team created beautiful cards that perfectly represent my creative brand. The textured
                  paper and foil stamping make them stand out at networking events."
                </p>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=100&width=160"
                    alt="Creative business card design"
                    width={160}
                    height={100}
                    className="rounded-md w-full"
                  />
                  <Badge className="absolute top-2 right-2 bg-purple-500">Foil Stamping</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    Creative Design + Textured Paper
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Dr. Rajesh Mehta"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">Dr. Rajesh Mehta</CardTitle>
                    <CardDescription>Cardiologist</CardDescription>
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
                  "Clean, professional design perfect for healthcare. The matte finish gives a sophisticated look and
                  the quality is excellent. Patients often compliment the cards."
                </p>
                <Image
                  src="/placeholder.svg?height=80&width=160"
                  alt="Healthcare business card design"
                  width={160}
                  height={80}
                  className="rounded-md w-full"
                />
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                    Healthcare Design
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
              <p className="text-muted-foreground">Everything you need to know about business card printing</p>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Make Your Mark?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get professional business cards that represent your brand perfectly. Start networking with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <CreditCard className="mr-2 h-5 w-5" />
              Design Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
