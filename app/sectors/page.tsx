import { createMetadata } from "@/lib/metadata";
import SectorsPageContent from "@/components/sections/sectors-page-content";

export const metadata = createMetadata({
  title: "Sectors",
  description:
    "Locus Analytics serves healthcare, education, business, public sector, and data-driven organizations with intelligent systems built for real operational environments in Uganda.",
  path: "/sectors",
});

export default function SectorsPage() {
  return <SectorsPageContent />;
}
