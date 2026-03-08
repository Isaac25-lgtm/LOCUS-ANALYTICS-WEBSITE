export const SITE = {
  name: "Locus Analytics",
  legalName: "Locus Analytics Limited",
  tagline: "Intelligent systems for healthcare, education, and business",
  description:
    "Locus Analytics builds AI-integrated systems, analytics infrastructure, and decision-support tools for healthcare, education, business, and public-sector organizations in Uganda and across Africa.",
  url: "https://locusanalytics.io",
  email: {
    primary: "info@locusanalytics.co.ug",
    secondary: "hello@locusanalytics.io",
  },
  phone: "+256 755 244 837",
  address: {
    street: "Plot 75 Bukoto Street, Kamwokya",
    city: "Kampala",
    country: "Uganda",
  },
  social: {
    linkedin: "https://linkedin.com/company/locus-analytics",
    twitter: "https://twitter.com/locusanalytics",
  },
} as const;

export const METRICS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Active Clients" },
  { value: "8+", label: "Years in Operation" },
  { value: "99%", label: "Client Satisfaction" },
] as const;

export const TRUST_PARTNERS = [
  "Ministry of Health",
  "CHAI",
  "HEPS Uganda",
  "Kampala Capital City Authority",
  "Makerere University",
  "Uganda Revenue Authority",
] as const;

export const TECH_STACK = {
  languages: ["Python", "TypeScript", "JavaScript", "SQL"],
  backend: ["Flask", "Node.js", "FastAPI"],
  frontend: ["React", "Next.js", "Tailwind CSS"],
  databases: ["PostgreSQL", "Redis", "MongoDB"],
  analytics: ["Power BI", "Tableau", "Custom Dashboards"],
  infrastructure: ["Docker", "AWS", "Azure", "CI/CD"],
  integrations: ["DHIS2 API", "EFRIS", "REST APIs", "HL7/FHIR"],
  ai: ["TensorFlow", "scikit-learn", "LLM Integration", "NLP Pipelines"],
} as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map your operational environment, data flows, and decision points to define the right system architecture.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We design the data model, workflows, interfaces, and integration points with your team's input at every stage.",
  },
  {
    step: "03",
    title: "Build & Ship",
    description:
      "We build, test, and deploy production-grade systems with proper documentation, training, and handover.",
  },
  {
    step: "04",
    title: "Support & Evolve",
    description:
      "We provide ongoing monitoring, maintenance, and iterative improvement as your operations grow.",
  },
] as const;
