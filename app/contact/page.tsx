import { createMetadata } from "@/lib/metadata";
import ContactPageContent from "@/components/sections/contact-page-content";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Locus Analytics. Request a demo, start a project, or talk to an engineer about your data, AI, and systems needs.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
