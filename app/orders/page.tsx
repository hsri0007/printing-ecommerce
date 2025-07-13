"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Package,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  FileText,
  Download,
} from "lucide-react"
import Link from "next/link"

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">Track Your Orders</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Order Tracking Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Track Your Order</span>
              </CardTitle>
              <CardDescription>Enter your order number to track the status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Label htmlFor="orderNumber">Order Number</Label>
                  <Input id="orderNumber" placeholder="Enter order number (e.g., ORD-12345678)" />
                </div>
                <div className="flex items-end">
                  <Button>
                    <Search className="h-4 w-4 mr-2" />
                    Track Order
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sample Order Status */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Order #ORD-87654321</CardTitle>
                  <CardDescription>Placed on December 15, 2024</CardDescription>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  In Production
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Order Progress */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm">Order Confirmed</h3>
                  <p className="text-xs text-muted-foreground">Dec 15, 10:30 AM</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm">In Production</h3>
                  <p className="text-xs text-muted-foreground">Dec 15, 2:15 PM</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <Package className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm">Quality Check</h3>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <Truck className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm">Shipped</h3>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
              </div>

              <Separator />

              {/* Order Items */}
              <div className="space-y-4">
                <h3 className="font-semibold">Order Items</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 p-3 border rounded-lg">
                    <div className="w-12 h-12 bg-muted rounded-md"></div>
                    <div className="flex-1">
                      <p className="font-medium">Corporate Business Cards</p>
                      <p className="text-sm text-muted-foreground">Quantity: 500 pieces</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹4,000</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 border rounded-lg">
                    <div className="w-12 h-12 bg-muted rounded-md"></div>
                    <div className="flex-1">
                      <p className="font-medium">Restaurant Banner</p>
                      <p className="text-sm text-muted-foreground">Size: 6x4 feet</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₹1,200</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Delivery Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Delivery Address</span>
                  </h3>
                  <div className="text-sm space-y-1">
                    <p className="font-medium">John Doe</p>
                    <p>123 Business Street</p>
                    <p>Mumbai, Maharashtra - 400001</p>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>Estimated Delivery</span>
                  </h3>
                  <div className="text-sm">
                    <p className="font-medium text-green-600">December 18, 2024</p>
                    <p className="text-muted-foreground">Standard Delivery (3-5 days)</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Invoice
                </Button>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Our customer support team is here to assist you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                    <p className="text-xs text-muted-foreground">Mon-Sat 9AM-7PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Mail className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-muted-foreground">support@Brahmani prints.com</p>
                    <p className="text-xs text-muted-foreground">24/7 Support</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
