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
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(47, 100, 230, 0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(47, 100, 230, 0.03) 0%, transparent 40%)
        `,
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
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
              RIGHT — PLATFORM SNAPSHOT
              ======================== */}
          <div
            className={`relative transition-all duration-900 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Soft ambient glow — restrained */}
              <div
                className="absolute -inset-8 rounded-[2rem] blur-[80px] opacity-40"
                style={{ background: 'radial-gradient(ellipse, rgba(47, 100, 230, 0.12) 0%, transparent 70%)' }}
              />

              {/* Main card */}
              <div
                className="relative rounded-2xl p-6 lg:p-7"
                style={{
                  background: 'linear-gradient(180deg, hsl(222 16% 9%) 0%, hsl(222 16% 7.5%) 100%)',
                  border: '1px solid hsl(222 12% 15%)',
                  boxShadow: '0 1px 0 0 hsl(222 16% 12%) inset, 0 24px 48px -12px rgba(0, 0, 0, 0.4)',
                }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div
                      className="mono text-[10px] uppercase tracking-[0.16em] mb-1"
                      style={{ color: 'hsl(215 10% 42%)' }}
                    >
                      System Overview
                    </div>
                    <div className="font-sans text-[15px] font-semibold text-foreground/90 tracking-[-0.01em]">
                      Platform Snapshot
                    </div>
                  </div>
                  <button
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-white/[0.04]"
                    style={{
                      background: 'hsl(222 14% 11%)',
                      border: '1px solid hsl(222 12% 16%)',
                    }}
                  >
                    <Activity size={14} strokeWidth={1.8} style={{ color: 'hsl(222 60% 60%)' }} />
                  </button>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {/* Uptime */}
                  <MetricCard
                    icon={<Zap size={13} strokeWidth={2} />}
                    iconColor="hsl(160 50% 50%)"
                    iconBg="hsl(160 40% 14%)"
                    value="99.99%"
                    label="Uptime"
                  />
                  {/* Latency */}
                  <MetricCard
                    icon={<TrendingUp size={13} strokeWidth={2} />}
                    iconColor="hsl(222 70% 62%)"
                    iconBg="hsl(222 40% 14%)"
                    value="<120ms"
                    label="Latency"
                  />
                  {/* Regions */}
                  <MetricCard
                    icon={<Globe size={13} strokeWidth={2} />}
                    iconColor="hsl(270 45% 60%)"
                    iconBg="hsl(270 30% 14%)"
                    value="6"
                    label="Regions"
                  />
                </div>

                {/* Chart card */}
                <div
                  className="rounded-xl p-4"
                  style={{
                    background: 'hsl(222 14% 8%)',
                    border: '1px solid hsl(222 12% 13%)',
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[13px] font-medium text-foreground/80">System Load</span>
                    <span
                      className="text-[11px] font-medium flex items-center gap-1 mono"
                      style={{ color: 'hsl(160 50% 50%)' }}
                    >
                      <TrendingUp size={10} strokeWidth={2.5} />
                      +12.5%
                    </span>
                  </div>
                  {/* Premium SVG Chart */}
                  <svg viewBox="0 0 300 72" className="w-full" style={{ height: '56px' }}>
                    {/* Subtle grid lines */}
                    {[0, 1, 2, 3].map((i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={18 * i + 4}
                        x2="300"
                        y2={18 * i + 4}
                        stroke="hsl(222 12% 14%)"
                        strokeWidth="0.5"
                      />
                    ))}
                    {/* Area gradient — subtle */}
                    <defs>
                      <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(222 70% 55%)" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="hsl(222 70% 55%)" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="chartStroke" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="hsl(222 60% 50%)" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="hsl(222 80% 62%)" stopOpacity="1" />
                        <stop offset="100%" stopColor="hsl(222 70% 58%)" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                    {/* Smooth area fill */}
                    <path
                      d="M0,52 C20,48 40,42 60,38 C80,34 100,30 120,28 C140,26 160,30 180,32 C200,34 220,22 240,18 C260,14 280,14 300,12 L300,72 L0,72 Z"
                      fill="url(#chartFill)"
                    />
                    {/* Crisp line */}
                    <path
                      d="M0,52 C20,48 40,42 60,38 C80,34 100,30 120,28 C140,26 160,30 180,32 C200,34 220,22 240,18 C260,14 280,14 300,12"
                      fill="none"
                      stroke="url(#chartStroke)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Endpoint dot only */}
                    <circle cx="300" cy="12" r="2.5" fill="hsl(222 80% 62%)" />
                    <circle cx="300" cy="12" r="4" fill="hsl(222 80% 62%)" fillOpacity="0.2" />
                  </svg>
                </div>

                {/* Footer status */}
                <div
                  className="flex items-center justify-between mt-4 pt-3"
                  style={{ borderTop: '1px solid hsl(222 12% 13%)' }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: 'hsl(160 55% 48%)', boxShadow: '0 0 6px hsl(160 55% 48% / 0.4)' }}
                    />
                    <span className="text-[11px]" style={{ color: 'hsl(215 10% 42%)' }}>
                      All systems operational
                    </span>
                  </div>
                  <span
                    className="mono text-[10px]"
                    style={{ color: 'hsl(215 10% 35%)' }}
                  >
                    v2.4.1
                  </span>
                </div>
              </div>
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
      className="rounded-xl p-3.5 text-center"
      style={{
        background: 'hsl(222 14% 9.5%)',
        border: '1px solid hsl(222 12% 13%)',
      }}
    >
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center mx-auto mb-2"
        style={{ background: iconBg, color: iconColor }}
      >
        {icon}
      </div>
      <div className="font-sans text-xl font-semibold text-foreground/95 tracking-[-0.02em] leading-none">
        {value}
      </div>
      <div
        className="text-[11px] mt-1.5 tracking-[0.02em]"
        style={{ color: 'hsl(215 10% 42%)' }}
      >
        {label}
      </div>
    </div>
  );
}
