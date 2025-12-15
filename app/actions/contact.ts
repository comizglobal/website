"use server";

import { Resend } from "resend";
import { contactFormSchema, type ContactFormData } from "@/lib/validators";

export interface ContactFormResponse {
  success: boolean;
  message: string;
  messageId?: string;
  error?: string;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactFormResponse> {
  try {
    // Validate input data server-side
    const validation = contactFormSchema.safeParse(data);

    if (!validation.success) {
      return {
        success: false,
        message: "Invalid form data. Please check your inputs.",
        error: validation.error.flatten().fieldErrors.toString(),
      };
    }

    // Check environment variable
    if (
      !process.env.RESEND_API_KEY ||
      process.env.RESEND_API_KEY === "dummy-key-for-build"
    ) {
      return {
        success: false,
        message:
          "Email service is temporarily unavailable. Please contact us directly at comiz.global@gmail.com",
        error: "RESEND_API_KEY not configured",
      };
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { fullName, country, email, whatsapp, message } = validation.data;

    console.log("📧 Attempting to send email via Resend...");

    // Send email with verified domain
    const { data: emailData, error } = await resend.emails.send({
      from: "Comiz Global <no-reply@comizglobal.com>",
      to: ["contact@comizglobal.com"],
      replyTo: email,
      subject: `New Inquiry from CoMiz Global Website - ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: #1A281F;
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #059669;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                background: white;
                padding: 10px;
                border-radius: 4px;
                border-left: 3px solid #10B981;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #E2E8F0;
                font-size: 12px;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">CoMiz Global Website</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Full Name:</span>
                  <div class="value">${fullName}</div>
                </div>

                ${
                  country
                    ? `
                <div class="field">
                  <span class="label">Country:</span>
                  <div class="value">${country}</div>
                </div>
                `
                    : ""
                }

                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>

                ${
                  whatsapp
                    ? `
                <div class="field">
                  <span class="label">WhatsApp:</span>
                  <div class="value">${whatsapp}</div>
                </div>
                `
                    : ""
                }

                <div class="field">
                  <span class="label">Message:</span>
                  <div class="value">${message.replace(/\n/g, "<br>")}</div>
                </div>

                <div class="footer">
                  <p><strong>Timestamp:</strong> ${new Date().toLocaleString(
                    "en-US",
                    {
                      dateStyle: "full",
                      timeStyle: "long",
                    },
                  )}</p>
                  <p>This email was sent from the CoMiz Global contact form at comizglobal.com</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Handle Resend errors
    if (error) {
      console.error("❌ Resend API error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));
      return {
        success: false,
        message:
          "Failed to send email. Please try again or contact us directly.",
        error: error.message || "Unknown Resend error",
      };
    }

    // Success response
    console.log("✅ Email sent successfully!");
    console.log("Message ID:", emailData?.id);
    return {
      success: true,
      message:
        "Message sent successfully! We will get back to you within 24 hours.",
      messageId: emailData?.id,
    };
  } catch (error) {
    console.error("Contact form server action error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
