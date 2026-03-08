"use client";

import {
  Activity,
  GraduationCap,
  FileCheck,
  GitBranch,
  Database,
  Brain,
} from "lucide-react";
import { systems } from "@/content/systems";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  GraduationCap,
  FileCheck,
  GitBranch,
  Database,
  Brain,
};

export default function SystemsPageContent() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-navy-900 pt-16 pb-16 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
              Systems
            </p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              What We Build
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Operational systems and data infrastructure designed as integrated
              platforms that work together.
            </p>
          </div>
        </div>
      </section>

      {/* Systems list */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {systems.map((system) => {
              const Icon = iconMap[system.icon] || Activity;
              return (
                <div
                  key={system.slug}
                  id={system.slug}
                  className="scroll-mt-24"
                >
                  <div className="grid gap-10 lg:grid-cols-5">
                    {/* Left: info */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">
                          {system.title}
                        </h2>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {system.longDescription}
                      </p>
                    </div>

                    {/* Right: features & tech */}
                    <div className="lg:col-span-2">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2 mb-8">
                        {system.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {system.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mt-16 h-px bg-slate-200" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
