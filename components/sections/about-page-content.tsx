"use client";

import { aboutContent } from "@/content/site-content";
import { METRICS } from "@/lib/constants";

export default function AboutPageContent() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-navy-900 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
              About
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              {aboutContent.heading}
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              {aboutContent.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Metrics bar */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {METRICS.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-3xl font-bold text-brand-600">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="accent-line mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Story</h2>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            {aboutContent.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="accent-line mb-4" />
            <h2 className="text-3xl font-bold text-slate-900">Our Values</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {aboutContent.values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
