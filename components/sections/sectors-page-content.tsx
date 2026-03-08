"use client";

import {
  Heart,
  BookOpen,
  Building2,
  Landmark,
  BarChart3,
} from "lucide-react";
import { sectors } from "@/content/sectors";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  BookOpen,
  Building2,
  Landmark,
  BarChart3,
};

export default function SectorsPageContent() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-navy-900 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
              Sectors
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Deep domain expertise across healthcare, education, business,
              public sector, and data-intensive organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors list */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {sectors.map((sector) => {
              const Icon = iconMap[sector.icon] || BarChart3;
              return (
                <div
                  key={sector.slug}
                  id={sector.slug}
                  className="scroll-mt-24"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {sector.title}
                    </h2>
                  </div>

                  <p className="text-slate-600 leading-relaxed max-w-3xl mb-10">
                    {sector.longDescription}
                  </p>

                  <div className="grid gap-8 md:grid-cols-3">
                    {/* Challenges */}
                    <div className="rounded-xl border border-slate-200 p-6">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">
                        Challenges
                      </h3>
                      <ul className="space-y-3">
                        {sector.challenges.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div className="rounded-xl border border-slate-200 p-6">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">
                        Outcomes
                      </h3>
                      <ul className="space-y-3">
                        {sector.outcomes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Related systems */}
                    <div className="rounded-xl border border-slate-200 p-6">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4">
                        Related Systems
                      </h3>
                      <ul className="space-y-3">
                        {sector.systems.map((system) => (
                          <li
                            key={system}
                            className="text-sm font-medium text-brand-600"
                          >
                            {system}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mt-20 h-px bg-slate-200" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
