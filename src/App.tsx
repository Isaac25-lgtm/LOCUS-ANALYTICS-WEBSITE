import { useEffect, useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ClientLogos from './sections/ClientLogos';
import IntelligentSystems from './sections/IntelligentSystems';
import SectorPrism from './sections/SectorPrism';
import Capabilities from './sections/Capabilities';
import Process from './sections/Process';
import CaseStudies from './sections/CaseStudies';
import Testimonial from './sections/Testimonial';
import Principles from './sections/Principles';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CapabilityDetail from './pages/CapabilityDetail';
import { initAnalytics } from './lib/analytics';

function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Handle hash-based scrolling (for links like /#contact from detail pages)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Vignette */}
      <div className="vignette" />

      {/* Navigation */}
      <Navigation scrolled={scrolled} />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <ClientLogos />
        <div className="section-divider" />
        <Capabilities />
        <div className="section-divider" />
        <IntelligentSystems />
        <div className="section-divider" />
        <SectorPrism />
        <div className="section-divider" />
        <Process />
        <div className="section-divider" />
        <CaseStudies />
        <Testimonial />
        <div className="section-divider" />
        <Principles />
        <div className="section-divider" />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/256755244837?text=Hello%20Locus%20Analytics%2C%20I%27d%20like%20to%20make%20an%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
        style={{
          background: '#25D366',
          boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capabilities/:slug" element={<CapabilityDetail />} />
    </Routes>
  );
}

export default App;
