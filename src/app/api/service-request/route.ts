import { NextRequest, NextResponse } from "next/server";
import { serviceRequestSchema } from "@/lib/validation";
import nodemailer from "nodemailer";

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please wait a moment and try again." },
        { status: 429 }
      );
    }

    // Parse and validate
    const body = await request.json();
    const result = serviceRequestSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0];
      return NextResponse.json(
        {
          success: false,
          error: firstError?.message || "Invalid form data. Please check your inputs.",
        },
        { status: 400 }
      );
    }

    const { fullName, phone, address, services, details } = result.data;

    // Build email content
    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });

    const servicesList = services.map((s) => `  • ${s}`).join("\n");

    const emailText = `
NEW HVAC SERVICE REQUEST — ARMADA HVAC
${"=".repeat(50)}

CUSTOMER INFORMATION
  Name:    ${fullName}
  Phone:   ${phone}
  Address: ${address}

SELECTED SERVICES
${servicesList}

ADDITIONAL DETAILS
  ${details?.trim() || "None provided"}

SUBMISSION TIME
  ${timestamp}

${"=".repeat(50)}
This request was submitted through the Armada HVAC website.
    `.trim();

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;">
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#10243A,#1769AA);padding:32px 24px;text-align:center;">
      <h1 style="color:#ffffff;font-size:22px;margin:0 0 4px;">New Service Request</h1>
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:0;">Armada HVAC — Dayton, Ohio</p>
    </div>
    
    <!-- Customer Info -->
    <div style="padding:24px;">
      <h2 style="color:#10243A;font-size:16px;border-bottom:2px solid #1769AA;padding-bottom:8px;margin:0 0 16px;">Customer Information</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr>
          <td style="padding:8px 0;color:#64748b;width:80px;vertical-align:top;">Name</td>
          <td style="padding:8px 0;color:#0f172a;font-weight:600;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#64748b;vertical-align:top;">Phone</td>
          <td style="padding:8px 0;color:#0f172a;font-weight:600;">${phone}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#64748b;vertical-align:top;">Address</td>
          <td style="padding:8px 0;color:#0f172a;font-weight:600;">${address}</td>
        </tr>
      </table>
    </div>

    <!-- Services -->
    <div style="padding:0 24px 24px;">
      <h2 style="color:#10243A;font-size:16px;border-bottom:2px solid #1769AA;padding-bottom:8px;margin:0 0 16px;">Selected Services</h2>
      <div>
        ${services
          .map(
            (s) =>
              `<div style="display:inline-block;background:#e8f4fd;color:#1769AA;padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600;margin:0 6px 8px 0;">${s}</div>`
          )
          .join("")}
      </div>
    </div>

    <!-- Details -->
    ${
      details?.trim()
        ? `
    <div style="padding:0 24px 24px;">
      <h2 style="color:#10243A;font-size:16px;border-bottom:2px solid #1769AA;padding-bottom:8px;margin:0 0 16px;">Additional Details</h2>
      <p style="color:#334155;font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap;">${details}</p>
    </div>
    `
        : ""
    }

    <!-- Footer -->
    <div style="background:#f4f6f8;padding:16px 24px;border-top:1px solid #e2e8f0;font-size:12px;color:#64748b;text-align:center;">
      <p style="margin:0 0 4px;">Submitted: ${timestamp}</p>
      <p style="margin:0;">Armada HVAC Website — Service Request Form</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Check if email credentials are configured
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO;

    if (emailUser && emailPass && emailTo) {
      // Send email via SMTP (Gmail App Password or other SMTP)
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      await transporter.sendMail({
        from: `"Armada HVAC Website" <${emailUser}>`,
        to: emailTo,
        subject: `New HVAC Service Request — ${fullName}`,
        text: emailText,
        html: emailHtml,
        replyTo: undefined, // No customer email collected
      });

      return NextResponse.json({
        success: true,
        message: "Service request submitted and email sent successfully.",
      });
    } else {
      // Email not configured - log the request and return success
      console.log("=== SERVICE REQUEST RECEIVED (Email not configured) ===");
      console.log(emailText);
      console.log("=== END SERVICE REQUEST ===");

      return NextResponse.json({
        success: true,
        message:
          "Service request received. Email delivery will be active once configured.",
      });
    }
  } catch (error) {
    console.error("Service request error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please call us directly at (937) 241-4909.",
      },
      { status: 500 }
    );
  }
}
