import { type NextRequest, NextResponse } from "next/server"
// import crypto from "crypto"

export async function POST(request: NextRequest) {
    return NextResponse.json({ success: false, error: "Invalid signature" }, { status: 400 })
}
// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body

//     if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
//       return NextResponse.json({ success: false, error: "Missing required parameters" }, { status: 400 })
//     }

//     const key_secret = process.env.RAZORPAY_KEY_SECRET
//     if (!key_secret) {
//       throw new Error("Razorpay key secret not configured")
//     }

//     // Create signature
//     const body_string = razorpay_order_id + "|" + razorpay_payment_id
//     const expected_signature = crypto.createHmac("sha256", key_secret).update(body_string).digest("hex")

//     // Verify signature
//     const is_authentic = expected_signature === razorpay_signature

//     if (is_authentic) {
//       // Here you would typically:
//       // 1. Update your database with payment details
//       // 2. Send confirmation emails
//       // 3. Update order status

//       return NextResponse.json({
//         success: true,
//         message: "Payment verified successfully",
//         payment_id: razorpay_payment_id,
//       })
//     } else {
//       return NextResponse.json({ success: false, error: "Invalid signature" }, { status: 400 })
//     }
//   } catch (error) {
//     console.error("Error verifying payment:", error)
//     return NextResponse.json({ success: false, error: "Payment verification failed" }, { status: 500 })
//   }
// }
