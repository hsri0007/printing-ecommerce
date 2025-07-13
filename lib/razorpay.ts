import Razorpay from "razorpay"

if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || !process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET) {
  throw new Error("Razorpay credentials are not configured")
}

export const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET,
})

export interface CreateOrderOptions {
  amount: number
  currency?: string
  receipt?: string
  notes?: Record<string, string>
}

export async function createRazorpayOrder(options: CreateOrderOptions) {
  try {
    const order = await razorpay.orders.create({
      amount: Math.round(options.amount * 100), // Convert to paise
      currency: options.currency || "INR",
      receipt: options.receipt,
      notes: options.notes,
    })

    return {
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
      },
    }
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create order",
    }
  }
}

export function verifyRazorpaySignature(orderId: string, paymentId: string, signature: string): boolean {
  try {
    const crypto = require("crypto")
    const expectedSignature = crypto
      .createHmac("sha256", process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET)
      .update(`${orderId}|${paymentId}`)
      .digest("hex")

    return expectedSignature === signature
  } catch (error) {
    console.error("Error verifying signature:", error)
    return false
  }
}
