import { architectureContent } from "@/content/site-content";
import { TECH_STACK } from "@/lib/constants";

export default function ArchitectureSection() {
  return (
    <section className="py-14 md:py-20 bg-navy-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Two-column: header + description left, tech right */}
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="accent-line mb-3" />
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {architectureContent.heading}
            </h2>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              {architectureContent.subheading}
            </p>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
              {architectureContent.description}
            </p>
          </div>

          {/* Tech stack grid */}
          <div className="lg:col-span-3 grid gap-6 sm:grid-cols-2">
            {Object.entries(TECH_STACK).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-400 mb-2.5">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
