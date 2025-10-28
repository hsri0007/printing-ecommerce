"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Star, Heart, Gift, Download, Sparkles, Crown, ShoppingCart, Eye } from "lucide-react"
import Image from "next/image"

export default function WeddingCardsPage() {
  const cardCategories = [
    {
      name: "Traditional Cards",
      price: "₹25-50/piece",
      features: ["Classic designs", "Premium paper", "Gold foiling", "Religious motifs"],
      popular: false,
    },
    {
      name: "Modern Designer Cards",
      price: "₹40-80/piece",
      features: ["Contemporary designs", "Unique layouts", "Custom illustrations", "Premium finishes"],
      popular: true,
    },
    {
      name: "Luxury Collection",
      price: "₹75-150/piece",
      features: ["Handcrafted elements", "Premium materials", "Laser cutting", "Exclusive designs"],
      popular: false,
    },
  ]

  const templates = [
    {
      id: 1,
      name: "Royal Traditional",
      category: "Traditional",
      style: "Hindu Wedding",
      price: 45,
      originalPrice: 55,
      image: "/placeholder.svg?height=250&width=200",
      description: "Elegant traditional design with gold foiling",
      features: ["Gold foil accents", "Religious motifs", "Premium paper"],
      popular: true,
    },
    {
      id: 2,
      name: "Modern Floral",
      category: "Contemporary",
      style: "Floral Theme",
      price: 65,
      originalPrice: 75,
      image: "/placeholder.svg?height=250&width=200",
      description: "Beautiful floral design with modern typography",
      features: ["Watercolor florals", "Modern fonts", "Eco-friendly paper"],
      popular: false,
    },
    {
      id: 3,
      name: "Laser Cut Elegance",
      category: "Luxury",
      style: "Laser Cut",
      price: 125,
      originalPrice: 150,
      image: "/placeholder.svg?height=250&width=200",
      description: "Intricate laser-cut design with premium finish",
      features: ["Laser cutting", "Premium cardstock", "Unique design"],
      popular: true,
    },
    {
      id: 4,
      name: "Vintage Romance",
      category: "Vintage",
      style: "Romantic",
      price: 55,
      originalPrice: 65,
      image: "/placeholder.svg?height=250&width=200",
      description: "Romantic vintage-inspired wedding invitation",
      features: ["Vintage elements", "Romantic colors", "Classic typography"],
      popular: false,
    },
    {
      id: 5,
      name: "Minimalist Chic",
      category: "Modern",
      style: "Minimalist",
      price: 40,
      originalPrice: 50,
      image: "/placeholder.svg?height=250&width=200",
      description: "Clean and elegant minimalist design",
      features: ["Clean design", "Premium finish", "Modern aesthetic"],
      popular: false,
    },
    {
      id: 6,
      name: "Royal Palace",
      category: "Luxury",
      style: "Royal Theme",
      price: 95,
      originalPrice: 120,
      image: "/placeholder.svg?height=250&width=200",
      description: "Luxurious royal-themed wedding invitation",
      features: ["Royal motifs", "Gold embossing", "Handcrafted elements"],
      popular: true,
    },
  ]

  const finishingOptions = [
    {
      name: "Gold Foiling",
      description: "Elegant gold accents for a premium look",
      additionalCost: "+₹5/piece",
    },
    {
      name: "Embossing",
      description: "Raised text and designs for texture",
      additionalCost: "+₹8/piece",
    },
    {
      name: "Laser Cutting",
      description: "Intricate cut-out patterns",
      additionalCost: "+₹15/piece",
    },
    {
      name: "UV Spot Coating",
      description: "Glossy highlights on specific areas",
      additionalCost: "+₹3/piece",
    },
  ]

  const paperTypes = [
    { name: "Art Paper", weight: "250 GSM", finish: "Matte/Glossy", price: "Base price" },
    { name: "Textured Paper", weight: "300 GSM", finish: "Linen/Canvas", price: "+₹5/piece" },
    { name: "Pearl Paper", weight: "250 GSM", finish: "Pearl finish", price: "+₹8/piece" },
    { name: "Handmade Paper", weight: "200 GSM", finish: "Natural texture", price: "+₹12/piece" },
  ]

  const faqs = [
    {
      question: "How long does it take to design and print wedding cards?",
      answer:
        "Design approval takes 2-3 days, and printing takes 5-7 days. Rush orders can be completed in 3-5 days with additional charges.",
    },
    {
      question: "Do you provide design services?",
      answer:
        "Yes, we have experienced designers who can create custom wedding card designs based on your preferences and theme.",
    },
    {
      question: "What's the minimum order quantity?",
      answer: "Minimum order is 50 pieces. We recommend ordering 10-15% extra for backup purposes.",
    },
    {
      question: "Can I see a sample before placing the full order?",
      answer: "Yes, we provide physical samples for ₹200-500 depending on the design complexity and finishes.",
    },
    {
      question: "Do you offer matching accessories?",
      answer: "Yes, we can create matching save-the-dates, RSVP cards, thank you cards, and other wedding stationery.",
    },
  ]

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 to-rose-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                <Heart className="h-4 w-4 mr-2" />
                Wedding Invitations
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Beautiful
                <span className="text-primary block">Wedding Cards</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Create stunning wedding invitations that perfectly capture your love story. From traditional to modern
                designs with premium finishes.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Crown className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">50+ Happy Couples</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Designing
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Download className="mr-2 h-5 w-5" />
                  View Catalog
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Wedding Card Designs"
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
            <h2 className="text-3xl font-bold mb-4">Wedding Card Templates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our beautiful collection of wedding invitation templates
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
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
                    {/* <Button className="flex-1">
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

      {/* Card Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Wedding Card Collections</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our curated collections or create a completely custom design
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cardCategories.map((category, index) => (
              <Card key={index} className={`relative ${category.popular ? "border-primary shadow-lg" : ""}`}>
                {category.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{category.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full" variant={category.popular ? "default" : "outline"}>
                    View Designs
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="finishes" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="finishes">Premium Finishes</TabsTrigger>
              <TabsTrigger value="paper">Paper Types</TabsTrigger>
            </TabsList>

            <TabsContent value="finishes" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {finishingOptions.map((finish, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{finish.name}</CardTitle>
                      <Badge variant="secondary" className="w-fit">
                        {finish.additionalCost}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{finish.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="paper" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {paperTypes.map((paper, index) => (
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

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about wedding card printing</p>
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
            <h2 className="text-3xl font-bold mb-4">Happy Couples</h2>
            <p className="text-muted-foreground">Love stories and beautiful wedding cards</p>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.9/5</span>
              <span className="text-muted-foreground">(156 reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-pink-100">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Rahul & Priya"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <Heart className="absolute -bottom-1 -right-1 h-4 w-4 text-pink-500 bg-white rounded-full p-0.5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Rahul & Priya</CardTitle>
                    <CardDescription>Married Dec 2023</CardDescription>
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
                  "Our wedding cards were absolutely stunning! The gold foiling and embossed design made them feel so
                  premium. All our guests complimented the beautiful cards. Thank you Brahmani prints!"
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Image
                    src="/placeholder.svg?height=100&width=80"
                    alt="Wedding card front"
                    width={80}
                    height={100}
                    className="rounded-md mx-auto"
                  />
                  <Image
                    src="/placeholder.svg?height=100&width=80"
                    alt="Wedding card inside"
                    width={80}
                    height={100}
                    className="rounded-md mx-auto"
                  />
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    Gold Foiling + Embossing
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-rose-100">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Amit & Kavya"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <Heart className="absolute -bottom-1 -right-1 h-4 w-4 text-rose-500 bg-white rounded-full p-0.5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Amit & Kavya</CardTitle>
                    <CardDescription>Married Nov 2023</CardDescription>
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
                  "The design team understood our vision perfectly. The laser-cut details and premium paper quality
                  exceeded our expectations. Delivered on time despite our tight schedule!"
                </p>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=120&width=200"
                    alt="Laser cut wedding card"
                    width={200}
                    height={120}
                    className="rounded-md w-full"
                  />
                  <Badge className="absolute top-2 right-2 bg-purple-500">Laser Cut</Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="text-xs">
                    Premium Paper + Laser Cutting
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-purple-100">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Vikram & Sneha"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <Heart className="absolute -bottom-1 -right-1 h-4 w-4 text-purple-500 bg-white rounded-full p-0.5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Vikram & Sneha</CardTitle>
                    <CardDescription>Married Jan 2024</CardDescription>
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
                  "Traditional design with modern touch - exactly what we wanted! The handmade paper and religious
                  motifs were perfect for our ceremony. Highly recommend their luxury collection."
                </p>
                <div className="flex space-x-2">
                  <Image
                    src="/placeholder.svg?height=80&width=60"
                    alt="Traditional card design 1"
                    width={60}
                    height={80}
                    className="rounded-md"
                  />
                  <Image
                    src="/placeholder.svg?height=80&width=60"
                    alt="Traditional card design 2"
                    width={60}
                    height={80}
                    className="rounded-md"
                  />
                  <Image
                    src="/placeholder.svg?height=80&width=60"
                    alt="Traditional card design 3"
                    width={60}
                    height={80}
                    className="rounded-md"
                  />
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="text-xs">
                    Traditional + Handmade Paper
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Make Your Wedding Unforgettable</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let us create beautiful wedding invitations that your guests will treasure forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Gift className="mr-2 h-5 w-5" />
              Get Free Sample
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-pink-500"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
