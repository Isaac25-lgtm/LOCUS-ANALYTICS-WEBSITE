import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { capabilities } from '../data/capabilities';

const techStack = [
  { name: 'Python', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Power BI', category: 'Analytics' },
  { name: 'Tableau', category: 'Analytics' },
  { name: 'Docker', category: 'Infrastructure' },
  { name: 'AWS/Azure', category: 'Infrastructure' },
  { name: 'DHIS2 API', category: 'Health' },
  { name: 'TensorFlow', category: 'AI/ML' },
];

export default function Capabilities() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTech, setActiveTech] = useState<string | null>(null);
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

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="relative w-full py-10 lg:py-12"
      style={{
        background: '#F4F6F8',
      }}
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <div
          className={`max-w-2xl mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: '#2F6BFF' }}
          >
            What We Build
          </div>
          <h2
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#0B0C10' }}
          >
            Capabilities
          </h2>
          <p className="text-lg" style={{ color: '#4B4F57' }}>
            We design, build, and operate systems then help teams use them.
            From prototype to production, fast and compliant.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`card-shimmer group relative bg-white rounded-3xl p-6 border transition-all duration-500 hover:shadow-card-light hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                borderColor: 'rgba(11, 12, 16, 0.08)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Photo thumbnail */}
              <div className="w-full h-48 rounded-2xl overflow-hidden mb-5">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <h3
                className="font-sans text-xl font-semibold mb-3"
                style={{ color: '#0B0C10' }}
              >
                {cap.title}
              </h3>
              <p className="text-sm mb-5 leading-relaxed" style={{ color: '#4B4F57' }}>
                {cap.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {cap.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: '#4B4F57' }}
                  >
                    <Check size={14} style={{ color: cap.accentColor }} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                to={`/capabilities/${cap.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors group/link"
                style={{ color: '#2F6BFF' }}
              >
                Learn more
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover/link:translate-x-1"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="font-sans text-2xl font-semibold mb-2" style={{ color: '#0B0C10' }}>
              Technology Stack
            </h3>
            <p style={{ color: '#4B4F57' }}>
              Modern, proven technologies for scalable systems
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group relative"
                onMouseEnter={() => setActiveTech(tech.name)}
                onMouseLeave={() => setActiveTech(null)}
              >
                <div
                  className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-300 cursor-default ${
                    activeTech === tech.name
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white border-gray-200 hover:border-primary/30'
                  }`}
                  style={
                    activeTech === tech.name
                      ? {}
                      : { color: '#0B0C10' }
                  }
                >
                  {tech.name}
                </div>
                {activeTech === tech.name && (
                  <div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap px-2 py-1 rounded bg-gray-800 text-white"
                  >
                    {tech.category}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
