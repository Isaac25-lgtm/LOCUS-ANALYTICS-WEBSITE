"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    tag: "Intelligent Systems",
    headline: "Building serious systems for serious institutions.",
    description:
      "Production-grade software, data infrastructure, and AI-integrated platforms for healthcare, education, and enterprise.",
    cta: { label: "Explore Our Systems", href: "/systems" },
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90&auto=format&fit=crop",
  },
  {
    tag: "Healthcare Technology",
    headline: "Data-driven health systems for Uganda and beyond.",
    description:
      "HMIS dashboards, DHIS2 integration, surveillance tools, and clinical decision support built for African health systems.",
    cta: { label: "Healthcare Solutions", href: "/sectors#healthcare" },
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=90&auto=format&fit=crop",
  },
  {
    tag: "Enterprise Solutions",
    headline: "Tax automation, workflow engines, and compliance platforms.",
    description:
      "EFRIS integration and custom workflow automation. The operational backbone enterprises depend on.",
    cta: { label: "Business Systems", href: "/sectors#business" },
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=90&auto=format&fit=crop",
  },
  {
    tag: "Data & AI",
    headline: "From raw data to operational intelligence.",
    description:
      "ETL pipelines, data warehousing, predictive models, and AI assistants embedded where they create measurable value.",
    cta: { label: "Our Capabilities", href: "/capabilities" },
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1920&q=90&auto=format&fit=crop",
  },
];

const INTERVAL = 3500;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[460px] md:h-[500px] lg:h-[540px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide ${i === current ? "active" : ""}`}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
              <div className="max-w-xl">
                <p className="inline-block rounded-full bg-brand-600/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
                  {slide.tag}
                </p>
                <h1 className="mt-4 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl drop-shadow-lg">
                  {slide.headline}
                </h1>
                <p className="mt-3 text-sm text-white/90 leading-relaxed md:text-base max-w-lg drop-shadow-md">
                  {slide.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={slide.cta.href}
                    className="inline-flex items-center rounded-md bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors shadow-lg"
                  >
                    {slide.cta.label}
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-md bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/30 transition-colors"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="absolute bottom-5 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-brand-500"
                    : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
