import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

function HealthDashboardMock() {
  return (
    <svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="480" height="270" fill="#0F1117" />

      {/* Sidebar */}
      <rect x="0" y="0" width="56" height="270" fill="#161822" />
      <circle cx="28" cy="24" r="10" fill="#2F6BFF" />
      <text x="28" y="28" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">L</text>
      <rect x="16" y="48" width="24" height="3" rx="1.5" fill="#2F6BFF" />
      <rect x="16" y="64" width="24" height="3" rx="1.5" fill="#2A2D3A" />
      <rect x="16" y="80" width="24" height="3" rx="1.5" fill="#2A2D3A" />
      <rect x="16" y="96" width="24" height="3" rx="1.5" fill="#2A2D3A" />
      <rect x="16" y="112" width="24" height="3" rx="1.5" fill="#2A2D3A" />

      {/* Top bar */}
      <rect x="56" y="0" width="424" height="36" fill="#161822" />
      <rect x="72" y="12" width="80" height="12" rx="2" fill="#2A2D3A" />
      <circle cx="440" cy="18" r="8" fill="#2A2D3A" />
      <circle cx="420" cy="18" r="8" fill="#2A2D3A" />

      {/* Title area */}
      <rect x="72" y="48" width="120" height="8" rx="2" fill="#E2E5EA" />
      <rect x="72" y="60" width="200" height="5" rx="1.5" fill="#4B4F57" />

      {/* KPI cards row */}
      <rect x="72" y="78" width="90" height="52" rx="8" fill="#1A1D2B" stroke="#2A2D3A" strokeWidth="1" />
      <rect x="84" y="90" width="36" height="5" rx="1.5" fill="#4B4F57" />
      <text x="84" y="112" fontSize="16" fontWeight="700" fill="#10B981">2,847</text>
      <rect x="84" y="118" width="48" height="4" rx="1" fill="#10B98133" />

      <rect x="170" y="78" width="90" height="52" rx="8" fill="#1A1D2B" stroke="#2A2D3A" strokeWidth="1" />
      <rect x="182" y="90" width="40" height="5" rx="1.5" fill="#4B4F57" />
      <text x="182" y="112" fontSize="16" fontWeight="700" fill="#2F6BFF">94.2%</text>
      <rect x="182" y="118" width="60" height="4" rx="1" fill="#2F6BFF33" />

      <rect x="268" y="78" width="90" height="52" rx="8" fill="#1A1D2B" stroke="#2A2D3A" strokeWidth="1" />
      <rect x="280" y="90" width="44" height="5" rx="1.5" fill="#4B4F57" />
      <text x="280" y="112" fontSize="16" fontWeight="700" fill="#F59E0B">47</text>
      <rect x="280" y="118" width="36" height="4" rx="1" fill="#F59E0B33" />

      <rect x="366" y="78" width="90" height="52" rx="8" fill="#1A1D2B" stroke="#2A2D3A" strokeWidth="1" />
      <rect x="378" y="90" width="50" height="5" rx="1.5" fill="#4B4F57" />
      <text x="378" y="112" fontSize="16" fontWeight="700" fill="#8B5CF6">12.4k</text>
      <rect x="378" y="118" width="42" height="4" rx="1" fill="#8B5CF633" />

      {/* Chart area */}
      <rect x="72" y="140" width="240" height="116" rx="8" fill="#1A1D2B" stroke="#2A2D3A" strokeWidth="1" />
      <rect x="84" y="152" width="64" height="6" rx="1.5" fill="#E2E5EA" />
      <rect x="84" y="162" width="100" height="4" rx="1" fill="#4B4F57" />
      {/* Grid lines */}
      <line x1="84" y1="184" x2="296" y2="184" stroke="#2A2D3A" strokeWidth="0.5" />
      <line x1="84" y1="204" x2="296" y2="204" stroke="#2A2D3A" strokeWidth="0.5" />
      <line x1="84" y1="224" x2="296" y2="224" stroke="#2A2D3A" strokeWidth="0.5" />
      {/* Area chart */}
      <defs>
        <linearGradient id="healthGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2F6BFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M84,230 Q110,218 136,210 T188,195 T220,200 T260,185 T296,178 L296,244 L84,244 Z" fill="url(#healthGrad)" />
      <path d="M84,230 Q110,218 136,210 T188,195 T220,200 T260,185 T296,178" fill="none" stroke="#2F6BFF" strokeWidth="2" />
      <circle cx="188" cy="195" r="3" fill="#2F6BFF" />
      <circle cx="296" cy="178" r="3" fill="#2F6BFF" />

      {/* Right side panel - table */}
      <rect x="320" y="140" width="136" height="116" rx="8" fill="#1A1D2B" stroke="#2A2D3A" strokeWidth="1" />
      <rect x="332" y="152" width="56" height="6" rx="1.5" fill="#E2E5EA" />
      {/* Table rows */}
      <rect x="332" y="168" width="112" height="14" rx="3" fill="#22253399" />
      <circle cx="340" cy="175" r="4" fill="#10B981" />
      <rect x="350" y="173" width="44" height="4" rx="1" fill="#8A8D95" />
      <rect x="420" y="173" width="16" height="4" rx="1" fill="#10B981" />

      <rect x="332" y="186" width="112" height="14" rx="3" fill="#22253399" />
      <circle cx="340" cy="193" r="4" fill="#2F6BFF" />
      <rect x="350" y="191" width="52" height="4" rx="1" fill="#8A8D95" />
      <rect x="420" y="191" width="16" height="4" rx="1" fill="#2F6BFF" />

      <rect x="332" y="204" width="112" height="14" rx="3" fill="#22253399" />
      <circle cx="340" cy="211" r="4" fill="#F59E0B" />
      <rect x="350" y="209" width="40" height="4" rx="1" fill="#8A8D95" />
      <rect x="420" y="209" width="16" height="4" rx="1" fill="#F59E0B" />

      <rect x="332" y="222" width="112" height="14" rx="3" fill="#22253399" />
      <circle cx="340" cy="229" r="4" fill="#8B5CF6" />
      <rect x="350" y="227" width="48" height="4" rx="1" fill="#8A8D95" />
      <rect x="420" y="227" width="16" height="4" rx="1" fill="#8B5CF6" />

      {/* Status dot */}
      <circle cx="442" cy="56" r="4" fill="#10B981" />
    </svg>
  );
}

