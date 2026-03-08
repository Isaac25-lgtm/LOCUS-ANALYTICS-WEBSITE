import Image from "next/image";
import { caseStudies } from "@/content/case-studies";

const caseStudyImages: Record<string, string> = {
  "hmis-district-dashboard":
    "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80&auto=format&fit=crop",
  "efris-tax-automation":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop",
  "education-management-platform":
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format&fit=crop",
  "workflow-automation-ngo":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
  "data-warehouse-healthcare":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&auto=format&fit=crop",
  "ai-document-processing":
    "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&q=80&auto=format&fit=crop",
};

export default function CaseStudiesSection() {
  return (
    <section className="pt-10 pb-10 md:pt-14 md:pb-14 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-8">
          <div className="accent-line mb-3" />
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Selected Work
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Real systems delivering real outcomes for institutions across Uganda.
          </p>
        </div>

        {/* Case studies */}
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => {
            const imageUrl = caseStudyImages[study.slug];
            return (
              <div
                key={study.slug}
                className="rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-200">
                      {study.sector}
                    </p>
                    <h3 className="mt-0.5 text-sm font-semibold text-white leading-snug">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2">
                  {study.metrics.map((metric, i) => (
                    <div
                      key={metric.label}
                      className={`px-4 py-3 ${
                        i < 2 ? "border-b border-slate-100" : ""
                      } ${i % 2 === 0 ? "border-r border-slate-100" : ""}`}
                    >
                      <p className="text-base font-bold text-brand-600">
                        {metric.value}
                      </p>
                      <p className="text-[10px] text-slate-500">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Client */}
                <div className="px-4 py-3 border-t border-slate-100">
                  <p className="text-[10px] text-slate-400">Client</p>
                  <p className="text-xs font-medium text-slate-700">
                    {study.client}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
