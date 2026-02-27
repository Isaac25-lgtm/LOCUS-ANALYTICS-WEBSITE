import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Clock, Users, ArrowRight } from 'lucide-react';

const studies = [
  {
    tag: 'Healthcare',
    tagColor: '#e11d48',
    title: 'National HMIS Dashboard for District Health Teams',
    description:
      'Built a real-time DHIS2-integrated dashboard for 30+ districts, replacing spreadsheet-based reporting with automated data pipelines.',
    results: [
      { icon: TrendingUp, value: '94%', label: 'Reporting completeness (from 58%)' },
      { icon: Clock, value: '3x', label: 'Faster quarterly reporting' },
      { icon: Users, value: '200+', label: 'Health workers trained' },
    ],
    image: '/cap-health.jpg',
  },
  {
    tag: 'Business',
    tagColor: '#059669',
    title: 'EFRIS Tax Automation for Retail Chain',
    description:
      'Integrated EFRIS with POS and accounting systems across 8 outlets, eliminating manual receipt reconciliation and reducing compliance risk.',
    results: [
      { icon: Clock, value: '60%', label: 'Reduction in reconciliation time' },
      { icon: TrendingUp, value: '0', label: 'Compliance penalties since launch' },
      { icon: Users, value: '8', label: 'Outlets connected in 6 weeks' },
    ],
    image: '/cap-tax.jpg',
  },
];

export default function CaseStudies() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      className="w-full px-6 lg:px-12 xl:px-20 py-10 lg:py-12"
      style={{ background: '#F4F6F8' }}
    >
      {/* Header */}
      <div
        className={`max-w-2xl mb-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: '#2F6BFF' }}>
          Results
        </div>
        <h2
          className="font-sans text-3xl sm:text-4xl font-bold mb-3"
          style={{ color: '#0B0C10' }}
        >
          Case studies
        </h2>
        <p style={{ color: '#4B4F57' }}>
          Real projects, real outcomes. Here's what we've delivered.
        </p>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-2 gap-6">
        {studies.map((study, index) => (
          <div
            key={study.title}
            className={`card-shimmer bg-white rounded-2xl overflow-hidden border transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              borderColor: 'rgba(11, 12, 16, 0.08)',
              transitionDelay: `${index * 150}ms`,
            }}
          >
            {/* Image strip */}
            <div className="w-full h-40 overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.85) saturate(0.9)' }}
              />
            </div>

            <div className="p-6">
              {/* Tag */}
              <span
                className="inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-full mb-3"
                style={{
                  backgroundColor: study.tagColor + '12',
                  color: study.tagColor,
                }}
              >
                {study.tag}
              </span>

              <h3
                className="font-sans text-lg font-semibold mb-2"
                style={{ color: '#0B0C10' }}
              >
                {study.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: '#4B4F57' }}>
                {study.description}
              </p>

              {/* Results */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#F4F6F8]">
                {study.results.map((result) => (
                  <div key={result.label} className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <result.icon size={13} className="text-primary" />
                      <span
                        className="font-mono text-lg font-bold"
                        style={{ color: '#0B0C10' }}
                      >
                        {result.value}
                      </span>
                    </div>
                    <div className="text-[10px] text-muted-foreground leading-tight">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        className={`text-center mt-8 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <button
          onClick={scrollToContact}
          className="btn-secondary inline-flex items-center gap-2 group"
        >
          Discuss your project
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>
  );
}
