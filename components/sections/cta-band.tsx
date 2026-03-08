import Link from "next/link";
import { ctaContent } from "@/content/site-content";

export default function CtaBand() {
  return (
    <section className="bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              {ctaContent.heading}
            </h2>
            <p className="mt-1 text-sm text-slate-400 max-w-md">
              {ctaContent.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              href={ctaContent.primaryCta.href}
              className="inline-flex items-center rounded-md bg-brand-600 px-5 py-2 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
            >
              {ctaContent.primaryCta.label}
            </Link>
            <Link
              href={ctaContent.secondaryCta.href}
              className="inline-flex items-center rounded-md border border-white/20 px-5 py-2 text-sm font-medium text-white hover:bg-white/5 transition-colors"
            >
              {ctaContent.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
