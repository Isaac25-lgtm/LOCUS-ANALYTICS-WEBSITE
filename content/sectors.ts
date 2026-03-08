import type { Sector } from "@/types";

export const sectors: Sector[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Health information systems, surveillance dashboards, and clinical decision-support tools for hospitals, district health teams, and national programs.",
    longDescription:
      "Uganda's health system operates at massive scale across thousands of facilities, districts, and national programs. We build the data infrastructure and decision-support tools that help health teams move from fragmented paper records to real-time, data-driven operations. Our systems integrate with DHIS2, support multiple health programs, and are designed for low-bandwidth, high-stakes environments.",
    icon: "Heart",
    systems: ["HMIS & Health Dashboards", "Data Pipelines", "AI Decision Support"],
    challenges: [
      "Fragmented data across facilities and programs",
      "Low-bandwidth and intermittent connectivity",
      "Complex reporting requirements for multiple stakeholders",
      "Data quality and timeliness gaps",
    ],
    outcomes: [
      "Real-time district and national health dashboards",
      "Automated indicator tracking across programs",
      "Improved data quality and reporting timeliness",
      "Evidence-based resource allocation",
    ],
  },
  {
    slug: "education",
    title: "Education",
    description:
      "Student management, performance analytics, enrollment tracking, and institutional administration platforms for schools and universities.",
    longDescription:
      "Education institutions in Uganda face administrative complexity at every level, from primary schools managing hundreds of students with paper systems to universities coordinating thousands of records across faculties. We build systems that reduce administrative burden, improve data accuracy, and give school leaders the visibility they need to improve outcomes.",
    icon: "BookOpen",
    systems: ["Education Management Systems", "Workflow & Alerts", "Data Pipelines"],
    challenges: [
      "Manual, paper-based administrative processes",
      "Poor visibility into student performance trends",
      "Fragmented fee collection and financial records",
      "Limited data for institutional decision-making",
    ],
    outcomes: [
      "Digitized student records and enrollment management",
      "Real-time academic performance dashboards",
      "Streamlined fee management and payment tracking",
      "Data-driven institutional planning",
    ],
  },
  {
    slug: "business",
    title: "Business Operations",
    description:
      "Operational systems, workflow automation, reporting tools, and data infrastructure for enterprises and SMEs across Uganda.",
    longDescription:
      "Ugandan businesses, from growing retail chains to established enterprises, need operational systems that match their complexity without unnecessary overhead. We build workflow automation, reporting infrastructure, and data platforms that integrate with existing tools and scale with business growth.",
    icon: "Building2",
    systems: [
      "Tax & Compliance Automation",
      "Workflow & Alerts",
      "Data Pipelines",
    ],
    challenges: [
      "Manual workflows and approval processes",
      "Disconnected systems and data silos",
      "Complex regulatory compliance requirements",
      "Limited visibility into operational performance",
    ],
    outcomes: [
      "Automated workflows and approval chains",
      "Integrated compliance and reporting systems",
      "Real-time operational dashboards",
      "Reduced manual overhead and error rates",
    ],
  },
  {
    slug: "public-sector",
    title: "Public Sector & Development",
    description:
      "Government systems, donor program platforms, M&E infrastructure, and public service delivery tools for agencies and development partners.",
    longDescription:
      "Public-sector organizations and development partners require systems that are transparent, auditable, and built for complex stakeholder environments. We design platforms for monitoring and evaluation, program tracking, public service delivery, and institutional coordination, with the rigor that government and donor contexts demand.",
    icon: "Landmark",
    systems: [
      "Data Pipelines",
      "Workflow & Alerts",
      "HMIS & Health Dashboards",
    ],
    challenges: [
      "Multi-stakeholder coordination and reporting",
      "Transparency and audit requirements",
      "Legacy systems and data migration",
      "Scale across geographic regions",
    ],
    outcomes: [
      "Transparent M&E and program tracking platforms",
      "Automated compliance and audit reporting",
      "Integrated data across agencies and programs",
      "Scalable systems for nationwide deployment",
    ],
  },
  {
    slug: "data-ai",
    title: "Data & AI Platforms",
    description:
      "Custom analytics platforms, machine learning pipelines, data infrastructure, and AI integration for organizations ready to operationalize intelligence.",
    longDescription:
      "For organizations that have moved past basic digitization and are ready to extract intelligence from their data, we build analytics platforms, machine learning pipelines, and AI-integrated systems. Our approach is operational. We embed AI into workflows where it creates measurable value, not experimental prototypes.",
    icon: "BarChart3",
    systems: [
      "Data Pipelines & Infrastructure",
      "AI Assistants & Decision Support",
    ],
    challenges: [
      "Unstructured data across multiple sources",
      "No clear path from data to decisions",
      "Experimental AI without operational impact",
      "Lack of internal data engineering capacity",
    ],
    outcomes: [
      "Production-grade analytics infrastructure",
      "AI models embedded in operational workflows",
      "Automated data pipelines and quality monitoring",
      "Measurable ROI on data investments",
    ],
  },
];
