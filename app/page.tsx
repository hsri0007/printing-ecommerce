import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CartButton } from "@/components/cart-button"
import { Printer, Palette, Clock, Shield, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    id: "business-cards",
    title: "Business Cards",
    description: "Professional business cards with premium finishes",
    price: "Starting from ₹299",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/business-cards",
    popular: true,
  },
  {
    id: "t-shirt-printing",
    title: "T-Shirt Printing",
    description: "Custom t-shirts with your designs and logos",
    price: "Starting from ₹199",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/t-shirt-printing",
    popular: true,
  },
  {
    id: "wedding-cards",
    title: "Wedding Cards",
    description: "Beautiful wedding invitations for your special day",
    price: "Starting from ₹15/card",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/wedding-cards",
    popular: false,
  },
  {
    id: "pamphlets-flyers",
    title: "Pamphlets & Flyers",
    description: "Eye-catching promotional materials",
    price: "Starting from ₹2/piece",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/pamphlets-flyers",
    popular: false,
  },
  {
    id: "flex-printing",
    title: "Flex Printing",
    description: "Large format printing for banners and displays",
    price: "Starting from ₹25/sq ft",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/flex-printing",
    popular: false,
  },
  {
    id: "hoardings",
    title: "Hoardings",
    description: "Large outdoor advertising displays",
    price: "Starting from ₹150/sq ft",
    image: "/placeholder.svg?height=200&width=300",
    href: "/services/hoardings",
    popular: false,
  },
]

const features = [
  {
    icon: Printer,
    title: "High-Quality Printing",
    description: "State-of-the-art printing technology for crisp, vibrant results",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description: "Professional design services to bring your vision to life",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all our printing services",
  },
]

const stats = [
  { number: "10,000+", label: "Happy Customers" },
  { number: "50,000+", label: "Orders Completed" },
  { number: "99.9%", label: "Customer Satisfaction" },
  { number: "24/7", label: "Customer Support" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Printer className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">PrintPro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <CartButton />
            <Button>Get Quote</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Printing
            <span className="text-blue-600"> Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            From business cards to large format printing, we deliver high-quality results with fast turnaround times and
            competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Browse Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Printing Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of professional printing services, each tailored to meet your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
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
                    <Badge className="absolute top-4 left-4 bg-orange-500">
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
                    <span className="text-lg font-semibold text-blue-600">{service.price}</span>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose PrintPro?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with exceptional service to deliver outstanding printing results every
              time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free quote today and see why thousands of customers trust PrintPro for their printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Printer className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">PrintPro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for all printing needs. Quality, speed, and exceptional service guaranteed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services/business-cards" className="hover:text-white">
                    Business Cards
                  </Link>
                </li>
                <li>
                  <Link href="/services/t-shirt-printing" className="hover:text-white">
                    T-Shirt Printing
                  </Link>
                </li>
                <li>
                  <Link href="/services/wedding-cards" className="hover:text-white">
                    Wedding Cards
                  </Link>
                </li>
                <li>
                  <Link href="/services/flex-printing" className="hover:text-white">
                    Flex Printing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 +91 98765 43210</p>
                <p>✉️ info@printpro.com</p>
                <p>📍 123 Print Street, Mumbai, India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PrintPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