function AnalyticsEngineMock() {
  return (
    <svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="480" height="270" fill="#0F1117" />

      {/* Sidebar */}
      <rect x="0" y="0" width="56" height="270" fill="#161822" />
      <circle cx="28" cy="24" r="10" fill="#2F6BFF" />
      <text x="28" y="28" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">L</text>
      <rect x="16" y="48" width="24" height="3" rx="1.5" fill="#2A2D3A" />
      <rect x="16" y="64" width="24" height="3" rx="1.5" fill="#2F6BFF" />
      <rect x="16" y="80" width="24" height="3" rx="1.5" fill="#2A2D3A" />
      <rect x="16" y="96" width="24" height="3" rx="1.5" fill="#2A2D3A" />

      {/* Top bar */}
      <rect x="56" y="0" width="424" height="36" fill="#161822" />
      <rect x="72" y="12" width="100" height="12" rx="2" fill="#2A2D3A" />

      {/* Title */}
      <rect x="72" y="48" width="140" height="8" rx="2" fill="#E2E5EA" />
      <rect x="72" y="60" width="180" height="5" rx="1.5" fill="#4B4F57" />

      {/* Large chart area */}
      <rect x="72" y="78" width="280" height="178" rx="8" fill="#1A1D2B" stroke="#2A2D3A" strokeWidth="1" />
      <rect x="84" y="90" width="80" height="6" rx="1.5" fill="#E2E5EA" />

      {/* Multi-line chart */}
      <defs>
        <linearGradient id="anlGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2F6BFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2F6BFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="anlGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Grid */}
      <line x1="84" y1="130" x2="336" y2="130" stroke="#2A2D3A" strokeWidth="0.5" />
      <line x1="84" y1="160" x2="336" y2="160" stroke="#2A2D3A" strokeWidth="0.5" />
      <line x1="84" y1="190" x2="336" y2="190" stroke="#2A2D3A" strokeWidth="0.5" />
      <line x1="84" y1="220" x2="336" y2="220" stroke="#2A2D3A" strokeWidth="0.5" />

      {/* Blue line (actual) */}
      <path d="M84,220 Q114,210 144,195 T204,170 T234,155 T264,140 T294,128 T336,118" fill="none" stroke="#2F6BFF" strokeWidth="2" />
      <path d="M84,220 Q114,210 144,195 T204,170 T234,155 T264,140 T294,128 T336,118 L336,244 L84,244 Z" fill="url(#anlGrad1)" />

      {/* Green line (predicted - dashed) */}
      <path d="M264,140 Q280,132 294,126 T336,112 T360,105" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Data points */}
      <circle cx="144" cy="195" r="3" fill="#2F6BFF" />
      <circle cx="204" cy="170" r="3" fill="#2F6BFF" />
      <circle cx="264" cy="140" r="3" fill="#2F6BFF" />
      <circle cx="336" cy="118" r="4" fill="#2F6BFF" stroke="#0F1117" strokeWidth="2" />

      {/* Tooltip */}
      <rect x="242" y="106" width="64" height="28" rx="6" fill="#22253E" stroke="#2F6BFF55" strokeWidth="1" />
      <text x="254" y="118" fontSize="7" fill="#8A8D95">Forecast</text>
      <text x="254" y="128" fontSize="9" fontWeight="600" fill="#10B981">+23.4%</text>

      {/* Legend */}
      <rect x="84" y="240" width="6" height="6" rx="1" fill="#2F6BFF" />
      <rect x="94" y="241" width="32" height="4" rx="1" fill="#8A8D95" />
      <rect x="140" y="240" width="6" height="6" rx="1" fill="#10B981" />
      <rect x="150" y="241" width="36" height="4" rx="1" fill="#8A8D95" />

      {/* Right panel — metric cards */}
      <rect x="360" y="78" width="96" height="52" rx="8" fill="#1A1D2B" stroke="#2A2D3A" strokeWidth="1" />
      <rect x="372" y="88" width="40" height="5" rx="1.5" fill="#4B4F57" />
      <text x="372" y="110" fontSize="14" fontWeight="700" fill="#2F6BFF">87.3%</text>
      <rect x="372" y="117" width="56" height="3" rx="1" fill="#2A2D3A" />
      <rect x="372" y="117" width="42" height="3" rx="1" fill="#2F6BFF44" />

      <rect x="360" y="138" width="96" height="52" rx="8" fill="#1A1D2B" stroke="#2A2D3A" strokeWidth="1" />
      <rect x="372" y="148" width="44" height="5" rx="1.5" fill="#4B4F57" />
      <text x="372" y="170" fontSize="14" fontWeight="700" fill="#10B981">+12.8%</text>
      <rect x="372" y="177" width="56" height="3" rx="1" fill="#2A2D3A" />
      <rect x="372" y="177" width="50" height="3" rx="1" fill="#10B98144" />

      <rect x="360" y="198" width="96" height="52" rx="8" fill="#1A1D2B" stroke="#2A2D3A" strokeWidth="1" />
      <rect x="372" y="208" width="48" height="5" rx="1.5" fill="#4B4F57" />
      <text x="372" y="230" fontSize="14" fontWeight="700" fill="#F59E0B">4.2k</text>
      <rect x="372" y="237" width="56" height="3" rx="1" fill="#2A2D3A" />
      <rect x="372" y="237" width="34" height="3" rx="1" fill="#F59E0B44" />

      {/* AI badge */}
      <rect x="200" y="88" width="40" height="14" rx="7" fill="#8B5CF622" stroke="#8B5CF644" strokeWidth="0.5" />
      <text x="210" y="98" fontSize="7" fontWeight="600" fill="#8B5CF6">AI</text>
    </svg>
  );
}

