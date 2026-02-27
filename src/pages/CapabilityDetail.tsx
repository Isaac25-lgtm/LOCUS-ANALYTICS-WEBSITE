import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { capabilities } from '../data/capabilities';

export default function CapabilityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const cap = capabilities.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!cap) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Not Found</h1>
          <p className="text-muted-foreground mb-8">
            This capability page doesn't exist.
          </p>
          <Link
            to="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = capabilities.findIndex((c) => c.slug === slug);
  const nextCap = capabilities[(currentIndex + 1) % capabilities.length];
  const prevCap = capabilities[(currentIndex - 1 + capabilities.length) % capabilities.length];

  return (
    <div className="min-h-screen bg-background page-enter">
      {/* Top nav bar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl"
        style={{ borderColor: 'hsl(220 13% 88%)' }}
      >
        <div className="w-full px-6 lg:px-12 xl:px-20 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
          <Link
            to="/"
            className="font-sans text-lg font-bold text-foreground tracking-tight"
          >
            Locus Analytics
          </Link>
          <Link
            to="/#contact"
            className="btn-primary text-sm inline-flex items-center gap-2"
          >
            Get in touch
          </Link>
        </div>
      </nav>

      {/* Hero section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full" style={{ height: 'clamp(260px, 32vh, 380px)' }}>
          <img
            src={cap.image}
            alt={cap.title}
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.75) saturate(0.9)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(10,12,22,0.92) 0%, rgba(10,12,22,0.5) 40%, transparent 70%)',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{
                backgroundColor: cap.accentColor + '20',
                color: cap.accentColor,
              }}
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: cap.accentColor }}
              />
              Capability
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
              {cap.headline}
            </h1>
            <p className="text-base lg:text-lg max-w-2xl" style={{ color: 'hsl(215 10% 75%)' }}>
              {cap.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview section */}
      <section className="w-full px-6 lg:px-12 xl:px-20 py-10 lg:py-12">
        <div className="max-w-3xl">
          <div
            className="mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: cap.accentColor }}
          >
            Overview
          </div>
          <div className="space-y-4">
            {cap.extendedDescription.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ color: '#4B4F57' }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed features grid */}
      <section
        className="w-full px-6 lg:px-12 xl:px-20 py-10 lg:py-12"
        style={{ background: '#F4F6F8' }}
      >
        <div className="mb-8">
          <div
            className="mono text-xs uppercase tracking-[0.15em] mb-3"
            style={{ color: cap.accentColor }}
          >
            Features
          </div>
          <h2
            className="font-sans text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: '#0B0C10' }}
          >
            What's included
          </h2>
          <p style={{ color: '#4B4F57' }}>
            Everything you need, built-in and production-ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cap.detailedFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              style={{
                borderColor: 'rgba(11, 12, 16, 0.08)',
                animationDelay: `${index * 80}ms`,
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: cap.accentColor + '12' }}
              >
                <feature.icon size={20} style={{ color: cap.accentColor }} />
              </div>
              <h3
                className="font-sans text-base font-semibold mb-2"
                style={{ color: '#0B0C10' }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4B4F57' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases + Who it's for */}
      <section className="w-full px-6 lg:px-12 xl:px-20 py-10 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Use cases */}
          <div>
            <div
              className="mono text-xs uppercase tracking-[0.15em] mb-3"
              style={{ color: cap.accentColor }}
            >
              Use Cases
            </div>
            <h2
              className="font-sans text-2xl font-bold mb-6"
              style={{ color: '#0B0C10' }}
            >
              Built for real scenarios
            </h2>
            <div className="space-y-4">
              {cap.useCases.map((useCase, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border bg-white"
                  style={{ borderColor: 'rgba(11, 12, 16, 0.08)' }}
                >
                  <h4
                    className="font-medium text-sm mb-1"
                    style={{ color: '#0B0C10' }}
                  >
                    {useCase.title}
                  </h4>
                  <p className="text-sm" style={{ color: '#4B4F57' }}>
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Who it's for + Tech stack */}
          <div>
            <div
              className="mono text-xs uppercase tracking-[0.15em] mb-3"
              style={{ color: cap.accentColor }}
            >
              Who It's For
            </div>
            <h2
              className="font-sans text-2xl font-bold mb-6"
              style={{ color: '#0B0C10' }}
            >
              Organizations we serve
            </h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {cap.whoItsFor.map((org) => (
                <span
                  key={org}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm border"
                  style={{
                    borderColor: cap.accentColor + '30',
                    backgroundColor: cap.accentColor + '08',
                    color: '#0B0C10',
                  }}
                >
                  <Check size={13} style={{ color: cap.accentColor }} />
                  {org}
                </span>
              ))}
            </div>

            <div
              className="mono text-xs uppercase tracking-[0.15em] mb-3"
              style={{ color: cap.accentColor }}
            >
              Tech Stack
            </div>
            <h3
              className="font-sans text-2xl font-bold mb-6"
              style={{ color: '#0B0C10' }}
            >
              Technologies we use
            </h3>
            <div className="flex flex-wrap gap-2">
              {cap.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium border bg-white"
                  style={{
                    borderColor: 'rgba(11, 12, 16, 0.08)',
                    color: '#4B4F57',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section
        className="w-full px-6 lg:px-12 xl:px-20 py-10 lg:py-12"
        style={{ background: '#F4F6F8' }}
      >
        <div className="text-center max-w-xl mx-auto">
          <h2
            className="font-sans text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: '#0B0C10' }}
          >
            Ready to get started?
          </h2>
          <p className="mb-6" style={{ color: '#4B4F57' }}>
            Tell us about your project and we'll get back to you within 2 business days.
          </p>
          <Link
            to="/#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Talk to an engineer
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Navigation between capabilities */}
      <section className="w-full px-6 lg:px-12 xl:px-20 py-8 border-t" style={{ borderColor: 'hsl(220 13% 88%)' }}>
        <div className="flex items-center justify-between">
          <Link
            to={`/capabilities/${prevCap.slug}`}
            className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            <div className="text-right">
              <div className="text-xs text-muted-foreground/70">Previous</div>
              <div className="font-medium">{prevCap.title}</div>
            </div>
          </Link>
          <Link
            to={`/capabilities/${nextCap.slug}`}
            className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <div>
              <div className="text-xs text-muted-foreground/70">Next</div>
              <div className="font-medium">{nextCap.title}</div>
            </div>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* Simple footer */}
      <footer className="w-full px-6 lg:px-12 xl:px-20 py-6 border-t bg-background" style={{ borderColor: 'hsl(220 13% 88%)' }}>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Locus Analytics</span>
          <Link to="/" className="hover:text-foreground transition-colors">
            Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
