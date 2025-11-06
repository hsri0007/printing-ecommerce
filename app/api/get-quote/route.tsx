import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Quote from "@/models/Quote";
import dbConnect from "@/lib/dbConnect";
import { buildQuoteEmail } from "@/components/email-template/email-template";
import { buildThankYouEmail } from "@/components/email-template/thank-you-template";

async function createVerifiedTransport() {


  // Try secure 465 first, then fallback to 587
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const configs = [
    { port: 465, secure: true },
    // { port: 587, secure: false },
  ];

  for (const cfg of configs) {
    const transporter = nodemailer.createTransport({
      host,
      port: cfg.port,
      secure: cfg.secure,
      auth: { user, pass },
      authMethod: "PLAIN",
      tls: {
        // enforce modern TLS and avoid self-signed acceptance in prod
        ciphers: "TLSv1.2",
        rejectUnauthorized: true,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 30_000,
    });
    try {
      await transporter.verify();
      return transporter;
    } catch (err) {
      console.warn(`SMTP verify failed on ${host}:${cfg.port} -> `, err);
    }
  }
  throw new Error("All SMTP connection attempts failed");
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const quote = await Quote.create({ ...body, entity: "brahmani_graphics" });

    // create transporter (uses env vars) and verify
    const transporter = await createVerifiedTransport();

    const { html, text } = buildQuoteEmail(body);

    await transporter.sendMail({
      from: `"Brahmani Graphics" <${process.env.SMTP_USER}>`,
      to: "Brahmanigraphics07@gmail.com",
      subject: `New Quote Request – ${body.service || "Website"}`,
      text,
      html,
    });
      try {
      const thank = buildThankYouEmail({ name: body.name, service: body.service, receivedAt: new Date() });
      await transporter.sendMail({
        from: `"Brahmani Graphics" <${process.env.SMTP_USER}>`,
        to: body.email,
        subject: `We received your quote request — Brahmani Graphics`,
        text: thank.text,
        html: thank.html,
      });
    } catch (sendErr) {
      console.warn("Failed to send thank-you email:", sendErr);
      // don't fail the whole request if thank-you fails
    }


    return NextResponse.json({ success: true, message: "Quote submitted successfully" });
  } catch (error: any) {
    console.error("Quote API Error:", {
      message: error.message,
      code: error.code,
      responseCode: error.responseCode,
    });

    // common actionable hint for auth failure
    if (error?.code === "EAUTH" || error?.responseCode === 535) {
      return NextResponse.json({
        success: false,
        message:
          "SMTP authentication failed. Check SMTP_USER and SMTP_PASS, ensure mailbox SMTP is enabled and credentials are correct.",
      }, { status: 500 });
    }

    return NextResponse.json({ success: false, message: "Server Error" }, { status: 500 });
  }
}