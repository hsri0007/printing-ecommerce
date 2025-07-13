import { type NextRequest, NextResponse } from "next/server"
import { razorpay } from "@/lib/razorpay"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { amount, currency = "INR", receipt, notes } = body

    if (!amount || amount <= 0) {
      return NextResponse.json({ success: false, error: "Invalid amount" }, { status: 400 })
    }

    const options = {
      amount: Math.round(amount * 100), // Convert to paise
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      notes: notes || {},
    }

    const order = await razorpay.orders.create(options)

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
      },
    })
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    return NextResponse.json({ success: false, error: "Failed to create order" }, { status: 500 })
  }
}
