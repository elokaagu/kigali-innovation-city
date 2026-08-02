import { NextRequest, NextResponse } from "next/server";

interface InquiryPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject?: string;
  plot?: string;
  message: string;
}

const CONTACT_EMAIL = "c.clulow@innovationcity.rw";

export async function POST(request: NextRequest) {
  try {
    const body: InquiryPayload = await request.json();

    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const inquiryDetails = {
      name: body.name.trim(),
      email: body.email.trim(),
      company: body.company?.trim() ?? "",
      phone: body.phone?.trim() ?? "",
      subject: body.subject?.trim() ?? "General Investment Inquiry",
      plot: body.plot?.trim() ?? "",
      message: body.message.trim(),
      submittedAt: new Date().toISOString(),
    };

    // Send via Resend if API key is configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      const htmlBody = `
        <h2>New Citisquare Investment Inquiry</h2>
        <p><strong>Name:</strong> ${inquiryDetails.name}</p>
        <p><strong>Email:</strong> ${inquiryDetails.email}</p>
        <p><strong>Company:</strong> ${inquiryDetails.company || "—"}</p>
        <p><strong>Phone:</strong> ${inquiryDetails.phone || "—"}</p>
        <p><strong>Subject:</strong> ${inquiryDetails.subject}</p>
        <p><strong>Plot:</strong> ${inquiryDetails.plot || "—"}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p>${inquiryDetails.message.replace(/\n/g, "<br/>")}</p>
      `;

      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? "Citisquare Website <onboarding@resend.dev>",
        to: process.env.INQUIRY_TO_EMAIL ?? CONTACT_EMAIL,
        replyTo: inquiryDetails.email,
        subject: `[Citisquare Inquiry] ${inquiryDetails.subject}`,
        html: htmlBody,
      });
    } else {
      // Log inquiry when Resend is not configured (development / fallback)
      console.log("[Citisquare Inquiry]", JSON.stringify(inquiryDetails, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Citisquare Inquiry Error]", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry. Please email c.clulow@innovationcity.rw directly." },
      { status: 500 }
    );
  }
}
