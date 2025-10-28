import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - PrintPro",
  description: "Privacy Policy for PrintPro printing services",
}

export default function PrivacyPolicyPage() {
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
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              PrintPro ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website and use
              our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect information about you in a variety of ways. The information we may collect on the site
              includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, shipping address, billing address,
                and payment information
              </li>
              <li>
                <strong>Order Information:</strong> Details about your orders, including products ordered, quantities,
                and delivery preferences
              </li>
              <li>
                <strong>Device Information:</strong> Browser type, IP address, operating system, and pages visited
              </li>
              <li>
                <strong>Communication Data:</strong> Messages, inquiries, and feedback you send to us
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. Use of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via the site to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Process your transactions and send related information</li>
              <li>Email you regarding your order status and updates</li>
              <li>Fulfill and manage your orders</li>
              <li>Generate a personal profile about you</li>
              <li>Increase the efficiency and operation of the site</li>
              <li>Monitor and analyze usage and trends to improve your experience</li>
              <li>Notify you of updates to the site</li>
              <li>Offer new products, services, and promotions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Disclosure of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary to
                comply with the law
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with vendors, consultants,
                and service providers who assist us in operating our website and conducting our business
              </li>
              <li>
                <strong>Business Transfers:</strong> Your information may be transferred as part of a merger,
                acquisition, or sale of assets
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">5. Security of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use administrative, technical, and physical security measures to protect your personal information.
              However, no method of transmission over the Internet or method of electronic storage is 100% secure. While
              we strive to use commercially acceptable means to protect your personal information, we cannot guarantee
              its absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg space-y-2 text-muted-foreground">
              <p>📧 Email: privacy@brahmanigraphics.com</p>
              <p>📞 Phone: +91 8121146633</p>
              <p>📍 Address: 1-1-54 STREET NO.1 Kakateeya Nagar, Habsiguda, Hyderabad, Telangana 500007</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">7. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              PrintPro reserves the right to modify this privacy policy at any time. Changes and clarifications will
              take effect immediately upon their posting to the website. If we make material changes to this policy, we
              will notify you here that it has been updated, so that you are aware of what information we collect, how
              we use it, and under what circumstances, if any, we use and/or disclose it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">8. Cookie Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use "cookies" to enhance user experience. Your web browser places cookies on your hard
              drive for record-keeping purposes and sometimes to track information about you. You may choose to decline
              cookies, but this may affect your ability to access certain features of the website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">9. CCPA Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are a California resident, you have the right to know what personal information is collected, used,
              shared or sold. You have the right to delete personal information collected from you. You have the right
              to opt-out of the sale or sharing of your personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">10. GDPR Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are a resident of the EEA, you have the right to access, correct, or delete your personal data. You
              have the right to restrict or object to our processing of your personal data. You have the right to data
              portability.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Button asChild variant="outline">
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}
