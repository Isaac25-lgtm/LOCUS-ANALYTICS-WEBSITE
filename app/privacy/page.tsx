import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.legalName}. How we collect, use, and protect your personal information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main>
      {/* Dark header */}
      <section className="bg-navy-900 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-400">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                1. Introduction
              </h2>
              <p className="mt-3">
                {SITE.legalName} (&quot;Locus Analytics,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) is committed to protecting
                the privacy and security of your personal information. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or engage
                with our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                2. Information We Collect
              </h2>
              <p className="mt-3">
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>Submit a contact or demo request form</li>
                <li>Send us an email or make a phone inquiry</li>
                <li>Engage with us through our services</li>
              </ul>
              <p className="mt-3">
                This information may include your name, email address, phone
                number, organization name, and details about your project or
                inquiry.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                3. How We Use Your Information
              </h2>
              <p className="mt-3">
                We use the information we collect to:
              </p>
              <ul className="mt-3 space-y-2 list-disc pl-6">
                <li>Respond to your inquiries and service requests</li>
                <li>Provide, maintain, and improve our services</li>
                <li>Communicate with you about projects and engagements</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                4. Data Security
              </h2>
              <p className="mt-3">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the Internet or
                electronic storage is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                5. Data Sharing
              </h2>
              <p className="mt-3">
                We do not sell, trade, or rent your personal information to third
                parties. We may share information with trusted service providers
                who assist us in operating our website and conducting our
                business, provided they agree to keep this information
                confidential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                6. Data Retention
              </h2>
              <p className="mt-3">
                We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                including to satisfy legal, accounting, or reporting
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                7. Your Rights
              </h2>
              <p className="mt-3">
                You have the right to access, correct, or delete your personal
                information. To exercise these rights, contact us at{" "}
                <a
                  href={`mailto:${SITE.email.primary}`}
                  className="text-brand-600 hover:text-brand-700"
                >
                  {SITE.email.primary}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                8. Contact
              </h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <div className="mt-3">
                <p className="font-medium text-slate-900">{SITE.legalName}</p>
                <p>{SITE.address.street}</p>
                <p>
                  {SITE.address.city}, {SITE.address.country}
                </p>
                <p>
                  <a
                    href={`mailto:${SITE.email.primary}`}
                    className="text-brand-600 hover:text-brand-700"
                  >
                    {SITE.email.primary}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
