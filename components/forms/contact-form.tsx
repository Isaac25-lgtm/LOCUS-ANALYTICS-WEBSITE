"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  contactFormSchema,
  type ContactFormValues,
  SECTOR_OPTIONS,
} from "@/lib/validators";

type FormType = "general" | "demo" | "engineer";

interface ContactFormProps {
  type?: FormType;
}

const TYPE_LABELS: Record<FormType, string> = {
  general: "General Inquiry",
  demo: "Request a Demo",
  engineer: "Talk to an Engineer",
};

const inputClasses =
  "w-full border border-slate-300 rounded-md px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-600 focus:ring-1 focus:ring-brand-600 transition outline-none";

const labelClasses = "text-sm font-medium text-slate-700 mb-1.5 block";

const errorClasses = "text-xs text-red-600 mt-1";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({ type = "general" }: ContactFormProps) {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormValues, string>>
  >({});
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    organization: "",
    phone: "",
    sector: "",
    message: "",
    honeypot: "",
  });

  function updateField(field: keyof ContactFormValues, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Honeypot check -- bots fill hidden fields
    if (formData.honeypot) return;

    setErrors({});
    setStatus("submitting");

    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormValues, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      setStatus("idle");
      return;
    }

    try {
      // Build mailto link as a fallback for static sites
      const subject = encodeURIComponent(
        `[${TYPE_LABELS[type]}] from ${result.data.name} - ${result.data.organization}`
      );
      const body = encodeURIComponent(
        `Name: ${result.data.name}\nEmail: ${result.data.email}\nOrganization: ${result.data.organization}\nPhone: ${result.data.phone || "Not provided"}\nSector: ${result.data.sector}\n\nMessage:\n${result.data.message}`
      );
      window.location.href = `mailto:info@locusanalytics.co?subject=${subject}&body=${body}`;

      setStatus("success");
      setServerMessage(
        "Your email client has been opened with the message. If it didn't open, please email us directly at info@locusanalytics.co"
      );
    } catch {
      setStatus("error");
      setServerMessage("An unexpected error occurred. Please try again.");
    }
  }

  // ── Success state ──────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 px-6 py-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900">Thank you</h3>
        <p className="mt-1 text-sm text-slate-600">
          {serverMessage ||
            "We've received your message and will be in touch shortly."}
        </p>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Error banner */}
      {status === "error" && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <p className="font-medium">Something went wrong</p>
          <p className="mt-0.5 text-xs">
            {serverMessage || "Please try again or contact us directly."}
          </p>
        </div>
      )}

      {/* Type badge */}
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {TYPE_LABELS[type]}
      </p>

      {/* Row 1: Name / Email */}
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClasses}>
            Full name
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={cn(inputClasses, errors.name && "border-red-400")}
          />
          {errors.name && <p className={errorClasses}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="cf-email" className={labelClasses}>
            Work email
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={cn(inputClasses, errors.email && "border-red-400")}
          />
          {errors.email && <p className={errorClasses}>{errors.email}</p>}
        </div>
      </div>

      {/* Row 2: Organization / Phone */}
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="cf-org" className={labelClasses}>
            Organization
          </label>
          <input
            id="cf-org"
            type="text"
            autoComplete="organization"
            placeholder="Acme Corp"
            value={formData.organization}
            onChange={(e) => updateField("organization", e.target.value)}
            className={cn(
              inputClasses,
              errors.organization && "border-red-400"
            )}
          />
          {errors.organization && (
            <p className={errorClasses}>{errors.organization}</p>
          )}
        </div>

        <div>
          <label htmlFor="cf-phone" className={labelClasses}>
            Phone{" "}
            <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={cn(inputClasses, errors.phone && "border-red-400")}
          />
          {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
        </div>
      </div>

      {/* Sector */}
      <div>
        <label htmlFor="cf-sector" className={labelClasses}>
          Sector
        </label>
        <select
          id="cf-sector"
          value={formData.sector}
          onChange={(e) => updateField("sector", e.target.value)}
          className={cn(
            inputClasses,
            "appearance-none bg-white",
            !formData.sector && "text-slate-400",
            errors.sector && "border-red-400"
          )}
        >
          <option value="" disabled>
            Select your sector
          </option>
          {SECTOR_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.sector && <p className={errorClasses}>{errors.sector}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="Tell us about your project or question..."
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={cn(
            inputClasses,
            "resize-y",
            errors.message && "border-red-400"
          )}
        />
        {errors.message && <p className={errorClasses}>{errors.message}</p>}
      </div>

      {/* Honeypot -- invisible to real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="cf-hp">Do not fill this field</label>
        <input
          id="cf-hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => updateField("honeypot", e.target.value)}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "w-full rounded-md bg-brand-600 px-4 py-3 text-sm font-medium text-white transition",
          "hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        {status === "submitting" ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
