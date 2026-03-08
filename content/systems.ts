import type { System } from "@/types";

export const systems: System[] = [
  {
    slug: "hmis-health-dashboards",
    title: "HMIS & Health Dashboards",
    description:
      "Real-time health information management systems and performance dashboards for district health teams, hospitals, and national programs.",
    longDescription:
      "We build health management information systems that aggregate facility-level data into actionable dashboards for district health officers, program managers, and policy teams. Our systems integrate with DHIS2, automate indicator calculations, and deliver configurable visualizations across malaria, HIV, immunization, and maternal health programs.",
    icon: "Activity",
    features: [
      "DHIS2 integration and data pipeline automation",
      "District and national performance dashboards",
      "Indicator tracking across health programs",
      "Automated reporting and alert systems",
      "Facility-level data quality monitoring",
      "Configurable visualizations and drill-downs",
    ],
    technologies: ["Python", "Flask", "PostgreSQL", "DHIS2 API", "Power BI", "React"],
    sector: "healthcare",
  },
  {
    slug: "education-management",
    title: "Education Management Systems",
    description:
      "Student information systems, enrollment tracking, performance analytics, and administrative platforms for schools and universities.",
    longDescription:
      "Our education management platforms handle the full lifecycle of institutional administration, from student enrollment and academic records to fee management, timetabling, and performance analytics. Built for the operational realities of Ugandan schools and universities, with offline-capable modules and SMS integration.",
    icon: "GraduationCap",
    features: [
      "Student enrollment and records management",
      "Academic performance tracking and analytics",
      "Fee management and payment tracking",
      "Timetable generation and resource allocation",
      "Parent and guardian communication portals",
      "Examination and grading automation",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    sector: "education",
  },
  {
    slug: "tax-compliance-automation",
    title: "Tax & Compliance Automation",
    description:
      "EFRIS integration, automated tax filing, invoice management, and compliance monitoring for businesses operating in Uganda.",
    longDescription:
      "We build systems that automate the complexity of tax compliance in Uganda's evolving regulatory landscape. Our EFRIS integration tools handle invoice submission, credit note management, and stock reconciliation automatically. Compliance dashboards give finance teams real-time visibility into their obligations.",
    icon: "FileCheck",
    features: [
      "EFRIS API integration and automation",
      "Automated invoice submission and tracking",
      "Credit note and stock reconciliation",
      "Compliance status dashboards",
      "Audit trail and documentation",
      "Multi-branch tax management",
    ],
    technologies: ["Python", "Flask", "PostgreSQL", "REST APIs"],
    sector: "business",
  },
  {
    slug: "workflow-alerts",
    title: "Workflow & Alert Systems",
    description:
      "Custom workflow engines, approval chains, notification systems, and operational automation for institutions and enterprises.",
    longDescription:
      "We design and deploy workflow automation systems that map to real institutional processes, including procurement approvals, leave management, incident reporting, case tracking, and operational escalation. Every workflow includes audit logging, role-based access, and configurable alert channels.",
    icon: "GitBranch",
    features: [
      "Custom workflow engine design",
      "Multi-level approval chains",
      "SMS, email, and push notifications",
      "Role-based access and audit trails",
      "Escalation rules and SLA tracking",
      "Integration with existing systems",
    ],
    technologies: ["Node.js", "PostgreSQL", "Redis", "React"],
    sector: "business",
  },
  {
    slug: "data-pipelines",
    title: "Data Pipelines & Infrastructure",
    description:
      "ETL pipelines, data warehousing, automated reporting, and analytics infrastructure for organizations managing complex data flows.",
    longDescription:
      "We build the data infrastructure that powers decision-making, from raw data ingestion and transformation to clean, queryable warehouses and automated reporting. Our pipelines handle messy real-world data from multiple sources, apply validation and cleaning rules, and deliver reliable datasets for analytics teams.",
    icon: "Database",
    features: [
      "ETL pipeline design and automation",
      "Data warehousing and lake architecture",
      "Data quality monitoring and validation",
      "Automated report generation",
      "API-based data integration",
      "Real-time and batch processing",
    ],
    technologies: ["Python", "PostgreSQL", "Docker", "AWS", "Apache Airflow"],
    sector: "data-ai",
  },
  {
    slug: "ai-decision-support",
    title: "AI Assistants & Decision Support",
    description:
      "Machine learning models, NLP tools, predictive analytics, and intelligent assistants embedded into operational systems.",
    longDescription:
      "We integrate AI capabilities directly into operational workflows, not as standalone experiments, but as embedded intelligence that improves decisions. From predictive models for disease surveillance to NLP-powered document processing and LLM-based assistants for institutional knowledge management.",
    icon: "Brain",
    features: [
      "Predictive analytics and forecasting models",
      "Natural language processing pipelines",
      "LLM integration for knowledge management",
      "Document classification and extraction",
      "Anomaly detection and alerting",
      "Model monitoring and retraining pipelines",
    ],
    technologies: ["Python", "TensorFlow", "scikit-learn", "FastAPI", "Docker"],
    sector: "data-ai",
  },
];
