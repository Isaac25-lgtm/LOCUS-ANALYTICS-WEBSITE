import { useEffect, useRef, useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import IntelligentSystems from './sections/IntelligentSystems';
import SectorPrism from './sections/SectorPrism';
import Capabilities from './sections/Capabilities';
import Principles from './sections/Principles';
import Proof from './sections/Proof';
import Demo from './sections/Demo';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { initAnalytics } from './lib/analytics';

function App() {
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
        <IntelligentSystems />
        <SectorPrism />
        <Capabilities />
        <Principles />
        <Proof />
        <Demo />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
