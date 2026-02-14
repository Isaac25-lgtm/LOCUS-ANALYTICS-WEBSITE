import { useEffect, useRef, useState } from 'react';
import { ArrowRight, TrendingUp, Globe, Zap } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger entrance animation on mount
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
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 30% 20%, rgba(47, 107, 255, 0.08) 0%, transparent 50%)',
      }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left content */}
          <div
            className={`max-w-2xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Micro label */}
            <div className="mono text-xs uppercase tracking-[0.15em] text-primary mb-6">
              Operational Systems & Data Infrastructure
            </div>

            {/* Main headline */}
            <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[0.95] tracking-tight mb-6">
              Locus
              <br />
              <span className="text-gradient">Analytics</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Intelligent systems for healthcare, education, and business.
              Built for Uganda. Ready for scale.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={() => { trackEvent('hero_cta_click'); scrollToSection('#systems'); }}
                className="btn-primary inline-flex items-center gap-2 group"
              >
                Explore systems
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
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
              className={`flex items-center gap-6 mt-12 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-medium">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">50+</span> projects delivered
              </div>
            </div>
          </div>

          {/* Right content - Hero Card */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-3xl" />

              {/* Main card */}
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-6 lg:p-8 shadow-card">
                {/* Card header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                      System Overview
                    </div>
                    <div className="font-sans text-lg font-semibold">
                      Platform Snapshot
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp size={20} className="text-primary" />
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-secondary/50 rounded-2xl p-4 text-center">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mx-auto mb-2">
                      <Zap size={16} className="text-emerald-400" />
                    </div>
                    <div className="font-sans text-2xl font-bold text-foreground">
                      99.99%
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Uptime</div>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-4 text-center">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <TrendingUp size={16} className="text-primary" />
                    </div>
                    <div className="font-sans text-2xl font-bold text-foreground">
                      &lt;120ms
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Latency</div>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-4 text-center">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mx-auto mb-2">
                      <Globe size={16} className="text-purple-400" />
                    </div>
                    <div className="font-sans text-2xl font-bold text-foreground">
                      6
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">Regions</div>
                  </div>
                </div>

                {/* Mini chart */}
                <div className="bg-secondary/30 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">System Load</span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1">
                      <TrendingUp size={12} />
                      +12.5%
                    </span>
                  </div>
                  {/* SVG Chart */}
                  <svg viewBox="0 0 300 80" className="w-full h-16">
                    {/* Grid lines */}
                    {[0, 1, 2, 3].map((i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={20 * i}
                        x2="300"
                        y2={20 * i}
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                      />
                    ))}
                    {/* Area gradient */}
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2F6BFF" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Area */}
                    <path
                      d="M0,60 Q30,50 60,45 T120,35 T180,40 T240,25 T300,20 L300,80 L0,80 Z"
                      fill="url(#chartGradient)"
                    />
                    {/* Line */}
                    <path
                      d="M0,60 Q30,50 60,45 T120,35 T180,40 T240,25 T300,20"
                      fill="none"
                      stroke="#2F6BFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    {/* Data points */}
                    {[
                      [0, 60],
                      [60, 45],
                      [120, 35],
                      [180, 40],
                      [240, 25],
                      [300, 20],
                    ].map(([x, y], i) => (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="3"
                        fill="#2F6BFF"
                      />
                    ))}
                  </svg>
                </div>

                {/* Bottom status */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-muted-foreground">All systems operational</span>
                  </div>
                  <span className="text-xs text-muted-foreground mono">v2.4.1</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-2xl blur-xl animate-float" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
