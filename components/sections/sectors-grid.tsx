import Link from "next/link";
import Image from "next/image";
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

// Carefully chosen images that unmistakably represent each sector
const sectorImages: Record<string, string> = {
  // Healthcare: nurse at a hospital workstation with monitors — clinical operations
  healthcare:
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80&auto=format&fit=crop",
  // Education: university lecture hall with students — academic environment
  education:
    "https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&q=80&auto=format&fit=crop",
  // Business: modern office with team at work — enterprise operations
  business:
    "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80&auto=format&fit=crop",
  // Public Sector: government/institutional building — official, administrative
  "public-sector":
    "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&q=80&auto=format&fit=crop",
  // Data & AI: team analyzing data on screens — analytics operations
  "data-ai":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
};

export default function SectorsGrid() {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-8">
          <div className="accent-line mb-3" />
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Sectors We Serve
          </h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Deep domain expertise across healthcare, education, business, and
            public-sector technology.
          </p>
        </div>

        {/* Top row: 2 large cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {sectors.slice(0, 2).map((sector) => {
            const Icon = iconMap[sector.icon] || BarChart3;
            const imageUrl = sectorImages[sector.slug];
            return (
              <Link
                key={sector.slug}
                href={`/sectors#${sector.slug}`}
                className="group relative rounded-lg overflow-hidden h-64 md:h-72"
              >
                <Image
                  src={imageUrl}
                  alt={sector.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur-sm mb-2">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {sector.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/85 leading-relaxed line-clamp-2 max-w-sm">
                    {sector.description}
                  </p>
                  <span className="mt-2 text-xs font-semibold text-brand-300 group-hover:text-brand-200 transition-colors">
                    Explore sector &rarr;
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom row: 3 cards */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {sectors.slice(2).map((sector) => {
            const Icon = iconMap[sector.icon] || BarChart3;
            const imageUrl = sectorImages[sector.slug];
            return (
              <Link
                key={sector.slug}
                href={`/sectors#${sector.slug}`}
                className="group relative rounded-lg overflow-hidden h-56"
              >
                <Image
                  src={imageUrl}
                  alt={sector.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5" />
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur-sm mb-2">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {sector.title}
                  </h3>
                  <p className="mt-1 text-[11px] text-white/80 leading-relaxed line-clamp-2">
                    {sector.description}
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
