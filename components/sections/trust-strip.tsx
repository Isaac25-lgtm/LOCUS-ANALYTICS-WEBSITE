import { TRUST_PARTNERS, METRICS } from "@/lib/constants";

export default function TrustStrip() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-7">
        {/* Metrics + Partners in one row on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Metrics */}
          <div className="grid grid-cols-4 gap-4 lg:gap-8 flex-shrink-0">
            {METRICS.map((metric) => (
              <div key={metric.label} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-brand-600 md:text-3xl">{metric.value}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-12 bg-slate-200 flex-shrink-0" />
          <div className="lg:hidden h-px bg-slate-100 my-5" />

          {/* Partners */}
          <div className="flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2.5 lg:mb-0 lg:hidden text-center">
              Trusted By
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2">
              <span className="hidden lg:inline text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mr-2">
                Trusted by
              </span>
              {TRUST_PARTNERS.map((partner) => (
                <span
                  key={partner}
                  className="text-[13px] font-medium text-slate-500"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
