import { NextResponse } from "next/server";

const WEBHOOK_URL = "https://n8n.srv1336580.hstgr.cloud/webhook/boldflow-data";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message, budget, honeypot } = body;

    // Spam honeypot trap: if honeypot is filled out, reject silently
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Received" }, { status: 200 });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid business email address." },
        { status: 400 }
      );
    }

    if (!company || typeof company !== "string" || company.trim().length < 1) {
      return NextResponse.json(
        { error: "Please provide your company or brand name." },
        { status: 400 }
      );
    }

    if (!service || typeof service !== "string") {
      return NextResponse.json(
        { error: "Please select a service of interest." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a brief project description (at least 10 characters)." },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      service: service.trim(),
      budget: budget ? String(budget).trim() : "Not specified",
      message: message.trim(),
      source: "website_contact_form",
      submittedAt: new Date().toISOString(),
    };

    // Forward to webhook with a 6-second timeout
    let webhookOk = false;
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const webhookResponse = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (webhookResponse.ok) {
        webhookOk = true;
      } else {
        console.warn("Primary webhook returned status:", webhookResponse.status);
      }
    } catch (webhookErr) {
      console.warn("Primary webhook fetch failed or timed out:", webhookErr);
    }

    // Always succeed if validated, even if remote webhook times out, but log payload for fail-safe
    // If you wish to notify failure when webhook is down, we return 200 with webhook status note
    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received. We will contact you within 24 hours.",
        webhookDelivered: webhookOk,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("API /api/contact error:", err);
    return NextResponse.json(
      { error: "Failed to process enquiry. Please email hello@boldflowlabs.com directly." },
      { status: 500 }
    );
  }
}
