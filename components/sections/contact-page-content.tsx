"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { ContactForm } from "@/components/forms/contact-form";

export default function ContactPageContent() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-navy-900 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Ready to discuss a project? Have questions about our capabilities?
              We&apos;d like to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact info */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="accent-line mb-6" />
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <a
                      href={`mailto:${SITE.email.primary}`}
                      className="text-sm text-brand-600 hover:text-brand-700"
                    >
                      {SITE.email.primary}
                    </a>
                    <br />
                    <a
                      href={`mailto:${SITE.email.secondary}`}
                      className="text-sm text-brand-600 hover:text-brand-700"
                    >
                      {SITE.email.secondary}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Phone</p>
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                      className="text-sm text-slate-600"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Office</p>
                    <p className="text-sm text-slate-600">
                      {SITE.address.street}
                      <br />
                      {SITE.address.city}, {SITE.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
