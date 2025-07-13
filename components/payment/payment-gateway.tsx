"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  Truck,
  Shield,
  CheckCircle,
  AlertCircle,
  Loader2,
  QrCode,
  Copy,
  Check,
  ArrowRight,
  Lock,
  Star,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/cart-context"

interface PaymentGatewayProps {
  amount: number
  orderDetails: {
    orderId: string
    customerName: string
    customerEmail: string
    customerPhone: string
    items: Array<{
      name: string
      quantity: number
      price: number
    }>
  }
}

declare global {
  interface Window {
    Razorpay: any
  }
}

const popularUPIApps = [
  { name: "Google Pay", id: "googlepay", color: "bg-blue-600", textColor: "text-white" },
  { name: "PhonePe", id: "phonepe", color: "bg-purple-600", textColor: "text-white" },
  { name: "Paytm", id: "paytm", color: "bg-blue-500", textColor: "text-white" },
  { name: "BHIM", id: "bhim", color: "bg-orange-600", textColor: "text-white" },
]

const banks = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra Bank",
  "Punjab National Bank",
  "Bank of Baroda",
  "Canara Bank",
  "Union Bank of India",
  "Indian Bank",
]

export function PaymentGateway({ amount, orderDetails }: PaymentGatewayProps) {
  const [selectedMethod, setSelectedMethod] = useState("cards")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "failed">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [upiId, setUpiId] = useState("")
  const [selectedBank, setSelectedBank] = useState("")
  const [copied, setCopied] = useState(false)
  const router = useRouter()
  const { dispatch } = useCart()

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const paymentMethods = [
    {
      id: "cards",
      name: "Cards",
      icon: CreditCard,
      description: "Credit/Debit Cards",
      badges: ["Visa", "Mastercard", "RuPay"],
      fee: 0,
      recommended: true,
      popular: true,
    },
    {
      id: "upi",
      name: "UPI",
      icon: Smartphone,
      description: "Pay with UPI",
      badges: ["Google Pay", "PhonePe", "Paytm"],
      fee: 0,
      recommended: true,
      popular: true,
    },
    {
      id: "netbanking",
      name: "Net Banking",
      icon: Building2,
      description: "Online Banking",
      badges: ["All Banks"],
      fee: 0,
      recommended: false,
      popular: false,
    },
    {
      id: "wallets",
      name: "Wallets",
      icon: Wallet,
      description: "Digital Wallets",
      badges: ["Paytm", "Mobikwik"],
      fee: 0,
      recommended: false,
      popular: false,
    },
    {
      id: "cod",
      name: "Cash on Delivery",
      icon: Truck,
      description: "Pay when delivered",
      badges: ["₹50 extra"],
      fee: 50,
      recommended: false,
      popular: false,
    },
  ]

  const handleRazorpayPayment = async (method: string) => {
    setIsProcessing(true)
    setPaymentStatus("processing")
    setErrorMessage("")

    try {
      const finalAmount = method === "cod" ? amount + 50 : amount

      // Create order
      const orderResponse = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount,
          currency: "INR",
          receipt: orderDetails.orderId,
          notes: {
            customerName: orderDetails.customerName,
            customerEmail: orderDetails.customerEmail,
            paymentMethod: method,
          },
        }),
      })

      const orderData = await orderResponse.json()
      if (!orderData.success) {
        throw new Error("Failed to create order")
      }

      // Handle COD separately
      if (method === "cod") {
        setPaymentStatus("success")
        dispatch({ type: "CLEAR_CART" })
        setTimeout(() => {
          router.push(`/checkout/success?orderId=${orderDetails.orderId}&method=cod&amount=${finalAmount.toString()}`)
        }, 2000)
        return
      }

      // Configure Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "Brahmani prints",
        description: "Printing Services Payment",
        order_id: orderData.order.id,
        handler: async (response: any) => {
          try {
            // Verify payment
            const verifyResponse = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            })

            const verifyData = await verifyResponse.json()
            if (verifyData.success) {
              setPaymentStatus("success")
              dispatch({ type: "CLEAR_CART" })
              setTimeout(() => {
                router.push(
                  `/checkout/success?orderId=${orderDetails.orderId}&paymentId=${response.razorpay_payment_id}&amount=${finalAmount.toString()}`,
                )
              }, 2000)
            } else {
              throw new Error("Payment verification failed")
            }
          } catch (error) {
            console.error("Payment verification error:", error)
            setPaymentStatus("failed")
            setErrorMessage("Payment verification failed. Please contact support.")
          }
        },
        prefill: {
          name: orderDetails.customerName,
          email: orderDetails.customerEmail,
          contact: orderDetails.customerPhone,
        },
        method: {
          card: method === "cards",
          upi: method === "upi",
          netbanking: method === "netbanking",
          wallet: method === "wallets",
        },
        theme: {
          color: "#3B82F6",
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false)
            setPaymentStatus("idle")
          },
        },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (error) {
      console.error("Payment error:", error)
      setPaymentStatus("failed")
      setErrorMessage("Payment failed. Please try again.")
      setIsProcessing(false)
    }
  }

  const handleUPIPayment = async (appId?: string) => {
    if (!appId && !upiId.trim()) {
      setErrorMessage("Please enter a valid UPI ID")
      return
    }

    setIsProcessing(true)
    setPaymentStatus("processing")

    try {
      // Create UPI payment link
      const upiLink = `upi://pay?pa=${upiId || "merchant@upi"}&pn=${encodeURIComponent(
        orderDetails.customerName,
      )}&am=${amount}&cu=INR&tn=${encodeURIComponent("Brahmani prints Order Payment")}`

      // Open UPI app
      window.location.href = upiLink

      // Simulate payment success (in real app, this would come from webhook)
      setTimeout(() => {
        setPaymentStatus("success")
        dispatch({ type: "CLEAR_CART" })
        router.push(`/checkout/success?orderId=${orderDetails.orderId}&method=upi&amount=${amount.toString()}`)
      }, 3000)
    } catch (error) {
      console.error("UPI payment error:", error)
      setPaymentStatus("failed")
      setErrorMessage("UPI payment failed. Please try again.")
      setIsProcessing(false)
    }
  }

  const copyUPILink = () => {
    const upiLink = `upi://pay?pa=merchant@upi&pn=${encodeURIComponent(
      orderDetails.customerName,
    )}&am=${amount}&cu=INR&tn=${encodeURIComponent("Brahmani prints Order Payment")}`
    navigator.clipboard.writeText(upiLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (paymentStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6 p-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-green-600">Payment Successful!</h3>
          <p className="text-muted-foreground">Your order has been confirmed</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Redirecting to confirmation page...</span>
        </div>
      </div>
    )
  }

  if (paymentStatus === "failed") {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center space-y-6 p-6">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
          <AlertCircle className="h-12 w-12 text-red-600" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-red-600">Payment Failed</h3>
          <p className="text-muted-foreground">{errorMessage}</p>
        </div>
        <Button
          onClick={() => {
            setPaymentStatus("idle")
            setErrorMessage("")
            setIsProcessing(false)
          }}
          className="w-full max-w-xs"
        >
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Payment Amount Card - Responsive */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-4 sm:p-6">
          <div className="text-center space-y-2">
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">₹{amount.toLocaleString()}</div>
            <p className="text-sm text-blue-600/70">Total Amount to Pay</p>
            <div className="flex items-center justify-center space-x-2 text-xs text-blue-600/60">
              <Lock className="h-3 w-3" />
              <span>Secure Payment</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Methods - Responsive Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Choose Payment Method</h3>

        {/* Desktop: Grid Layout, Mobile: Stack Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {paymentMethods.map((method) => {
            const isSelected = selectedMethod === method.id
            const finalAmount = method.fee > 0 ? amount + method.fee : amount

            return (
              <Card
                key={method.id}
                className={`cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "ring-2 ring-blue-500 border-blue-500 bg-blue-50"
                    : "hover:border-gray-300 hover:shadow-sm"
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-blue-100" : "bg-gray-100"}`}>
                        <method.icon className={`h-5 w-5 ${isSelected ? "text-blue-600" : "text-gray-600"}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 flex-wrap">
                          <span className="font-medium">{method.name}</span>
                          {method.popular && (
                            <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                              <Star className="h-3 w-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                          {method.recommended && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                              Recommended
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {method.badges.map((badge) => (
                            <Badge key={badge} variant="outline" className="text-xs">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      {method.fee > 0 && <div className="text-sm text-orange-600 font-medium">+₹{method.fee}</div>}
                      <ArrowRight className={`h-4 w-4 ${isSelected ? "text-blue-600" : "text-gray-400"}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Payment Method Details - Responsive */}
      <div className="space-y-4">
        {/* Cards Payment */}
        {selectedMethod === "cards" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Credit/Debit Cards
              </CardTitle>
              <CardDescription>Secure payment with your card</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Shield className="h-4 w-4" />
                <AlertDescription>Your card details are processed securely by Razorpay</AlertDescription>
              </Alert>
              <Button
                className="w-full h-12 text-base"
                onClick={() => handleRazorpayPayment("cards")}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Pay ₹{amount.toLocaleString()}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* UPI Payment */}
        {selectedMethod === "upi" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                UPI Payment
              </CardTitle>
              <CardDescription>Pay instantly with your UPI app</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Quick Pay Buttons */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Quick Pay</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
                  {popularUPIApps.map((app) => (
                    <Button
                      key={app.id}
                      variant="outline"
                      className="h-16 flex flex-col gap-1 bg-white hover:bg-gray-50"
                      onClick={() => handleUPIPayment(app.id)}
                      disabled={isProcessing}
                    >
                      <div className={`w-8 h-8 rounded-full ${app.color} flex items-center justify-center`}>
                        <span className={`text-sm font-bold ${app.textColor}`}>{app.name.charAt(0)}</span>
                      </div>
                      <span className="text-xs">{app.name}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Manual UPI ID */}
              <div className="space-y-4">
                <Label className="text-sm font-medium">Enter UPI ID</Label>
                <div className="space-y-3">
                  <Input
                    placeholder="yourname@paytm"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    disabled={isProcessing}
                    className="h-12 text-base"
                  />
                  <Button
                    className="w-full h-12"
                    onClick={() => handleUPIPayment()}
                    disabled={!upiId.trim() || isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Smartphone className="mr-2 h-4 w-4" />
                        Pay ₹{amount.toLocaleString()}
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <Separator />

              {/* QR Code */}
              <div className="text-center space-y-4">
                <Label className="text-sm font-medium">Scan & Pay</Label>
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                    <QrCode className="h-16 w-16 sm:h-20 sm:w-20 text-gray-400" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    Amount: ₹{amount.toLocaleString()}
                  </Badge>
                  <Button variant="outline" size="sm" onClick={copyUPILink} className="bg-white">
                    {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                    {copied ? "Copied!" : "Copy UPI Link"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Net Banking */}
        {selectedMethod === "netbanking" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Net Banking
              </CardTitle>
              <CardDescription>Pay using your bank account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Select Your Bank</Label>
                <Select value={selectedBank} onValueChange={setSelectedBank}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose your bank" />
                  </SelectTrigger>
                  <SelectContent>
                    {banks.map((bank) => (
                      <SelectItem key={bank} value={bank}>
                        {bank}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                className="w-full h-12"
                onClick={() => handleRazorpayPayment("netbanking")}
                disabled={isProcessing || !selectedBank}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Building2 className="mr-2 h-4 w-4" />
                    Pay ₹{amount.toLocaleString()}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Wallets */}
        {selectedMethod === "wallets" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                Digital Wallets
              </CardTitle>
              <CardDescription>Pay using your digital wallet</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full h-12" onClick={() => handleRazorpayPayment("wallets")} disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Wallet className="mr-2 h-4 w-4" />
                    Pay ₹{amount.toLocaleString()}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Cash on Delivery */}
        {selectedMethod === "cod" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Cash on Delivery
              </CardTitle>
              <CardDescription>Pay when you receive your order</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Truck className="h-4 w-4" />
                <AlertDescription>
                  Additional ₹50 will be charged for Cash on Delivery. Please keep exact change ready.
                </AlertDescription>
              </Alert>
              <div className="bg-orange-50 p-3 rounded-lg">
                <div className="flex justify-between items-center text-sm">
                  <span>Order Amount</span>
                  <span>₹{amount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>COD Charges</span>
                  <span>₹50</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between items-center font-semibold">
                  <span>Total Amount</span>
                  <span>₹{(amount + 50).toLocaleString()}</span>
                </div>
              </div>
              <Button className="w-full h-12" onClick={() => handleRazorpayPayment("cod")} disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Truck className="mr-2 h-4 w-4" />
                    Place Order - ₹{(amount + 50).toLocaleString()}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Security Info */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-center gap-2 text-sm text-green-700">
            <Shield className="h-4 w-4" />
            <span className="text-center">Your payment information is secure and encrypted</span>
          </div>
        </CardContent>
      </Card>

      {/* Processing Overlay */}
      {paymentStatus === "processing" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-sm">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Processing Payment</h3>
                  <p className="text-sm text-muted-foreground">Please wait while we process your payment...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
