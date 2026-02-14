import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, Heart, GraduationCap, Briefcase, Brain } from 'lucide-react';

const INTERVAL_MS = 5000;

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
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index: number) => {
    if (index === displayIndex) return;
    setIsTransitioning(true);
    setActiveIndex(index);

    // After fade-out completes, swap content and fade back in
    setTimeout(() => {
      setDisplayIndex(index);
      setIsTransitioning(false);
    }, 400);
  }, [displayIndex]);

  // Auto-rotation
  useEffect(() => {
    if (!isVisible || isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      const next = (activeIndex + 1) % sectors.length;
      goTo(next);
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isVisible, isPaused, activeIndex, goTo]);

  const handleManualSelect = (index: number) => {
    // Reset timer on manual interaction
    if (timerRef.current) clearInterval(timerRef.current);
    goTo(index);
  };

  const displayedSector = sectors[displayIndex];

  // Progress percentage for the active sector timer bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!isVisible || isPaused) {
      setProgress(0);
      return;
    }
    setProgress(0);
    const start = Date.now();
    const frame = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / INTERVAL_MS) * 100, 100);
      setProgress(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(frame);
    };
    const rafRef = { current: requestAnimationFrame(frame) };
    return () => cancelAnimationFrame(rafRef.current);
  }, [activeIndex, isVisible, isPaused]);

  return (
    <section
      id="sectors"
      ref={sectionRef}
      className="relative min-h-screen w-full py-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 30% 70%, rgba(47, 107, 255, 0.08) 0%, transparent 50%)',
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
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

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Sector selector */}
          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {sectors.map((sector, index) => (
              <button
                key={sector.id}
                onClick={() => handleManualSelect(index)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                  activeIndex === index
                    ? 'bg-primary/10 border-primary/30'
                    : 'bg-card/50 border-border/30 hover:border-primary/20 hover:bg-card'
                }`}
              >
                {/* Timer progress bar on active item */}
                {activeIndex === index && (
                  <div className="absolute bottom-0 left-0 h-[2px] bg-primary/40 transition-none" style={{ width: `${progress}%` }} />
                )}

                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      activeIndex === index
                        ? 'bg-primary/20'
                        : 'bg-secondary group-hover:bg-primary/10'
                    }`}
                  >
                    <sector.icon
                      size={22}
                      className={
                        activeIndex === index ? 'text-primary' : 'text-muted-foreground'
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`font-sans font-semibold transition-colors ${
                        activeIndex === index ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {sector.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {sector.caption}
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className={`transition-all ${
                      activeIndex === index
                        ? 'text-primary translate-x-0 opacity-100'
                        : 'text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right - Active sector display with crossfade */}
          <div
            className={`relative transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-3xl" />

              {/* Card */}
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden shadow-card">
                {/* Image with crossfade */}
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  {/* All images stacked, only active one visible */}
                  {sectors.map((sector, idx) => (
                    <img
                      key={sector.id}
                      src={sector.image}
                      alt={sector.title}
                      width={640}
                      height={256}
                      loading={idx === 0 ? 'eager' : 'lazy'}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        idx === displayIndex && !isTransitioning
                          ? 'opacity-100'
                          : 'opacity-0'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                  {/* Overlay content */}
                  <div
                    className={`absolute bottom-4 left-6 right-6 transition-all duration-400 ${
                      isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <displayedSector.icon size={18} className="text-primary" />
                      <span className="mono text-[10px] uppercase tracking-[0.15em] text-primary">
                        {displayedSector.caption}
                      </span>
                    </div>
                    <h3 className="font-sans text-2xl lg:text-3xl font-bold text-foreground">
                      {displayedSector.headline}
                    </h3>
                  </div>
                </div>

                {/* Content with crossfade */}
                <div
                  className={`p-6 transition-all duration-400 ${
                    isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                  }`}
                >
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {displayedSector.description}
                  </p>

                  {/* Features grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {displayedSector.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="btn-primary inline-flex items-center gap-2 group w-full justify-center">
                    {displayedSector.cta}
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '20+', label: 'Active Clients' },
            { value: '5+', label: 'Years Experience' },
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
