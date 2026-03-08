import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.legalName}. The terms and conditions governing use of our website and services.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main>
      <section className="bg-navy-900 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                By accessing or using the website and services of{" "}
                {SITE.legalName} (&quot;Locus Analytics,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;), you agree to be bound by
                these Terms of Service. If you do not agree to these terms,
                please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                2. Services
              </h2>
              <p className="mt-3">
                Locus Analytics provides data science, software development, AI
                integration, and analytics consulting services. The specific
                scope, deliverables, timelines, and fees for any engagement are
                defined in separate service agreements between Locus Analytics
                and its clients.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                3. Intellectual Property
              </h2>
              <p className="mt-3">
                All content on this website, including text, graphics, logos,
                and software, is the property of {SITE.legalName} or its
                content suppliers and is protected by applicable intellectual
                property laws. You may not reproduce, distribute, or create
                derivative works from this content without our written
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                4. Use of Website
              </h2>
              <p className="mt-3">
                You agree to use this website only for lawful purposes and in a
                manner that does not infringe the rights of, or restrict the use
                and enjoyment of, this website by any third party. Prohibited
                conduct includes transmitting malicious code, attempting
                unauthorized access, or misrepresenting your identity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                5. Limitation of Liability
              </h2>
              <p className="mt-3">
                Locus Analytics shall not be liable for any indirect, incidental,
                special, or consequential damages arising out of or in connection
                with the use of our website or services. Our total liability for
                any claim related to our services shall not exceed the fees paid
                by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                6. Confidentiality
              </h2>
              <p className="mt-3">
                Any information shared with us through our contact forms or
                during project discussions is treated as confidential. We will
                not disclose your business information to third parties without
                your consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                7. Governing Law
              </h2>
              <p className="mt-3">
                These Terms of Service are governed by and construed in
                accordance with the laws of the Republic of Uganda. Any disputes
                arising from these terms shall be subject to the exclusive
                jurisdiction of the courts of Uganda.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                8. Changes to Terms
              </h2>
              <p className="mt-3">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be posted on this page with an updated
                revision date. Your continued use of our website after any
                changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                9. Contact
              </h2>
              <p className="mt-3">
                Questions about these Terms of Service may be directed to:
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
