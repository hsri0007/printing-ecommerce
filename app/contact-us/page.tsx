import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react"
import { HOMEPAGE_DATA } from "@/data/home-data/home-data"
import { GetQuoteDialog } from "@/components/get-quote"

export const metadata = {
  title: "Contact Us - Brahmani Graphics",
  description: "Get in touch with Brahmani Graphics for all your printing needs in Hyderabad, Uppal, Habsiguda & Tarnaka",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
}

export default function ContactUsPage() {
  const contact = HOMEPAGE_DATA.contact

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
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to bring your printing ideas to life? Get in touch with our team for quotes, custom designs, and expert advice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Get In Touch</h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">{contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">{contact.address}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form or CTA */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Send Us a Message</h2>
              <p className="text-muted-foreground">
                For quick quotes and inquiries, use our get quote form or contact us directly.
              </p>

              <div className="space-y-4">
                   <GetQuoteDialog className="w-full" />

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Or call us directly at {contact.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}