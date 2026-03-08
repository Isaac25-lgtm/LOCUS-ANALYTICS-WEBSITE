import { whyLocusContent } from "@/content/site-content";

export default function WhyLocus() {
  return (
    <section className="py-14 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Two-column: header left, points right */}
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Left: header */}
          <div className="lg:col-span-2">
            <div className="accent-line mb-3" />
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {whyLocusContent.heading}
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              {whyLocusContent.subheading}
            </p>
          </div>

          {/* Right: points grid */}
          <div className="lg:col-span-3 grid gap-6 sm:grid-cols-2">
            {whyLocusContent.points.map((point, i) => (
              <div key={point.title} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-brand-600 text-xs font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
