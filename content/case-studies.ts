import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "hmis-district-dashboard",
    title: "HMIS Dashboard for District Health Teams",
    client: "Ministry of Health / CHAI",
    sector: "Healthcare",
    challenge:
      "District health teams across Uganda were relying on delayed, manually compiled reports to track facility performance across malaria, immunization, and maternal health programs. Decision-makers had no real-time visibility into service delivery gaps.",
    solution:
      "We built an automated HMIS dashboard that integrates directly with DHIS2, aggregates facility-level data, and delivers real-time performance visualizations to district health officers. The system includes automated indicator calculations, trend analysis, and configurable alerts for underperforming facilities.",
    outcomes: [
      "Real-time visibility across 50+ health facilities per district",
      "Automated monthly reporting that previously took 2 weeks manually",
      "Early detection of stockout and service delivery gaps",
      "Adopted by multiple districts as standard monitoring tool",
    ],
    metrics: [
      { label: "Reporting Time", value: "85% faster" },
      { label: "Facilities Monitored", value: "50+" },
      { label: "Programs Tracked", value: "6" },
      { label: "Data Freshness", value: "Real-time" },
    ],
    technologies: ["Python", "DHIS2 API", "PostgreSQL", "Power BI", "Flask"],
  },
  {
    slug: "efris-tax-automation",
    title: "EFRIS Tax Automation for Retail Chain",
    client: "National retail enterprise",
    sector: "Business",
    challenge:
      "A multi-branch retail operation was struggling to comply with URA's EFRIS requirements. Manual invoice submission across branches was error-prone, slow, and created compliance risk. Finance teams spent days reconciling tax records.",
    solution:
      "We built an automated EFRIS integration system that connects the client's POS and ERP systems directly to the URA EFRIS API. The system handles real-time invoice submission, credit note management, stock declarations, and compliance reporting across all branches from a single dashboard.",
    outcomes: [
      "100% EFRIS compliance across all branches",
      "Eliminated manual invoice submission entirely",
      "Real-time compliance status visibility for finance team",
      "Automated reconciliation reduced monthly close time by 70%",
    ],
    metrics: [
      { label: "Compliance Rate", value: "100%" },
      { label: "Manual Work", value: "Eliminated" },
      { label: "Monthly Close", value: "70% faster" },
      { label: "Branches Covered", value: "12" },
    ],
    technologies: ["Python", "Flask", "PostgreSQL", "EFRIS API", "React"],
  },
  {
    slug: "education-management-platform",
    title: "Student Management Platform for Secondary Schools",
    client: "Private school network",
    sector: "Education",
    challenge:
      "A network of secondary schools was managing student records, exam results, fee tracking, and parent communication through a patchwork of spreadsheets, paper files, and WhatsApp groups. Administrative staff were overwhelmed and data was inconsistent.",
    solution:
      "We designed and deployed a unified student management platform covering enrollment, academic records, fee management, and parent communication. The system includes role-based access for teachers, administrators, and parents, with SMS integration for critical notifications.",
    outcomes: [
      "Centralized student records across all campuses",
      "Automated report card generation and distribution",
      "Real-time fee tracking with payment reminders",
      "Reduced administrative workload by approximately 60%",
    ],
    metrics: [
      { label: "Admin Workload", value: "−60%" },
      { label: "Students Managed", value: "3,000+" },
      { label: "Report Cards", value: "Automated" },
      { label: "Campuses", value: "4" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    slug: "workflow-automation-ngo",
    title: "Workflow Automation for Development Partner",
    client: "International NGO",
    sector: "Public Sector",
    challenge:
      "A major development partner operating across multiple districts was tracking program activities, approvals, and field reports through email chains and shared drives. Reporting to donors took weeks and lacked consistency.",
    solution:
      "We built a custom workflow platform with structured approval chains, field reporting forms, automated donor report generation, and role-based dashboards for country and regional management.",
    outcomes: [
      "Structured approval workflows across 8 districts",
      "Automated donor reporting reduced from 3 weeks to 2 days",
      "Full audit trail for all program activities",
      "Real-time visibility into field operations",
    ],
    metrics: [
      { label: "Reporting Time", value: "90% faster" },
      { label: "Districts", value: "8" },
      { label: "Audit Trail", value: "Complete" },
      { label: "Adoption", value: "100%" },
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "Redis"],
  },
  {
    slug: "data-warehouse-healthcare",
    title: "Health Data Warehouse & Analytics Platform",
    client: "National health program",
    sector: "Healthcare",
    challenge:
      "A national health program had data scattered across DHIS2 instances, spreadsheets, and partner databases. There was no single source of truth for cross-program analysis or national reporting.",
    solution:
      "We designed and deployed a centralized data warehouse that ingests data from multiple sources via automated ETL pipelines, normalizes indicators, and powers a suite of analytics dashboards for national and district decision-makers.",
    outcomes: [
      "Unified data from 5 previously siloed sources",
      "Automated daily data ingestion and quality checks",
      "National dashboards used by senior program leadership",
      "Enabled cross-program analysis for the first time",
    ],
    metrics: [
      { label: "Data Sources", value: "5 unified" },
      { label: "Ingestion", value: "Automated" },
      { label: "Quality Checks", value: "Daily" },
      { label: "Users", value: "200+" },
    ],
    technologies: ["Python", "PostgreSQL", "Apache Airflow", "Power BI"],
  },
  {
    slug: "ai-document-processing",
    title: "AI-Powered Document Processing System",
    client: "Financial services firm",
    sector: "Business",
    challenge:
      "A financial services company was manually reviewing and extracting data from hundreds of compliance documents weekly. The process was slow, error-prone, and couldn't scale with growing regulatory requirements.",
    solution:
      "We built an AI document processing pipeline using NLP models for classification, entity extraction, and compliance flagging. Documents are automatically categorized, key data fields extracted, and anomalies flagged for human review.",
    outcomes: [
      "Automated processing of 500+ documents per week",
      "Reduced manual review time by 75%",
      "Improved extraction accuracy to 96%",
      "Scalable pipeline handling growing document volumes",
    ],
    metrics: [
      { label: "Documents/Week", value: "500+" },
      { label: "Manual Review", value: "−75%" },
      { label: "Accuracy", value: "96%" },
      { label: "Processing", value: "Automated" },
    ],
    technologies: ["Python", "FastAPI", "TensorFlow", "PostgreSQL"],
  },
];
