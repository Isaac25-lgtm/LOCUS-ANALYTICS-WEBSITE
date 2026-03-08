"use client";

import {
  Layers,
  Code2,
  Database,
  Brain,
  GitBranch,
  Server,
  Activity,
  Users,
} from "lucide-react";
import { capabilities } from "@/content/capabilities";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Code2,
  Database,
  Brain,
  GitBranch,
  Server,
  Activity,
  Users,
};

export default function CapabilitiesPageContent() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-navy-900 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
              Capabilities
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              What We Do
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Technical capabilities and domain expertise we bring to every
              engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {capabilities.map((capability) => {
              const Icon = iconMap[capability.icon] || Layers;
              return (
                <div
                  key={capability.title}
                  className="rounded-xl border border-slate-200 bg-white p-8 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      {capability.title}
                    </h2>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-slate-500"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
