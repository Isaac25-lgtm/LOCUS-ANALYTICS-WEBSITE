import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

const navLinks = [
  { label: 'Systems', href: '#systems' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/70 backdrop-blur-2xl'
            : 'bg-transparent'
        }`}
        style={{
          borderBottom: scrolled ? '1px solid hsl(220 13% 88%)' : '1px solid transparent',
        }}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2.5"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  navigate('/');
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <img
                src="/logo.png"
                alt="Locus Analytics logo"
                className="h-10 w-auto"
              />
              <span
                className="font-sans text-[18px] font-semibold text-foreground tracking-[-0.01em]"
              >
                Locus Analytics
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="nav-link"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className={`btn-primary text-[13px] px-4 py-2 transition-all duration-300 ${
                  scrolled
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-1 scale-95 pointer-events-none'
                }`}
              >
                Request a demo
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-7">
          {navLinks.map((link, index) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="font-sans text-xl font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-primary mt-4"
          >
            Request a demo
          </button>
        </div>
      </div>
    </>
  );
}
