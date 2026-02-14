import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Quote } from 'lucide-react';

const caseStudies = [
  {
    sector: 'Healthcare',
    problem: 'A district health office struggled with delayed HMIS reports and fragmented facility data across 47 health centers.',
    solution: 'We built a DHIS2-integrated dashboard with automated data validation and real-time facility reporting.',
    outcome: 'Reporting turnaround dropped from weeks to hours, with significantly improved data accuracy across all facilities.',
  },
  {
    sector: 'Education',
    problem: 'A network of 12 schools managed student records, fees, and attendance across disconnected spreadsheets and paper systems.',
    solution: 'We deployed a unified school management platform with parent portals, fee tracking, and automated attendance.',
    outcome: 'Administrative overhead reduced dramatically, and fee collection rates improved within the first term.',
  },
  {
    sector: 'Business',
    problem: 'A mid-size retailer faced URA compliance issues with manual EFRIS invoicing and inventory mismatches.',
    solution: 'We integrated POS, inventory, and EFRIS into a single automated workflow with real-time tax reconciliation.',
    outcome: 'Zero compliance penalties since deployment, with inventory accuracy and reconciliation time greatly improved.',
  },
];

const testimonials = [
  {
    quote: 'Locus transformed how we handle health data. Our district reports are now timely, accurate, and actionable.',
    role: 'District Health Office Program Lead',
    org: 'Central Uganda',
  },
  {
    quote: 'The school management system paid for itself in the first term. Parents love the portal and our admin team saves hours every week.',
    role: 'Director of Operations',
    org: 'Private Schools Network',
  },
  {
    quote: 'We went from dreading tax season to having everything reconciled automatically. The EFRIS integration just works.',
    role: 'Chief Financial Officer',
    org: 'Retail & Hospitality Group',
  },
];

export default function Proof() {
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

  return (
    <section
      id="proof"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 40% 50%, rgba(47, 107, 255, 0.06) 0%, transparent 50%)',
        }}
      />

      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section header */}
        <div
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="mono text-xs uppercase tracking-[0.15em] text-primary mb-4">
            Results
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6">
            Proven impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real outcomes from organizations we've partnered with across healthcare,
            education, and business.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {caseStudies.map((cs, index) => (
            <div
              key={cs.sector}
              className={`group relative bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-6 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="tag tag-primary mb-4">{cs.sector}</div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                    Problem
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                    Solution
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-primary uppercase tracking-wider mb-1.5">
                    Outcome
                  </div>
                  <p className="text-sm text-foreground font-medium leading-relaxed">{cs.outcome}</p>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-sm font-medium text-primary group/link">
                Read more
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover/link:translate-x-1"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              What our partners say
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="relative bg-card/60 border border-border/30 rounded-2xl p-6"
              >
                <Quote size={20} className="text-primary/30 mb-3" />
                <p className="text-sm text-foreground/90 leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div>
                  <div className="text-sm font-medium text-foreground">{t.role}</div>
                  <div className="text-xs text-muted-foreground">{t.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
