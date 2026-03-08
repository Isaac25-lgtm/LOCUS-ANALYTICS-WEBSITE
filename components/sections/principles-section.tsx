import { Shield, Eye, FileText, Headphones } from "lucide-react";
import { principles } from "@/content/principles";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Eye,
  FileText,
  Headphones,
};

export default function PrinciplesSection() {
  return (
    <section className="pt-10 pb-10 md:pt-14 md:pb-14 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: header */}
          <div className="lg:col-span-1">
            <div className="accent-line mb-3" />
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              How We Operate
            </h2>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Principles that guide every system we design, deploy, and maintain.
            </p>
          </div>

          {/* Right: 4 principle cards */}
          <div className="lg:col-span-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = iconMap[principle.icon] || Shield;
              return (
                <div
                  key={principle.title}
                  className="rounded-lg border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-slate-900">
                    {principle.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
