import { useEffect, useRef, useState } from 'react';
import { Search, PenTool, Rocket, Headphones } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description: 'We map your workflows, data, and pain points. No generic playbook, we start with your reality.',
    details: ['Stakeholder interviews', 'Data audit', 'Requirements spec'],
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    description: 'Architecture, UI, and data models, reviewed with your team before a line of code is written.',
    details: ['System architecture', 'UI/UX prototypes', 'Technical review'],
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Build & Ship',
    description: 'Agile sprints with weekly demos. You see progress every week, not after six months.',
    details: ['Weekly demos', 'Automated testing', 'Staged rollout'],
  },
  {
    icon: Headphones,
    number: '04',
    title: 'Support & Evolve',
    description: 'Monitoring, maintenance, and feature iteration. We stay with you after launch.',
    details: ['24/7 monitoring', 'User training', 'Continuous updates'],
  },
];

export default function Process() {
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

  return (
    <section
      ref={ref}
      className="w-full px-6 lg:px-12 xl:px-20 py-10 lg:py-12"
    >
      {/* Header */}
      <div
        className={`text-center max-w-2xl mx-auto mb-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mono text-xs uppercase tracking-[0.15em] text-primary mb-4">
          Our Process
        </div>
        <h2
          className="font-sans text-3xl sm:text-4xl font-bold mb-3"
          style={{ color: '#0B0C10' }}
        >
          How we work
        </h2>
        <p style={{ color: '#4B4F57' }}>
          From first conversation to production, a clear path with no surprises.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Connecting line — desktop only */}
        <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-border" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Step circle */}
              <div className="relative inline-flex flex-col items-center">
                <div className="w-[44px] h-[44px] rounded-2xl bg-primary/10 flex items-center justify-center mb-4 relative z-10 border-4 border-background">
                  <step.icon size={20} className="text-primary" />
                </div>
                <div className="mono text-[10px] text-primary font-medium tracking-wider mb-2">
                  {step.number}
                </div>
              </div>

              <h3
                className="font-sans text-base font-semibold mb-2"
                style={{ color: '#0B0C10' }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#4B4F57' }}>
                {step.description}
              </p>

              {/* Detail tags */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {step.details.map((detail) => (
                  <span
                    key={detail}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
