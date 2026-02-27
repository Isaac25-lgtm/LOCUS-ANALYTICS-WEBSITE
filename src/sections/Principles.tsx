import { useEffect, useRef, useState } from 'react';
import { Shield, Eye, BookOpen, ArrowRight } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Security first',
    description: 'Encryption, access control, and comprehensive audit logging.',
    details: [
      'End-to-end encryption',
      'Role-based access control',
      'Comprehensive audit trails',
      'Regular security assessments',
    ],
  },
  {
    icon: Eye,
    title: 'Observability',
    description: 'Metrics, alerts, and health checks out of the box.',
    details: [
      'Real-time monitoring',
      'Automated alerting',
      'Performance metrics',
      'Error tracking',
    ],
  },
  {
    icon: BookOpen,
    title: 'Operational clarity',
    description: 'Documentation, runbooks, and training included.',
    details: [
      'Comprehensive documentation',
      'Operational runbooks',
      'User training programs',
      'Ongoing support',
    ],
  },
];

const clients = [
  'Ministry of Health Uganda',
  'CHAI',
  'HEPS Uganda',
  'Regional Hospitals',
  'Schools & Universities',
  'SMEs & Enterprises',
];

export default function Principles() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-10 lg:py-12"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(47, 107, 255, 0.06) 0%, transparent 50%)',
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div
            className={`max-w-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Micro label */}
            <div className="mono text-xs uppercase tracking-[0.15em] text-primary mb-6">
              Our Approach
            </div>

            {/* Headline */}
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-tight mb-4">
              Built to
              <br />
              <span className="text-gradient">run</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Secure, observable, and easy to operate so teams stay focused on 
              outcomes, not infrastructure. We build systems that work reliably 
              in real-world conditions.
            </p>

            {/* Clients mention */}
            <div className="mb-8">
              <div className="text-sm text-muted-foreground mb-3">
                Trusted by organizations including:
              </div>
              <div className="flex flex-wrap gap-2">
                {clients.map((client) => (
                  <span
                    key={client}
                    className="tag tag-primary text-xs"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToContact}
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Talk to an engineer
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Right content - Principles card */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-3xl" />

              {/* Card */}
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-6 lg:p-8 shadow-card">
                {/* Card header */}
                <div className="mb-6">
                  <div className="mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                    Principles
                  </div>
                  <div className="font-sans text-lg font-semibold">
                    How We Build
                  </div>
                </div>

                {/* Principles list */}
                <div className="space-y-4">
                  {principles.map((principle, index) => (
                    <div
                      key={principle.title}
                      className="group p-4 rounded-2xl bg-secondary/30 hover:bg-secondary/50 border border-border/30 hover:border-primary/20 transition-all duration-300"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <principle.icon size={20} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground mb-1">
                            {principle.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {principle.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {principle.details.map((detail, i) => (
                              <span
                                key={i}
                                className="text-[10px] px-2 py-1 rounded-full bg-background/50 text-muted-foreground"
                              >
                                {detail}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom stats */}
                <div className="mt-6 pt-6 border-t border-border/50 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold text-foreground">
                      24/7
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Support
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold text-foreground">
                      &lt;4h
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Response
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-sans text-2xl font-bold text-foreground">
                      99.9%
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Uptime SLA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
