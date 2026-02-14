import { useEffect, useRef, useState } from 'react';
import {
  Heart,
  GraduationCap,
  Calculator,
  Bell,
  Database,
  Brain,
  ArrowRight,
  Check,
} from 'lucide-react';

const capabilities = [
  {
    icon: Heart,
    title: 'HMIS & Health Dashboards',
    description:
      'DHIS2 integrations, facility reporting, and program dashboards for the health sector.',
    features: [
      'DHIS2 API integration',
      'Real-time HMIS dashboards',
      'Program-specific reporting',
      'Automated data validation',
    ],
    color: 'from-rose-500/20 to-rose-500/5',
    iconColor: 'text-rose-400',
  },
  {
    icon: GraduationCap,
    title: 'Education Management',
    description:
      'Records, attendance, fees, and parent communication—unified for institutions.',
    features: [
      'Student information systems',
      'Attendance tracking',
      'Fee management',
      'Parent portals',
    ],
    color: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-400',
  },
  {
    icon: Calculator,
    title: 'Tax & Compliance Automation',
    description:
      'URA/EFRIS-ready flows, invoicing, and reconciliation for businesses.',
    features: [
      'URA tax automation',
      'EFRIS integration',
      'Electronic invoicing',
      'Audit trails',
    ],
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Bell,
    title: 'Workflow & Alerts',
    description:
      'Escalations, approvals, and notifications—rule-based and fast.',
    features: [
      'Custom workflow builder',
      'Multi-level approvals',
      'SMS & email alerts',
      'Escalation rules',
    ],
    color: 'from-amber-500/20 to-amber-500/5',
    iconColor: 'text-amber-400',
  },
  {
    icon: Database,
    title: 'Data Pipelines',
    description: 'Clean ingest, validation, and scheduled exports.',
    features: [
      'ETL processes',
      'Data quality checks',
      'Scheduled exports',
      'API integrations',
    ],
    color: 'from-purple-500/20 to-purple-500/5',
    iconColor: 'text-purple-400',
  },
  {
    icon: Brain,
    title: 'AI Assistants',
    description:
      'LLM-powered search, document generation, and decision support.',
    features: [
      'Claude API integration',
      'Smart document generation',
      'Predictive analytics',
      'Chatbot interfaces',
    ],
    color: 'from-cyan-500/20 to-cyan-500/5',
    iconColor: 'text-cyan-400',
  },
];

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
      className="relative w-full py-24 lg:py-32"
      style={{
        background: '#F4F6F8',
      }}
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <div
          className={`max-w-2xl mb-16 transition-all duration-700 ${
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
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#0B0C10' }}
          >
            Capabilities
          </h2>
          <p className="text-lg" style={{ color: '#4B4F57' }}>
            We design, build, and operate systems—then help teams use them.
            From prototype to production, fast and compliant.
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`group relative bg-white rounded-3xl p-6 border transition-all duration-500 hover:shadow-card-light hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                borderColor: 'rgba(11, 12, 16, 0.08)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <cap.icon size={26} className={cap.iconColor} />
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
                    <Check size={14} style={{ color: '#2F6BFF' }} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <button
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors group/link"
                style={{ color: '#2F6BFF' }}
              >
                Learn more
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover/link:translate-x-1"
                />
              </button>
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
