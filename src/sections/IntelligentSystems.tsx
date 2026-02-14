import { useEffect, useRef, useState } from 'react';
import { Shield, Workflow, Database, BarChart3, ArrowRight } from 'lucide-react';

const modules = [
  {
    icon: Shield,
    title: 'Identity & Access',
    description: 'SSO, roles, audit logs',
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Workflow,
    title: 'Workflow Engine',
    description: 'Rules, alerts, escalations',
    color: 'from-primary/20 to-primary/5',
    iconColor: 'text-primary',
  },
  {
    icon: Database,
    title: 'Data Pipeline',
    description: 'Ingest, validate, export',
    color: 'from-purple-500/20 to-purple-500/5',
    iconColor: 'text-purple-400',
  },
  {
    icon: BarChart3,
    title: 'Reporting & AI',
    description: 'Dashboards + LLM helpers',
    color: 'from-amber-500/20 to-amber-500/5',
    iconColor: 'text-amber-400',
  },
];

export default function IntelligentSystems() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="systems"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center py-20"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(47, 107, 255, 0.06) 0%, transparent 50%)',
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div
            className={`max-w-xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Micro label */}
            <div className="mono text-xs uppercase tracking-[0.15em] text-primary mb-6">
              Connected Modules
            </div>

            {/* Headline */}
            <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
              Intelligent
              <br />
              <span className="text-gradient">systems</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              One stack for healthcare, education, and business—integrated, 
              compliant, and fast. Built on modern architecture with enterprise-grade 
              security and scalability.
            </p>

            {/* Features list */}
            <ul className="space-y-3 mb-8">
              {[
                'DHIS2-integrated health information systems',
                'URA/EFRIS compliant business automation',
                'AI-powered analytics and forecasting',
                'Offline-capable progressive web apps',
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => scrollToSection('#capabilities')}
              className="btn-primary inline-flex items-center gap-2 group"
            >
              See the architecture
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Right content - Stack Card */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-3xl" />

              {/* Main card */}
              <div className="relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-6 lg:p-8 shadow-card">
                {/* Card header */}
                <div className="mb-6">
                  <div className="mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                    Core Stack
                  </div>
                  <div className="font-sans text-lg font-semibold">
                    Connected Modules
                  </div>
                </div>

                {/* Module rows */}
                <div className="space-y-3">
                  {modules.map((module, index) => (
                    <div
                      key={module.title}
                      className={`group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${module.color} border border-border/30 hover:border-primary/30 transition-all duration-300 cursor-pointer`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        <module.icon size={20} className={module.iconColor} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground text-sm">
                          {module.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {module.description}
                        </div>
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                      />
                    </div>
                  ))}
                </div>

                {/* Bottom info */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-1">
                        {['Python', 'Node', 'React'].map((tech) => (
                          <div
                            key={tech}
                            className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[8px] font-medium border border-background"
                            title={tech}
                          >
                            {tech[0]}
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        +12 more
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mono">
                      REST API • GraphQL • WebSocket
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
