import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, Heart, GraduationCap, Briefcase, Brain } from 'lucide-react';

const INTERVAL_MS = 2000;

const sectors = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    headline: 'Healthcare',
    description:
      'HMIS dashboards, DHIS2 integrations, and AI-assisted reporting—built for real-world clinics and hospitals.',
    cta: 'Explore health systems',
    image: '/healthcare.jpg',
    icon: Heart,
    caption: 'Clinics • Hospitals • Programs',
    features: [
      'DHIS2 API integrations',
      'HMIS dashboards',
      'MNCAH program tools',
      'Malaria surveillance',
      'EPI tools',
      'Pharmacy management',
    ],
  },
  {
    id: 'education',
    title: 'Education',
    headline: 'Education',
    description:
      'Records, fees, attendance, and analytics—unified for schools and universities.',
    cta: 'Explore education systems',
    image: '/education.jpg',
    icon: GraduationCap,
    caption: 'Schools • Universities • Networks',
    features: [
      'School management systems',
      'Academic records',
      'Fee tracking',
      'Parent portals',
      'AI learning tools',
      'Performance analytics',
    ],
  },
  {
    id: 'business',
    title: 'Business',
    headline: 'Business automation',
    description:
      'Tax, inventory, POS, and compliance—connected to your ledger and your workflow.',
    cta: 'Explore business tools',
    image: '/business.jpg',
    icon: Briefcase,
    caption: 'Retail • Hospitality • Services',
    features: [
      'URA tax automation',
      'EFRIS integration',
      'Inventory management',
      'POS systems',
      'WhatsApp automation',
      'E-commerce systems',
    ],
  },
  {
    id: 'data-ai',
    title: 'Data & AI',
    headline: 'Data & AI',
    description:
      'Dashboards, forecasting, and LLM-powered assistants—trained on your data, not the internet.',
    cta: 'Explore AI & analytics',
    image: '/data-ai.jpg',
    icon: Brain,
    caption: 'BI • Forecasting • LLM Assistants',
    features: [
      'M&E dashboards',
      'Performance scorecards',
      'Forecasting models',
      'LLM integration',
      'Smart document generation',
      'Decision support',
    ],
  },
];

export default function SectorPrism() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index: number) => {
    if (index === displayIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);
    setTimeout(() => {
      setDisplayIndex(index);
      setIsTransitioning(false);
    }, 400);
  }, [displayIndex]);

  useEffect(() => {
    if (!isVisible || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      const next = (activeIndex + 1) % sectors.length;
      goTo(next);
    }, INTERVAL_MS);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isVisible, isPaused, activeIndex, goTo]);

  const handleManualSelect = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    goTo(index);
  };

  useEffect(() => {
    if (!isVisible || isPaused) { setProgress(0); return; }
    setProgress(0);
    const start = Date.now();
    const rafRef = { current: 0 };
    const frame = () => {
      const pct = Math.min(((Date.now() - start) / INTERVAL_MS) * 100, 100);
      setProgress(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafRef.current);
  }, [activeIndex, isVisible, isPaused]);

  const displayedSector = sectors[displayIndex];

  return (
    <section
      id="sectors"
      ref={sectionRef}
      className="relative w-full py-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 70%, rgba(47, 107, 255, 0.08) 0%, transparent 50%)',
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20">

        {/* ── Section header (UNCHANGED) ── */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mono text-xs uppercase tracking-[0.15em] text-primary mb-4">
            Sectors We Serve
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Built for every industry
          </h2>
          <p className="text-muted-foreground">
            Specialized solutions tailored to the unique challenges of each sector.
          </p>
        </div>

        {/* ── Full-width image panel ── */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Image container — full width */}
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{
              height: 'clamp(420px, 56vh, 620px)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 32px 64px -16px rgba(0,0,0,0.5)',
            }}
          >
            {/* All sector images stacked — only active fades in */}
            {sectors.map((sector, idx) => (
              <img
                key={sector.id}
                src={sector.image}
                alt={sector.title}
                width={1280}
                height={620}
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  idx === displayIndex && !isTransitioning ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ filter: 'brightness(0.72) saturate(0.88)' }}
              />
            ))}

            {/* Bottom overlay gradient for text legibility */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(10,12,22,0.92) 0%, rgba(10,12,22,0.55) 35%, transparent 65%)',
              }}
            />

            {/* Left edge blend */}
            <div
              className="absolute inset-y-0 left-0 w-12 pointer-events-none"
              style={{ background: 'linear-gradient(to right, rgba(10,12,22,0.3) 0%, transparent 100%)' }}
            />

            {/* Overlay content — fades on transition */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-8 lg:p-10 transition-all duration-400 ${
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {/* Caption + icon */}
              <div className="flex items-center gap-2 mb-3">
                <displayedSector.icon size={15} className="text-primary" strokeWidth={2} />
                <span className="mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  {displayedSector.caption}
                </span>
              </div>

              {/* Headline */}
              <h3 className="font-sans text-3xl lg:text-4xl font-semibold text-foreground tracking-[-0.02em] leading-tight mb-3">
                {displayedSector.headline}
              </h3>

              {/* Description + features + CTA in a two-column row on desktop */}
              <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12">
                <div className="flex-1 max-w-lg">
                  <p className="text-[14px] leading-relaxed mb-4" style={{ color: 'hsl(215 10% 60%)' }}>
                    {displayedSector.description}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5">
                    {displayedSector.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[12px]" style={{ color: 'hsl(215 10% 55%)' }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'hsl(222 70% 60%)' }} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:flex-shrink-0">
                  <button className="btn-primary inline-flex items-center gap-2 group whitespace-nowrap">
                    {displayedSector.cta}
                    <ArrowRight
                      size={14}
                      strokeWidth={2}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── Sector tab selector — below image ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {sectors.map((sector, index) => (
              <button
                key={sector.id}
                onClick={() => handleManualSelect(index)}
                className={`relative overflow-hidden flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                  activeIndex === index
                    ? 'border-primary/30 bg-primary/8'
                    : 'border-border/30 bg-card/40 hover:bg-card/70 hover:border-border/50'
                }`}
                style={activeIndex === index ? { background: 'rgba(47,100,230,0.07)' } : undefined}
              >
                {/* Timer progress bar */}
                {activeIndex === index && (
                  <div
                    className="absolute bottom-0 left-0 h-[2px] bg-primary/50 transition-none"
                    style={{ width: `${progress}%` }}
                  />
                )}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeIndex === index ? 'bg-primary/20' : 'bg-secondary'
                  }`}
                >
                  <sector.icon
                    size={16}
                    className={activeIndex === index ? 'text-primary' : 'text-muted-foreground'}
                  />
                </div>
                <div>
                  <div className={`text-[13px] font-medium leading-tight ${activeIndex === index ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {sector.title}
                  </div>
                  <div className="text-[10px] text-muted-foreground/70 mt-0.5 hidden sm:block truncate">
                    {sector.caption.split(' • ')[0]}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Stats row (unchanged) ── */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '20+', label: 'Active Clients' },
            { value: '8+', label: 'Years in Operation' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card/50 border border-border/30"
            >
              <div className="font-sans text-3xl lg:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
