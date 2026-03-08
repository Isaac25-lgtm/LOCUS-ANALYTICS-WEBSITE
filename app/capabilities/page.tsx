import { createMetadata } from "@/lib/metadata";
import CapabilitiesPageContent from "@/components/sections/capabilities-page-content";

export const metadata = createMetadata({
  title: "Capabilities",
  description:
    "From systems architecture and full-stack development to data engineering, AI integration, and DevOps. Explore the technical capabilities Locus Analytics brings to every project.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return <CapabilitiesPageContent />;
}
