export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface System {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
  sector: string;
}

export interface Sector {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  systems: string[];
  challenges: string[];
  outcomes: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  sector: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  metrics: { label: string; value: string }[];
  technologies: string[];
}

export interface Principle {
  title: string;
  description: string;
  icon: string;
}

export interface Capability {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  phone?: string;
  sector: string;
  message: string;
  honeypot?: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
}
