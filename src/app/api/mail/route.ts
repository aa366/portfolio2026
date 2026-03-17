import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

// Create a test account or replace with real credentials.

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transport = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    await transport.sendMail({
      from: email,
      to: process.env.MY_EMAIL,
      subject: `message from portfolio-2025`,

      headers: { "X-Entity-Ref-ID": "newmail" },
      html: `
                 <h3>name: ${name}</h3>
    <h3>email: ${email}</h3>
    <p>${message}</p>
                `,
    });

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Email Sent Successfully ${error}` },
      { status: 500 },
    );
  }
}
