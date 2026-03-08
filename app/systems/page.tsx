import { createMetadata } from "@/lib/metadata";
import SystemsPageContent from "@/components/sections/systems-page-content";

export const metadata = createMetadata({
  title: "Systems",
  description:
    "Explore the intelligent systems Locus Analytics builds, from HMIS dashboards and education platforms to tax automation, workflow engines, data pipelines, and AI-integrated decision support.",
  path: "/systems",
});

export default function SystemsPage() {
  return <SystemsPageContent />;
}
