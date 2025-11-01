import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Quote from "@/models/Quote";
import dbConnect from "@/lib/dbConnect";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const quote = await Quote.create(body);

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "info@brahmanigraphics.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailContent = `
New Quote Request Received!

Name: ${quote.name}
Phone: ${quote.phone}
Email: ${quote.email}
Service: ${quote.service}

Message:
${quote.message}
    `;

    await transporter.sendMail({
      from: `"Brahmani Graphics" <info@brahmanigraphics.com>`,
      replyTo: quote.email,
      to: "info@brahmanigraphics.com",
      subject: `New Quote Request – ${quote.service}`,
      text: mailContent,
    });

    return NextResponse.json({ success: true, message: "Quote submitted successfully" });
  } catch (error) {
    console.error("Quote API Error:", error);
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}