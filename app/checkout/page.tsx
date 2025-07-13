"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PaymentGateway } from "@/components/payment/payment-gateway"
import { ArrowLeft, MapPin, User, ShoppingBag, Truck, Shield, Clock } from "lucide-react"
import Image from "next/image"

interface CustomerInfo {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  notes: string
}

export default function CheckoutPage() {
  const { state } = useCart()
  const router = useRouter()
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    notes: "",
  })
  const [showPayment, setShowPayment] = useState(false)

  // Ensure state and items are properly initialized
  const items = state?.items || []
  const total = state?.total || 0
  const itemCount = state?.itemCount || 0

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0) {
      router.push("/")
    }
  }, [items.length, router])

  const handleInputChange = useCallback((field: keyof CustomerInfo, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }))
  }, [])

  // Memoize validation to prevent re-renders
  const isFormValid = useMemo(() => {
    const required = ["name", "email", "phone", "address", "city", "state", "pincode"]
    return required.every((field) => customerInfo[field as keyof CustomerInfo].trim() !== "")
  }, [customerInfo])

  const handleProceedToPayment = useCallback(() => {
    if (isFormValid) {
      setShowPayment(true)
    }
  }, [isFormValid])

  const deliveryFee = total >= 500 ? 0 : 50
  const finalTotal = total + deliveryFee

  // Memoize order details to prevent re-renders in PaymentGateway
  const orderDetails = useMemo(
    () => ({
      orderId: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      customerName: customerInfo.name,
      customerEmail: customerInfo.email,
      customerPhone: customerInfo.phone,
      items: items.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    }),
    [customerInfo.name, customerInfo.email, customerInfo.phone, items],
  )

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-4">Add some items to proceed with checkout</p>
          <Button onClick={() => router.push("/")} variant="outline">
            Continue Shopping
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b px-4 py-3 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="font-semibold">Checkout</h1>
            <p className="text-sm text-muted-foreground">
              {itemCount} items • ₹{total.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 lg:py-8">
        {/* Desktop Header */}
        <div className="hidden lg:block mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shopping
            </Button>
          </div>
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p className="text-muted-foreground">Complete your order and proceed to payment</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content - Customer Info & Payment */}
          <div className="lg:col-span-2 space-y-6">
            {!showPayment ? (
              <>
                {/* Customer Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Customer Information
                    </CardTitle>
                    <CardDescription>Please provide your details for order processing and delivery</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={customerInfo.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={customerInfo.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        value={customerInfo.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Complete Address *</Label>
                      <Textarea
                        id="address"
                        placeholder="Enter your complete address"
                        value={customerInfo.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        rows={3}
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          placeholder="City"
                          value={customerInfo.city}
                          onChange={(e) => handleInputChange("city", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          placeholder="State"
                          value={customerInfo.state}
                          onChange={(e) => handleInputChange("state", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pincode">PIN Code *</Label>
                        <Input
                          id="pincode"
                          placeholder="PIN Code"
                          value={customerInfo.pincode}
                          onChange={(e) => handleInputChange("pincode", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Special Instructions (Optional)</Label>
                      <Textarea
                        id="notes"
                        placeholder="Any special instructions for your order"
                        value={customerInfo.notes}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
                        rows={2}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      Delivery Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                        <Clock className="h-8 w-8 text-blue-600" />
                        <div>
                          <h4 className="font-medium">Delivery Time</h4>
                          <p className="text-sm text-muted-foreground">3-5 business days</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                        <Shield className="h-8 w-8 text-green-600" />
                        <div>
                          <h4 className="font-medium">Secure Packaging</h4>
                          <p className="text-sm text-muted-foreground">Protected delivery</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                        <MapPin className="h-8 w-8 text-purple-600" />
                        <div>
                          <h4 className="font-medium">Order Tracking</h4>
                          <p className="text-sm text-muted-foreground">Real-time updates</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Mobile Proceed Button */}
                <div className="lg:hidden">
                  <Button className="w-full h-12" onClick={handleProceedToPayment} disabled={!isFormValid}>
                    Proceed to Payment • ₹{finalTotal.toLocaleString()}
                  </Button>
                </div>
              </>
            ) : (
              <PaymentGateway amount={finalTotal} orderDetails={orderDetails} />
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5" />
                    Order Summary
                  </CardTitle>
                  <CardDescription>
                    {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ScrollArea className="max-h-64">
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div key={item.id} className="flex gap-3">
                          <div className="relative w-12 h-12 bg-muted rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg?height=48&width=48"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm truncate">{item.name}</h4>
                            <p className="text-xs text-muted-foreground">{item.category}</p>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs text-muted-foreground">Qty: {item.quantity}</span>
                              <span className="font-medium text-sm">
                                ₹{(item.price * item.quantity).toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Delivery Fee</span>
                      <span className={deliveryFee === 0 ? "text-green-600" : ""}>
                        {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                      </span>
                    </div>
                    {deliveryFee === 0 && (
                      <p className="text-xs text-green-600">🎉 Free delivery on orders above ₹500</p>
                    )}
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>₹{finalTotal.toLocaleString()}</span>
                  </div>

                  {/* Desktop Proceed Button */}
                  {!showPayment && (
                    <div className="hidden lg:block">
                      <Button className="w-full h-12" onClick={handleProceedToPayment} disabled={!isFormValid}>
                        Proceed to Payment
                      </Button>
                    </div>
                  )}

                  <div className="text-xs text-muted-foreground space-y-1">
                    <p className="flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      Secure SSL encrypted checkout
                    </p>
                    <p className="flex items-center gap-1">
                      <Truck className="h-3 w-3" />
                      Fast and reliable delivery
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
