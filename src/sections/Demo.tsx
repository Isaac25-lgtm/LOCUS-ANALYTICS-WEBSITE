import { useEffect, useRef, useState } from 'react';
import { Play, Monitor, BarChart3, ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

const screenshots = [
  {
    title: 'Health Dashboard',
    description: 'Real-time HMIS reporting and DHIS2 data visualization',
    icon: Monitor,
  },
  {
    title: 'Analytics Engine',
    description: 'AI-powered insights with predictive forecasting',
    icon: BarChart3,
  },
  {
    title: 'Workflow Builder',
    description: 'Visual rule engine for approvals and escalations',
    icon: Play,
  },
];

export default function Demo() {
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
    trackEvent('demo_cta_click');
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32"
      style={{ background: '#F4F6F8' }}
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: '#2F6BFF' }}
          >
            See It in Action
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight"
            style={{ color: '#0B0C10' }}
          >
            Platform demo
          </h2>
          <p style={{ color: '#4B4F57' }}>
            A look inside the systems we build — from dashboards to workflow automation.
          </p>
        </div>

        {/* Screenshot placeholders */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {screenshots.map((item, index) => (
            <div
              key={item.title}
              className={`group bg-white rounded-3xl border overflow-hidden transition-all duration-500 hover:shadow-card-light hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                borderColor: 'rgba(11, 12, 16, 0.08)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Screenshot placeholder area */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <item.icon size={26} style={{ color: '#2F6BFF' }} />
                  </div>
                  <p className="text-xs font-medium" style={{ color: '#4B4F57' }}>
                    Screenshot placeholder
                  </p>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <h3
                  className="font-semibold mb-1"
                  style={{ color: '#0B0C10' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: '#4B4F57' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video placeholder */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="relative aspect-video bg-white rounded-3xl border flex items-center justify-center overflow-hidden"
            style={{ borderColor: 'rgba(11, 12, 16, 0.08)' }}
          >
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform"
                style={{ background: 'rgba(47, 107, 255, 0.1)' }}
              >
                <Play size={28} style={{ color: '#2F6BFF' }} />
              </div>
              <p className="font-medium mb-1" style={{ color: '#0B0C10' }}>
                Platform walkthrough
              </p>
              <p className="text-sm" style={{ color: '#4B4F57' }}>
                Video placeholder — embed your demo video here
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center gap-2 group"
            data-analytics="demo_cta"
          >
            Request a live demo
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
