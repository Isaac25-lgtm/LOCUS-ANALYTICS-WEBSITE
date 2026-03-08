"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/validators";

type FormType = "general" | "demo" | "engineer";

interface ActionResult {
  success: boolean;
  message: string;
}

/**
 * Sanitize a string by trimming whitespace and encoding HTML entities
 * to prevent XSS when values are stored or rendered elsewhere.
 */
function sanitize(value: string): string {
  return value
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeFormData(
  data: ContactFormValues,
): ContactFormValues {
  return {
    name: sanitize(data.name),
    email: sanitize(data.email),
    organization: sanitize(data.organization),
    phone: data.phone ? sanitize(data.phone) : "",
    sector: sanitize(data.sector),
    message: sanitize(data.message),
    honeypot: data.honeypot,
  };
}

export async function submitContactForm(
  data: ContactFormValues,
  type: FormType = "general",
): Promise<ActionResult> {
  try {
    // ── Validate ───────────────────────────────────────────────────
    const parsed = contactFormSchema.safeParse(data);

    if (!parsed.success) {
      return {
        success: false,
        message: "Validation failed. Please check your inputs and try again.",
      };
    }

    // ── Honeypot check ─────────────────────────────────────────────
    if (parsed.data.honeypot) {
      // Silently accept to avoid tipping off bots
      return { success: true, message: "Thank you for your submission." };
    }

    // ── Rate limiting (future implementation) ──────────────────────
    // TODO: Implement rate limiting per IP / email using an in-memory
    // store or Redis. For now this is a placeholder.

    // ── Sanitize ───────────────────────────────────────────────────
    const clean = sanitizeFormData(parsed.data);

    // ── Process submission ─────────────────────────────────────────
    // Future: send email notification, write to CRM, etc.
    console.log("[contact-form]", {
      type,
      name: clean.name,
      email: clean.email,
      organization: clean.organization,
      phone: clean.phone || "(not provided)",
      sector: clean.sector,
      message: clean.message,
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      message:
        "Thank you for reaching out. A member of our team will be in touch within one business day.",
    };
  } catch (error) {
    console.error("[contact-form] Submission error:", error);
    return {
      success: false,
      message: "An internal error occurred. Please try again later.",
    };
  }
}
