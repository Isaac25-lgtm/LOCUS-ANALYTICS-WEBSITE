import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Locus enhanced our company system with intelligent analytics that gave us real-time visibility into operations. Decision-making went from gut feeling to data-driven overnight.',
    name: 'Sali Samuel',
    title: 'Director',
    org: 'Limtai Agency',
  },
  {
    quote:
      'Locus delivered an intelligent legal management system that transformed how we handle cases, documents, and client communication. What used to take days now takes minutes.',
    name: 'Joshua Kwemboi',
    title: 'Founding Partner',
    org: 'Roots Advocates',
  },
  {
    quote:
      'We went from manual EFRIS compliance to fully automated invoicing. Tax season used to take us weeks of reconciliation. Now it takes an afternoon.',
    name: 'Grace Atim',
    title: 'CFO',
    org: 'Kampala Wholesale Group',
  },
];

export default function Testimonial() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const t = testimonials[active];

  return (
    <section
      ref={ref}
      className={`w-full px-6 lg:px-12 xl:px-20 py-10 lg:py-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 mb-6">
          <Quote size={18} className="text-primary" />
        </div>

        <div className="relative min-h-[140px] flex items-center justify-center">
          <blockquote
            key={active}
            className="animate-fade-in-up"
          >
            <p
              className="text-xl lg:text-2xl font-medium leading-relaxed mb-6"
              style={{ color: '#0B0C10' }}
            >
              "{t.quote}"
            </p>
            <footer className="flex items-center justify-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: 'linear-gradient(135deg, hsl(222 90% 55% / 0.15), hsl(222 90% 55% / 0.05))',
                  color: 'hsl(222 90% 55%)',
                }}
              >
                {t.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold" style={{ color: '#0B0C10' }}>
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {t.title}, {t.org}
                </div>
              </div>
            </footer>
          </blockquote>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? 'w-6 h-1.5 bg-primary'
                  : 'w-1.5 h-1.5 bg-muted-foreground/25 hover:bg-muted-foreground/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
