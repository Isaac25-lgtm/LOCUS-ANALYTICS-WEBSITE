import { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, Globe, Zap, Activity } from 'lucide-react';
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
      {/* Subtle grid pattern — left side only */}
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">

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
              RIGHT — PHOTO + CARD OVERLAY
              ======================== */}
          <div
            className={`relative transition-all duration-700 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Photo container */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                height: 'clamp(460px, 55vh, 620px)',
                boxShadow: '0 32px 64px -16px rgba(0,0,0,0.6)',
              }}
            >
              {/* Background photo */}
              <img
                src="/hero-image.jpg"
                alt="Locus Analytics — tech professional in data center"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ filter: 'brightness(0.82) saturate(0.9)' }}
                loading="eager"
              />

              {/* Multi-stop overlay: left edge dark for text, bottom dark for card */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(to right, rgba(10,12,20,0.45) 0%, transparent 60%),
                    linear-gradient(to top, rgba(10,12,20,0.92) 0%, rgba(10,12,20,0.5) 35%, transparent 65%)
                  `,
                }}
              />

              {/* Thin top-edge border highlight */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)' }}
              />

              {/* Platform Snapshot card — bottom overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
              >
                <div
                  className="rounded-xl p-4 backdrop-blur-xl"
                  style={{
                    background: 'rgba(12, 14, 22, 0.82)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: '0 1px 0 0 rgba(255,255,255,0.04) inset',
                  }}
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div
                        className="mono text-[9px] uppercase tracking-[0.16em] mb-0.5"
                        style={{ color: 'hsl(215 10% 40%)' }}
                      >
                        System Overview
                      </div>
                      <div className="font-sans text-[13px] font-semibold text-foreground/90 tracking-[-0.01em]">
                        Platform Snapshot
                      </div>
                    </div>
                    <button
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <Activity size={12} strokeWidth={1.8} style={{ color: 'hsl(222 60% 60%)' }} />
                    </button>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-2.5 mb-3.5">
                    <MetricCard
                      icon={<Zap size={11} strokeWidth={2} />}
                      iconColor="hsl(160 50% 50%)"
                      iconBg="rgba(40,160,100,0.15)"
                      value="99.99%"
                      label="Uptime"
                    />
                    <MetricCard
                      icon={<TrendingUp size={11} strokeWidth={2} />}
                      iconColor="hsl(222 70% 65%)"
                      iconBg="rgba(60,100,230,0.15)"
                      value="<120ms"
                      label="Latency"
                    />
                    <MetricCard
                      icon={<Globe size={11} strokeWidth={2} />}
                      iconColor="hsl(270 45% 65%)"
                      iconBg="rgba(120,80,200,0.15)"
                      value="6"
                      label="Regions"
                    />
                  </div>

                  {/* Mini chart */}
                  <div
                    className="rounded-lg px-3 py-2.5"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-medium text-foreground/75">System Load</span>
                      <span
                        className="mono text-[10px] flex items-center gap-1"
                        style={{ color: 'hsl(160 50% 50%)' }}
                      >
                        <TrendingUp size={9} strokeWidth={2.5} />
                        +12.5%
                      </span>
                    </div>
                    <svg viewBox="0 0 300 48" className="w-full" style={{ height: '36px' }}>
                      <defs>
                        <linearGradient id="chartFill2" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(222 70% 55%)" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="hsl(222 70% 55%)" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="chartStroke2" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="hsl(222 60% 50%)" stopOpacity="0.5" />
                          <stop offset="60%" stopColor="hsl(222 80% 65%)" stopOpacity="1" />
                          <stop offset="100%" stopColor="hsl(222 70% 60%)" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                      {[8, 20, 32].map((y, i) => (
                        <line key={i} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                      ))}
                      <path
                        d="M0,36 C20,32 40,28 60,25 C80,22 100,20 120,18 C140,16 160,20 180,21 C200,22 220,14 240,11 C260,8 280,8 300,6 L300,48 L0,48 Z"
                        fill="url(#chartFill2)"
                      />
                      <path
                        d="M0,36 C20,32 40,28 60,25 C80,22 100,20 120,18 C140,16 160,20 180,21 C200,22 220,14 240,11 C260,8 280,8 300,6"
                        fill="none"
                        stroke="url(#chartStroke2)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle cx="300" cy="6" r="2" fill="hsl(222 80% 65%)" />
                      <circle cx="300" cy="6" r="3.5" fill="hsl(222 80% 65%)" fillOpacity="0.2" />
                    </svg>
                  </div>

                  {/* Status footer */}
                  <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: 'hsl(160 55% 48%)', boxShadow: '0 0 5px hsl(160 55% 48% / 0.5)' }}
                      />
                      <span className="text-[10px]" style={{ color: 'hsl(215 10% 40%)' }}>All systems operational</span>
                    </div>
                    <span className="mono text-[9px]" style={{ color: 'hsl(215 10% 32%)' }}>v2.4.1</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo credit — tiny, tasteful */}
            <div className="absolute -bottom-5 right-0 text-[9px] opacity-30" style={{ color: 'hsl(215 10% 50%)' }}>
              Photo: Unsplash
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/* ==============================
   METRIC CARD SUB-COMPONENT
   ============================== */
function MetricCard({
  icon,
  iconColor,
  iconBg,
  value,
  label,
}: {
  icon: React.ReactNode;
  iconColor: string;
  iconBg: string;
  value: string;
  label: string;
}) {
  return (
    <div
      className="rounded-lg p-2.5 text-center"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div
        className="w-6 h-6 rounded-md flex items-center justify-center mx-auto mb-1.5"
        style={{ background: iconBg, color: iconColor }}
      >
        {icon}
      </div>
      <div className="font-sans text-[15px] font-semibold text-foreground/90 tracking-[-0.02em] leading-none">
        {value}
      </div>
      <div
        className="text-[10px] mt-1 tracking-[0.02em]"
        style={{ color: 'hsl(215 10% 42%)' }}
      >
        {label}
      </div>
    </div>
  );
}
