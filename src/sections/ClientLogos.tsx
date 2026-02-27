import { useEffect, useRef, useState } from 'react';

const clients = [
  { name: 'Ministry of Health', abbr: 'MOH' },
  { name: 'CHAI', abbr: 'CHAI' },
  { name: 'HEPS Uganda', abbr: 'HEPS' },
  { name: 'Kampala Capital City Authority', abbr: 'KCCA' },
  { name: 'Makerere University', abbr: 'MAK' },
  { name: 'Uganda Revenue Authority', abbr: 'URA' },
];

export default function ClientLogos() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full px-6 lg:px-12 xl:px-20 py-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="text-center mb-6">
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60 font-medium">
          Trusted by leading organizations
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:gap-x-14">
        {clients.map((client, i) => (
          <div
            key={client.name}
            className="flex items-center gap-2 transition-all duration-500"
            style={{
              transitionDelay: `${i * 80}ms`,
              opacity: isVisible ? 0.45 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
            }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold tracking-wide"
              style={{
                background: 'hsl(220 16% 93%)',
                color: 'hsl(215 10% 44%)',
              }}
            >
              {client.abbr.slice(0, 2)}
            </div>
            <span className="text-sm font-medium text-foreground/50 hidden sm:block whitespace-nowrap">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
