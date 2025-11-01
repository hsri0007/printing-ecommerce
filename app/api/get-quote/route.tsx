import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Quote from "@/models/Quote";
import dbConnect from "@/lib/dbConnect";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();

    const quote = await Quote.create({...body, entity: "brahmani_graphics"});
    // sriharikappera693_db_user
// 9YI7BtqSUrVpY5rr
    // Nodemailer transporter
// const transporter = nodemailer.createTransport({
//     host: "smtp.titan.email",
//  port: 587,
//    secure: false,
//   auth: {
//     user: "info@brahmanigraphics.com",       // e.g., info@yourdomain.com
//     pass: "9603#KAPPsriopt@",       // the password / app-password
//   },
// });
    // verify SMTP connection early (throws on auth failure)
//     await transporter.verify();

//     const mailContent = `
// New Quote Request Received!

// Name: ${body.name}
// Phone: ${body.phone}
// Email: ${body.email}
// Service: ${body.service}

// Message:
// ${body.message}
//     `;

    // await transporter.sendMail({
    //   from: `Brahmani Graphics`,
    //   to: process.env.SMTP_USER,
    //   subject: `New Quote Request – ${body.service}`,
    //   text: mailContent,
    // });

    return NextResponse.json({ success: true, message: "Quote submitted successfully" });
  } catch (error) {
    console.error("Quote API Error:", error);
    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}