import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, Users, MapPin, Clock } from "lucide-react"
import { HOMEPAGE_DATA } from "@/data/home-data/home-data"
import { GetQuoteDialog } from "@/components/get-quote"

export const metadata = {
  title: "About Us - Brahmani Graphics",
  description: "Learn about Brahmani Graphics - your trusted printing partner in Hyderabad, Uppal, Habsiguda & Tarnaka. Quality printing services with 40+ happy customers.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
}

export default function AboutUsPage() {
  const data = HOMEPAGE_DATA

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">About Brahmani Graphics</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your trusted printing partner in Hyderabad, specializing in high-quality printing services for businesses and individuals.
            </p>
          </div>

          {/* Our Story */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Brahmani Graphics was founded with a simple mission: to provide exceptional printing services that help businesses
                and individuals bring their ideas to life. Based in the heart of Hyderabad, we've been serving the local community
                in Uppal, Habsiguda, and Tarnaka for years.
              </p>
              <p>
                What started as a small printing shop has grown into a trusted name in the industry, thanks to our commitment to
                quality, innovation, and customer satisfaction. We understand that every print job is important, whether it's a
                business card for a startup or a large hoarding for a major campaign.
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg border bg-card">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-foreground text-center mb-8">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Services */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground">Our Services</h2>
            <p className="text-muted-foreground">
              We offer a comprehensive range of printing services to meet all your needs:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                  <p className="text-primary font-medium text-sm mt-2">{service.priceLabel}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Location */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground">Our Location</h2>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-muted-foreground">{data.contact.address}</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center space-y-4 bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground">Ready to Get Started?</h2>
            <p className="text-muted-foreground">
              Contact us today for a free quote or consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button>Contact Us</Button>
              </Link>
              <GetQuoteDialog />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}