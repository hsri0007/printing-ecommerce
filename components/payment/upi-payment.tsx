"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Smartphone, QrCode, Copy, Check } from "lucide-react"

interface UPIPaymentProps {
  amount: number
  onPaymentSuccess: (paymentData: any) => void
  onPaymentError: (error: string) => void
}

const popularUPIApps = [
  { name: "Google Pay", id: "googlepay", color: "bg-blue-600" },
  { name: "PhonePe", id: "phonepe", color: "bg-purple-600" },
  { name: "Paytm", id: "paytm", color: "bg-blue-500" },
  { name: "BHIM", id: "bhim", color: "bg-orange-600" },
  { name: "Amazon Pay", id: "amazonpay", color: "bg-orange-500" },
]

export function UPIPayment({ amount, onPaymentSuccess, onPaymentError }: UPIPaymentProps) {
  const [upiId, setUpiId] = useState("")
  const [selectedApp, setSelectedApp] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [copied, setCopied] = useState(false)

  const upiLink = `upi://pay?pa=merchant@upi&pn=Brahmani prints&am=${amount}&cu=INR&tn=Brahmani prints Order Payment`

  const handleUPIPayment = async (appId?: string) => {
    setIsProcessing(true)
    try {
      // Create order first
      const orderResponse = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency: "INR" }),
      })

      const orderData = await orderResponse.json()
      if (!orderData.success) {
        throw new Error("Failed to create order")
      }

      // For UPI, we'll simulate the payment process
      // In a real implementation, you'd integrate with UPI deep linking
      const paymentLink = appId
        ? `${appId}://upi/pay?pa=merchant@upi&pn=Brahmani prints&am=${amount}&cu=INR&tn=Order Payment&tr=${orderData.order.id}`
        : upiLink

      // Open UPI app
      window.location.href = paymentLink

      // Simulate payment success after a delay (in real app, this would come from webhook)
      setTimeout(() => {
        onPaymentSuccess({
          razorpay_payment_id: `pay_${Date.now()}`,
          razorpay_order_id: orderData.order.id,
          razorpay_signature: "simulated_signature",
          method: "upi",
          app: appId || "manual",
        })
        setIsProcessing(false)
      }, 3000)
    } catch (error) {
      console.error("UPI payment error:", error)
      onPaymentError("UPI payment failed. Please try again.")
      setIsProcessing(false)
    }
  }

  const copyUPILink = () => {
    navigator.clipboard.writeText(upiLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Quick Pay Buttons */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5" />
            Quick Pay
          </CardTitle>
          <CardDescription>Pay instantly with your favorite UPI app</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {popularUPIApps.map((app) => (
              <Button
                key={app.id}
                variant={selectedApp === app.id ? "default" : "outline"}
                className="h-16 flex flex-col gap-1"
                onClick={() => {
                  setSelectedApp(app.id)
                  handleUPIPayment(app.id)
                }}
                disabled={isProcessing}
              >
                <div className={`w-8 h-8 rounded-full ${app.color} flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{app.name.charAt(0)}</span>
                </div>
                <span className="text-xs">{app.name}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Manual UPI ID */}
      <Card>
        <CardHeader>
          <CardTitle>Enter UPI ID</CardTitle>
          <CardDescription>Pay using any UPI app with your UPI ID</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="upi-id">UPI ID</Label>
            <Input
              id="upi-id"
              placeholder="yourname@paytm"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              disabled={isProcessing}
            />
          </div>
          <Button className="w-full" onClick={() => handleUPIPayment()} disabled={!upiId || isProcessing}>
            {isProcessing ? "Processing..." : `Pay ₹${amount.toLocaleString()}`}
          </Button>
        </CardContent>
      </Card>

      <Separator />

      {/* QR Code Payment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            Scan & Pay
          </CardTitle>
          <CardDescription>Scan QR code with any UPI app to pay</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center">
              <QrCode className="h-24 w-24 text-muted-foreground" />
            </div>
            <Badge variant="secondary">Amount: ₹{amount.toLocaleString()}</Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={copyUPILink}
              className="flex items-center gap-2 bg-transparent"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy UPI Link"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {isProcessing && (
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-sm text-blue-600">Redirecting to your UPI app...</p>
        </div>
      )}
    </div>
  )
}
