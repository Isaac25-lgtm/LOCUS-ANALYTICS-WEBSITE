import HeroCarousel from "@/components/sections/hero-carousel";
import TrustStrip from "@/components/sections/trust-strip";
import WhatWeBuild from "@/components/sections/what-we-build";
import ProcessSection from "@/components/sections/process-section";
import CaseStudiesSection from "@/components/sections/case-studies-section";
import PrinciplesSection from "@/components/sections/principles-section";
import CtaBand from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <main>
      <HeroCarousel />
      <TrustStrip />
      <WhatWeBuild />
      <ProcessSection />
      <CaseStudiesSection />
      <PrinciplesSection />
      <CtaBand />
    </main>
  );
}
