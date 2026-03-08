import { PROCESS_STEPS } from "@/lib/constants";
import { processContent } from "@/content/site-content";

export default function ProcessSection() {
  return (
    <section className="pt-10 pb-10 md:pt-14 md:pb-14 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: header */}
          <div className="lg:col-span-1">
            <div className="accent-line mb-3" />
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {processContent.heading}
            </h2>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              {processContent.subheading}
            </p>
          </div>

          {/* Right: 4 steps */}
          <div className="lg:col-span-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step}>
                <span className="text-3xl font-bold text-slate-200">
                  {step.step}
                </span>
                <h3 className="mt-1 text-sm font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
