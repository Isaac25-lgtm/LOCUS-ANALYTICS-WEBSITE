import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import { Shield, Lock, Eye, FileCheck, Server, Users } from "lucide-react";

export const metadata = createMetadata({
  title: "Security",
  description: `Security practices and commitments of ${SITE.legalName}. How we protect your data and maintain operational integrity.`,
  path: "/security",
});

const securityPractices = [
  {
    icon: Lock,
    title: "Encryption",
    description:
      "All data in transit is encrypted using TLS 1.2+. Sensitive data at rest is encrypted using AES-256. Database connections use SSL certificates.",
  },
  {
    icon: Shield,
    title: "Access Control",
    description:
      "Role-based access control is enforced across all systems. We follow the principle of least privilege. Multi-factor authentication is required for all administrative access.",
  },
  {
    icon: Eye,
    title: "Monitoring & Logging",
    description:
      "All production systems include structured logging, real-time monitoring, and automated alerting. We maintain audit trails for all data access and system changes.",
  },
  {
    icon: FileCheck,
    title: "Code Quality",
    description:
      "All code undergoes peer review before deployment. We use automated testing, static analysis, and dependency vulnerability scanning as part of our CI/CD pipeline.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description:
      "Production systems are hosted on reputable cloud providers (AWS, Azure) with proper network isolation, automated backups, and disaster recovery procedures.",
  },
  {
    icon: Users,
    title: "Team Practices",
    description:
      "Our team follows security-aware development practices. Access to client data is strictly controlled and limited to personnel directly involved in service delivery.",
  },
];

export default function SecurityPage() {
  return (
    <main>
      {/* Dark header */}
      <section className="bg-navy-900 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
              Security
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Security at Locus Analytics
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Security is foundational to how we build, deploy, and operate
              systems. Our clients, including healthcare organizations, government
              agencies, and enterprises, trust us with sensitive operational
              data. We take that trust seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Security practices grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {securityPractices.map((practice) => (
              <div
                key={practice.title}
                className="rounded-xl border border-slate-200 bg-white p-7 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50">
                  <practice.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-slate-900">
                  {practice.title}
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional info */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 space-y-10 text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Vulnerability Reporting
            </h2>
            <p className="mt-3">
              If you discover a security vulnerability in any of our systems
              or services, please report it responsibly by contacting us at{" "}
              <a
                href={`mailto:${SITE.email.primary}`}
                className="text-brand-600 hover:text-brand-700"
              >
                {SITE.email.primary}
              </a>
              . We take all reports seriously and will respond promptly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Compliance
            </h2>
            <p className="mt-3">
              We design our systems to comply with applicable data protection
              regulations and industry-specific requirements. For healthcare
              systems, we follow health data handling best practices. For
              financial and tax systems, we maintain proper audit controls and
              data integrity measures.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Questions
            </h2>
            <p className="mt-3">
              For security-related questions or to request information about
              our security practices for a specific engagement, contact us at{" "}
              <a
                href={`mailto:${SITE.email.primary}`}
                className="text-brand-600 hover:text-brand-700"
              >
                {SITE.email.primary}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
