"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Package,
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  Truck,
  ArrowLeft,
  Share2,
  Printer,
} from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [orderDetails, setOrderDetails] = useState({
    orderId: "",
    paymentId: "",
    amount: "",
    method: "",
  })

  useEffect(() => {
    const orderId = searchParams.get("orderId") || ""
    const paymentId = searchParams.get("paymentId") || ""
    const amount = searchParams.get("amount") || ""
    const method = searchParams.get("method") || ""

    setOrderDetails({ orderId, paymentId, amount, method })
  }, [searchParams])

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case "cards":
        return <CreditCard className="h-4 w-4" />
      case "upi":
        return <Smartphone className="h-4 w-4" />
      case "netbanking":
        return <Building2 className="h-4 w-4" />
      case "wallets":
        return <Wallet className="h-4 w-4" />
      case "cod":
        return <Truck className="h-4 w-4" />
      default:
        return <CreditCard className="h-4 w-4" />
    }
  }

  const getPaymentMethodName = (method: string) => {
    switch (method) {
      case "cards":
        return "Credit/Debit Card"
      case "upi":
        return "UPI Payment"
      case "netbanking":
        return "Net Banking"
      case "wallets":
        return "Digital Wallet"
      case "cod":
        return "Cash on Delivery"
      default:
        return "Online Payment"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Printer className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">PrintPro</span>
          </div>
          <Button variant="ghost" onClick={() => router.push("/")} size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">Thank you for your order. We'll start processing it right away.</p>
        </div>

        {/* Order Details Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Order Details
            </CardTitle>
            <CardDescription>Your order has been successfully placed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Order ID</label>
                <p className="font-mono text-sm bg-gray-100 p-2 rounded">{orderDetails.orderId}</p>
              </div>
              {orderDetails.paymentId && (
                <div>
                  <label className="text-sm font-medium text-gray-500">Payment ID</label>
                  <p className="font-mono text-sm bg-gray-100 p-2 rounded">{orderDetails.paymentId}</p>
                </div>
              )}
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {getPaymentMethodIcon(orderDetails.method)}
                <span className="font-medium">{getPaymentMethodName(orderDetails.method)}</span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  ₹{Number.parseInt(orderDetails.amount || "0").toLocaleString()}
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  {orderDetails.method === "cod" ? "COD Confirmed" : "Payment Successful"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              What Happens Next?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-600">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Order Processing</h4>
                  <p className="text-sm text-gray-600">
                    We'll review your order and start the printing process within 2-4 hours.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-600">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Quality Check</h4>
                  <p className="text-sm text-gray-600">Every item goes through our quality assurance process.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-blue-600">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Shipping & Delivery</h4>
                  <p className="text-sm text-gray-600">
                    Your order will be carefully packaged and shipped within 3-5 business days.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>Our customer support team is here to assist you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Call Us</p>
                  <p className="text-sm text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Email Us</p>
                  <p className="text-sm text-gray-600">support@printpro.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Visit Us</p>
                  <p className="text-sm text-gray-600">Mumbai, India</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="flex-1">
            <Link href="/orders">
              <Package className="h-4 w-4 mr-2" />
              Track Your Order
            </Link>
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Download Invoice
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <Share2 className="h-4 w-4 mr-2" />
            Share Order
          </Button>
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-8">
          <Button asChild variant="ghost">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
