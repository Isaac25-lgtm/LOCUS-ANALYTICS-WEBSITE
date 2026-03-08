import { createMetadata } from "@/lib/metadata";
import AboutPageContent from "@/components/sections/about-page-content";

export const metadata = createMetadata({
  title: "About",
  description:
    "Locus Analytics is a data science and intelligent software company based in Kampala, Uganda. Over 8 years building production-grade systems for healthcare, education, and business.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
