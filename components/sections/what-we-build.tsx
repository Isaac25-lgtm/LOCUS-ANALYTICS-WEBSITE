import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  GraduationCap,
  FileCheck,
  GitBranch,
  Database,
  Brain,
} from "lucide-react";
import { systems } from "@/content/systems";
import { whatWeBuildContent } from "@/content/site-content";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  GraduationCap,
  FileCheck,
  GitBranch,
  Database,
  Brain,
};

const systemImages: Record<string, string> = {
  "ai-decision-support":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
  "data-pipelines":
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop",
  "workflow-alerts":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
  "hmis-health-dashboards":
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",
  "education-management":
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&auto=format&fit=crop",
  "tax-compliance-automation":
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop",
};

const displayOrder = [
  "ai-decision-support",
  "data-pipelines",
  "workflow-alerts",
  "hmis-health-dashboards",
  "education-management",
  "tax-compliance-automation",
];

export default function WhatWeBuild() {
  const orderedSystems = displayOrder
    .map((slug) => systems.find((s) => s.slug === slug))
    .filter(Boolean) as typeof systems;

  return (
    <section className="pt-10 pb-10 md:pt-14 md:pb-14 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-8">
          <div className="accent-line mb-3" />
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            {whatWeBuildContent.heading}
          </h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            {whatWeBuildContent.subheading}
          </p>
        </div>

        {/* Systems grid - 2 rows of 3 */}
        <div className="grid gap-4 md:grid-cols-3">
          {orderedSystems.map((system) => {
            const Icon = iconMap[system.icon] || Activity;
            const imageUrl = systemImages[system.slug];
            return (
              <Link
                key={system.slug}
                href={`/systems#${system.slug}`}
                className="group relative rounded-lg overflow-hidden h-64 md:h-72"
              >
                <Image
                  src={imageUrl}
                  alt={system.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-brand-600/90 text-white mb-2">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-white drop-shadow-lg">
                    {system.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/90 leading-relaxed line-clamp-2 drop-shadow-md">
                    {system.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
