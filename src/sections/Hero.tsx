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
      className="relative w-full flex items-center overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 20% 20%, rgba(47, 100, 230, 0.05) 0%, transparent 50%)`,
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20 pt-20 pb-4 lg:pt-20 lg:pb-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

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
              className="mono text-[11px] uppercase tracking-[0.18em] mb-4"
              style={{ color: 'hsl(222 90% 55%)' }}
            >
              Operational Systems & Data Infrastructure
            </div>

            {/* Headline */}
            <h1 className="font-sans text-[2.75rem] sm:text-[3.25rem] lg:text-[4rem] xl:text-[4.5rem] font-semibold text-foreground leading-[0.92] tracking-[-0.025em] mb-4">
              Locus
              <br />
              <span className="text-gradient">Analytics</span>
            </h1>

            {/* Supporting text */}
            <p
              className={`text-[15px] lg:text-[16px] leading-[1.6] mb-6 max-w-md transition-all duration-700 delay-200 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ color: 'hsl(215 10% 40%)' }}
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
              className={`flex items-center gap-5 mt-8 transition-all duration-700 delay-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border border-background flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, hsl(220 16% 90%) 0%, hsl(220 16% 85%) 100%)`,
                    }}
                  >
                    <span className="text-[10px] font-medium text-foreground/60">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-[13px]" style={{ color: 'hsl(215 10% 40%)' }}>
                <span className="text-foreground/90 font-medium">50+</span>{' '}
                projects delivered
              </div>
              <div className="w-px h-4 self-center" style={{ background: 'hsl(220 13% 85%)' }} />
              <div className="text-[13px]" style={{ color: 'hsl(215 10% 40%)' }}>
                <span className="text-foreground/90 font-medium">8 years</span>{' '}
                in operation
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

            {/* Photo container — full fill */}
            <div
              className="relative overflow-hidden"
              style={{
                height: 'clamp(300px, 38vh, 420px)',
                borderRadius: '20px',
                border: '1px solid hsl(220 13% 88%)',
                boxShadow: '0 20px 60px -15px rgba(0,0,0,0.15)',
              }}
            >
              {/* The photo — full coverage */}
              <img
                src="/hero-image.jpg"
                alt="Locus Analytics — technology professionals at work"
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  objectPosition: 'center 30%',
                }}
                loading="eager"
                decoding="async"
              />

              {/* Left edge fade — blends photo into page background */}
              <div
                className="absolute inset-y-0 left-0 w-16 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, hsl(220 20% 97%) 0%, transparent 100%)',
                }}
              />

              {/* Bottom edge fade — grounds the image */}
              <div
                className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, hsl(220 20% 97%) 0%, transparent 100%)',
                }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