function WorkflowBuilderMock() {
  return (
    <svg viewBox="0 0 480 270" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="480" height="270" fill="#0F1117" />

      {/* Sidebar */}
      <rect x="0" y="0" width="56" height="270" fill="#161822" />
      <circle cx="28" cy="24" r="10" fill="#2F6BFF" />
      <text x="28" y="28" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">L</text>
      <rect x="16" y="48" width="24" height="3" rx="1.5" fill="#2A2D3A" />
      <rect x="16" y="64" width="24" height="3" rx="1.5" fill="#2A2D3A" />
      <rect x="16" y="80" width="24" height="3" rx="1.5" fill="#2F6BFF" />
      <rect x="16" y="96" width="24" height="3" rx="1.5" fill="#2A2D3A" />

      {/* Top bar */}
      <rect x="56" y="0" width="424" height="36" fill="#161822" />
      <rect x="72" y="12" width="90" height="12" rx="2" fill="#2A2D3A" />

      {/* Title */}
      <rect x="72" y="48" width="110" height="8" rx="2" fill="#E2E5EA" />
      <rect x="72" y="60" width="160" height="5" rx="1.5" fill="#4B4F57" />

      {/* Canvas area with dot grid */}
      <rect x="72" y="78" width="384" height="178" rx="8" fill="#1A1D2B" stroke="#2A2D3A" strokeWidth="1" />
      {/* Dot grid pattern */}
      {Array.from({ length: 12 }).map((_, row) =>
        Array.from({ length: 20 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={92 + col * 18} cy={94 + row * 14} r="0.8" fill="#2A2D3A" />
        ))
      )}

      {/* Workflow node: Trigger */}
      <rect x="96" y="110" width="80" height="40" rx="10" fill="#2F6BFF22" stroke="#2F6BFF" strokeWidth="1.5" />
      <circle cx="116" cy="122" r="6" fill="#2F6BFF33" />
      <rect x="108" y="119" width="16" height="6" rx="3" fill="#2F6BFF" />
      <rect x="126" y="126" width="40" height="4" rx="1" fill="#8A8D95" />
      <text x="126" y="140" fontSize="7" fill="#4B4F57">New report</text>

      {/* Arrow 1 */}
      <line x1="176" y1="130" x2="210" y2="130" stroke="#2F6BFF" strokeWidth="1.5" />
      <polygon points="210,126 218,130 210,134" fill="#2F6BFF" />

      {/* Workflow node: Condition */}
      <g transform="translate(258,130) rotate(45)">
        <rect x="-28" y="-28" width="56" height="56" rx="6" fill="#F59E0B22" stroke="#F59E0B" strokeWidth="1.5" />
      </g>
      <text x="244" y="128" fontSize="7" fontWeight="500" fill="#F59E0B">Score</text>
      <text x="244" y="137" fontSize="7" fontWeight="500" fill="#F59E0B">≥ 80%?</text>

      {/* Arrow 2 - Yes path (up) */}
      <line x1="258" y1="100" x2="258" y2="88" stroke="#10B981" strokeWidth="1.5" />
      <line x1="258" y1="88" x2="340" y2="88" stroke="#10B981" strokeWidth="1.5" />
      <polygon points="340,84 348,88 340,92" fill="#10B981" />
      <rect x="264" y="80" width="24" height="10" rx="5" fill="#10B98133" />
      <text x="269" y="88" fontSize="7" fontWeight="600" fill="#10B981">Yes</text>

      {/* Arrow 3 - No path (down) */}
      <line x1="258" y1="160" x2="258" y2="180" stroke="#EF4444" strokeWidth="1.5" />
      <line x1="258" y1="180" x2="340" y2="180" stroke="#EF4444" strokeWidth="1.5" />
      <polygon points="340,176 348,180 340,184" fill="#EF4444" />
      <rect x="264" y="172" width="20" height="10" rx="5" fill="#EF444433" />
      <text x="270" y="180" fontSize="7" fontWeight="600" fill="#EF4444">No</text>

      {/* Workflow node: Approve */}
      <rect x="350" y="68" width="80" height="40" rx="10" fill="#10B98122" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="370" cy="82" r="6" fill="#10B98133" />
      <path d="M367,82 L369,84 L374,79" stroke="#10B981" strokeWidth="1.5" fill="none" />
      <rect x="380" y="78" width="36" height="4" rx="1" fill="#8A8D95" />
      <text x="380" y="94" fontSize="7" fill="#4B4F57">Approve</text>

      {/* Workflow node: Escalate */}
      <rect x="350" y="160" width="80" height="40" rx="10" fill="#EF444422" stroke="#EF4444" strokeWidth="1.5" />
      <circle cx="370" cy="174" r="6" fill="#EF444433" />
      <text x="367" y="177" fontSize="8" fill="#EF4444">!</text>
      <rect x="380" y="170" width="40" height="4" rx="1" fill="#8A8D95" />
      <text x="380" y="186" fontSize="7" fill="#4B4F57">Escalate</text>

      {/* Mini toolbar at top of canvas */}
      <rect x="360" y="48" width="28" height="16" rx="4" fill="#2A2D3A" />
      <rect x="392" y="48" width="28" height="16" rx="4" fill="#2A2D3A" />
      <rect x="424" y="48" width="28" height="16" rx="4" fill="#2F6BFF22" stroke="#2F6BFF55" strokeWidth="0.5" />

      {/* Status indicators */}
      <rect x="80" y="240" width="56" height="12" rx="6" fill="#10B98122" />
      <text x="90" y="249" fontSize="7" fontWeight="500" fill="#10B981">Active</text>
      <rect x="144" y="240" width="60" height="12" rx="6" fill="#2A2D3A" />
      <text x="154" y="249" fontSize="7" fill="#8A8D95">3 rules</text>
    </svg>
  );
}

const screenshots = [
  {
    title: 'Health Dashboard',
    description: 'Real-time HMIS reporting and DHIS2 data visualization',
    mock: HealthDashboardMock,
  },
  {
    title: 'Analytics Engine',
    description: 'AI-powered insights with predictive forecasting',
    mock: AnalyticsEngineMock,
  },
  {
    title: 'Workflow Builder',
    description: 'Visual rule engine for approvals and escalations',
    mock: WorkflowBuilderMock,
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

        {/* Screenshot cards */}
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
              {/* Mock UI screenshot */}
              <div className="relative aspect-video overflow-hidden rounded-t-3xl group-hover:brightness-110 transition-all duration-300">
                <item.mock />
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
