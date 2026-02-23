import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 20% 20%, rgba(47, 100, 230, 0.05) 0%, transparent 50%)`,
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20 pt-24 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">

          {/* ========================
              LEFT — HERO CONTENT
              ======================== */}
          <div
            className={`max-w-xl transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Eyebrow */}
            <div
              className="mono text-[11px] uppercase tracking-[0.18em] mb-6"
              style={{ color: 'hsl(215 40% 55%)' }}
            >
              Operational Systems & Data Infrastructure
            </div>

            {/* Headline */}
            <h1 className="font-sans text-[3.25rem] sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.25rem] font-semibold text-foreground leading-[0.92] tracking-[-0.025em] mb-5">
              Locus
              <br />
              <span className="text-gradient">Analytics</span>
            </h1>

            {/* Supporting text */}
            <p
              className={`text-[16px] lg:text-[17px] leading-[1.65] mb-8 max-w-md transition-all duration-700 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ color: 'hsl(215 10% 55%)' }}
            >
              Intelligent systems for healthcare, education, and business.
              Built for Uganda. Ready for scale.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={() => { trackEvent('hero_cta_click'); scrollToSection('#systems'); }}
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Explore systems
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary"
              >
                Request a demo
              </button>
            </div>

            {/* Trust indicators */}
            <div
              className={`flex items-center gap-5 mt-12 transition-all duration-700 delay-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border border-background flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, hsl(222 30% 18%) 0%, hsl(222 30% 14%) 100%)`,
                    }}
                  >
                    <span className="text-[10px] font-medium text-foreground/60">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-[13px]" style={{ color: 'hsl(215 10% 48%)' }}>
                <span className="text-foreground/90 font-medium">50+</span>{' '}
                projects delivered
              </div>
            </div>
          </div>

          {/* ========================
              RIGHT — FULL HERO PHOTO
              ======================== */}
          <div
            className={`relative transition-all duration-700 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Outer ambient glow — very soft */}
            <div
              className="absolute -inset-6 rounded-3xl blur-[60px] opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(47,100,230,0.18) 0%, transparent 70%)' }}
            />

            {/* Photo container — full fill, no overlays */}
            <div
              className="relative overflow-hidden"
              style={{
                height: 'clamp(480px, 58vh, 660px)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: `
                  0 1px 0 0 rgba(255,255,255,0.06) inset,
                  0 40px 80px -20px rgba(0,0,0,0.7)
                `,
              }}
            >
              {/* The photo — full coverage */}
              <img
                src="/hero-image.jpg"
                alt="Locus Analytics — technology professionals at work"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: 'center 30%',
                  filter: 'brightness(0.78) saturate(0.85) contrast(1.05)',
                }}
                loading="eager"
                decoding="async"
              />

              {/* Left edge fade — blends photo into page background */}
              <div
                className="absolute inset-y-0 left-0 w-16 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, hsl(222 16% 4%) 0%, transparent 100%)',
                }}
              />

              {/* Bottom edge fade — grounds the image */}
              <div
                className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, hsl(222 16% 4%) 0%, transparent 100%)',
                }}
              />

              {/* Very subtle overall tint to push photo into the dark theme */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'rgba(15, 20, 40, 0.12)' }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
