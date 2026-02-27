import {
  Heart,
  GraduationCap,
  Receipt,
  Bell,
  Database,
  Bot,
  Activity,
  FileText,
  ShieldCheck,
  BarChart3,
  Users,
  Building2,
  School,
  Stethoscope,
  Calculator,
  Workflow,
  Server,
  BrainCircuit,
  type LucideIcon,
} from 'lucide-react';

export interface CapabilityFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
}

export interface CapabilityData {
  slug: string;
  image: string;
  title: string;
  headline: string;
  description: string;
  accentColor: string;
  features: string[];
  extendedDescription: string[];
  detailedFeatures: CapabilityFeature[];
  useCases: UseCase[];
  techStack: string[];
  whoItsFor: string[];
}

export const capabilities: CapabilityData[] = [
  {
    slug: 'health-dashboards',
    image: '/cap-health.jpg',
    title: 'HMIS & Health Dashboards',
    headline: 'Health information systems that work in the real world',
    description:
      'DHIS2 integrations, facility reporting, and program dashboards for the health sector.',
    accentColor: '#e11d48',
    features: [
      'DHIS2 API integration',
      'Real-time HMIS dashboards',
      'Program-specific reporting',
      'Automated data validation',
    ],
    extendedDescription: [
      'We build health information systems that bridge the gap between field data collection and national reporting. Our platforms integrate directly with DHIS2, enabling facilities to submit, validate, and visualize data without leaving a single interface.',
      'From MNCAH program tracking to malaria surveillance and EPI monitoring, our dashboards are tailored to the indicators that matter. Health workers see what they need at the point of care, while district and national teams get aggregated insights in real time.',
      'Every system we deploy includes offline capability, automated data quality checks, and role-based access so that the right people see the right data at the right time.',
    ],
    detailedFeatures: [
      {
        icon: Activity,
        title: 'DHIS2 API Integration',
        description:
          'Bi-directional sync with DHIS2 for seamless data exchange between facility systems and the national health data warehouse. Push and pull data sets, organisation units, and indicators automatically.',
      },
      {
        icon: BarChart3,
        title: 'Real-Time HMIS Dashboards',
        description:
          'Interactive dashboards showing facility performance, disease trends, commodity stocks, and program coverage. Auto-refreshing charts and maps that update as data flows in from the field.',
      },
      {
        icon: FileText,
        title: 'Program-Specific Reporting',
        description:
          'Custom reporting modules for MNCAH, malaria, EPI, HIV/AIDS, TB, and nutrition programs. Pre-built templates aligned to MOH reporting requirements with automated aggregation.',
      },
      {
        icon: ShieldCheck,
        title: 'Automated Data Validation',
        description:
          'Rule-based validation that catches errors at entry, flags outliers, and enforces completeness. Reduces data quality issues before they reach the national level.',
      },
      {
        icon: Stethoscope,
        title: 'Pharmacy & Commodity Management',
        description:
          'Track drug stocks, consumption rates, and expiry dates. Automated alerts for stock-outs and reorder points. Linked to HMIS for integrated supply chain visibility.',
      },
      {
        icon: Users,
        title: 'Community Health Tools',
        description:
          'Mobile-friendly tools for community health workers to register households, track referrals, and report on outreach activities. Works offline and syncs when connectivity returns.',
      },
    ],
    useCases: [
      {
        title: 'District health offices',
        description: 'Aggregate facility data, monitor reporting rates, and generate quarterly reports for the Ministry of Health.',
      },
      {
        title: 'Hospital administration',
        description: 'Track patient volumes, bed occupancy, referral patterns, and department-level performance indicators.',
      },
      {
        title: 'NGO health programs',
        description: 'Monitor program-specific indicators (MNCAH, malaria, EPI) with custom dashboards and donor-ready reports.',
      },
      {
        title: 'Pharmaceutical supply chains',
        description: 'Visibility into drug stocks across facilities with automated alerts for stock-outs and redistribution recommendations.',
      },
    ],
    techStack: ['DHIS2 API', 'Python', 'Flask', 'PostgreSQL', 'React', 'Power BI', 'Docker', 'REST APIs'],
    whoItsFor: ['Ministry of Health', 'District Health Teams', 'Hospitals & Clinics', 'NGOs & Implementing Partners', 'Community Health Programs'],
  },
  {
    slug: 'education-management',
    image: '/cap-education.jpg',
    title: 'Education Management',
    headline: 'Unified platforms for schools and universities',
    description:
      'Records, attendance, fees, and parent communication,unified for institutions.',
    accentColor: '#2F6BFF',
    features: [
      'Student information systems',
      'Attendance tracking',
      'Fee management',
      'Parent portals',
    ],
    extendedDescription: [
      'We build school management systems that bring academics, administration, and communication onto a single platform. From student registration to graduation, every process is digitized and streamlined.',
      'Our education platforms handle the complexity of multi-campus institutions, term-based fee structures, and diverse grading systems. Teachers spend less time on paperwork and more time teaching, while administrators get real-time visibility into operations.',
      'Parent portals keep families informed with attendance records, academic results, fee balances, and school announcements,accessible from any phone or computer.',
    ],
    detailedFeatures: [
      {
        icon: Users,
        title: 'Student Information System',
        description:
          'Centralized student records from enrollment to graduation. Academic history, personal details, medical records, and disciplinary notes in one secure, searchable database.',
      },
      {
        icon: FileText,
        title: 'Attendance Tracking',
        description:
          'Digital attendance with daily, subject-level, and event-based tracking. Automated SMS alerts to parents for absences. Attendance analytics to identify at-risk students.',
      },
      {
        icon: Calculator,
        title: 'Fee Management',
        description:
          'Term-based fee structures, payment tracking, automated receipts, and balance reminders. Supports mobile money, bank transfers, and cash payments with reconciliation tools.',
      },
      {
        icon: Heart,
        title: 'Parent Portal',
        description:
          'Self-service portal for parents to view grades, attendance, fee balances, and school announcements. Real-time push notifications for important updates.',
      },
      {
        icon: BarChart3,
        title: 'Academic Analytics',
        description:
          'Performance dashboards showing class averages, subject trends, and student progress over time. Early warning systems for academic under-performance.',
      },
      {
        icon: GraduationCap,
        title: 'Exam & Grading',
        description:
          'Configurable grading scales, automated report card generation, and transcript management. Supports UNEB, Cambridge, and custom assessment frameworks.',
      },
    ],
    useCases: [
      {
        title: 'Primary & secondary schools',
        description: 'End-to-end school management covering admissions, academics, fees, and communication.',
      },
      {
        title: 'Universities & colleges',
        description: 'Course registration, credit tracking, faculty management, and multi-campus coordination.',
      },
      {
        title: 'School networks & chains',
        description: 'Centralized oversight of multiple campuses with comparative analytics and unified policies.',
      },
      {
        title: 'Education NGOs',
        description: 'Track scholarship recipients, monitor beneficiary performance, and generate program impact reports.',
      },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Mobile Money API', 'SMS Gateway', 'Docker', 'AWS'],
    whoItsFor: ['Primary & Secondary Schools', 'Universities & Colleges', 'School Networks', 'Education NGOs', 'Parents & Students'],
  },
  {
    slug: 'tax-compliance',
    image: '/cap-tax.jpg',
    title: 'Tax & Compliance Automation',
    headline: 'Stay compliant without the complexity',
    description:
      'URA/EFRIS-ready flows, invoicing, and reconciliation for businesses.',
    accentColor: '#059669',
    features: [
      'URA tax automation',
      'EFRIS integration',
      'Electronic invoicing',
      'Audit trails',
    ],
    extendedDescription: [
      'We build tax automation systems that keep businesses compliant with URA regulations without adding overhead. Our EFRIS-integrated solutions handle invoicing, returns, and reconciliation automatically.',
      'From e-invoicing to withholding tax calculations and VAT returns, our platforms reduce the manual work that leads to errors and penalties. Businesses can focus on operations while the system handles compliance.',
      'Complete audit trails, automated filing reminders, and real-time tax liability dashboards give business owners and accountants the visibility they need to stay ahead of deadlines.',
    ],
    detailedFeatures: [
      {
        icon: Receipt,
        title: 'URA Tax Automation',
        description:
          'Automated computation of VAT, PAYE, withholding tax, and corporate tax. Pre-filled returns generated from your transaction data, ready for submission to URA.',
      },
      {
        icon: Workflow,
        title: 'EFRIS Integration',
        description:
          'Direct integration with the Electronic Fiscal Receipting and Invoicing System. Every sale automatically generates a compliant fiscal receipt without manual intervention.',
      },
      {
        icon: FileText,
        title: 'Electronic Invoicing',
        description:
          'Professional invoice generation with automatic tax calculations, multi-currency support, and payment tracking. Invoices are stored and searchable for easy retrieval during audits.',
      },
      {
        icon: ShieldCheck,
        title: 'Audit Trails',
        description:
          'Immutable logs of every transaction, modification, and approval. Timestamp-verified records that satisfy URA audit requirements and simplify the review process.',
      },
      {
        icon: BarChart3,
        title: 'Tax Liability Dashboard',
        description:
          'Real-time view of your tax obligations, upcoming deadlines, and payment history. Visual breakdowns of tax categories to help with financial planning.',
      },
      {
        icon: Calculator,
        title: 'Reconciliation Tools',
        description:
          'Automated matching of invoices, payments, and bank statements. Identifies discrepancies and generates reconciliation reports for accountants.',
      },
    ],
    useCases: [
      {
        title: 'Retail & wholesale businesses',
        description: 'EFRIS-compliant POS systems with automated fiscal receipting for every sale.',
      },
      {
        title: 'Service companies',
        description: 'Professional invoicing with withholding tax handling and automated payment reminders.',
      },
      {
        title: 'Accounting firms',
        description: 'Multi-client tax management with batch return preparation and filing status tracking.',
      },
      {
        title: 'Import/export businesses',
        description: 'Customs duty calculations, multi-currency invoicing, and cross-border compliance.',
      },
    ],
    techStack: ['Python', 'Flask', 'PostgreSQL', 'URA API', 'EFRIS API', 'React', 'Docker', 'Encryption'],
    whoItsFor: ['Retail Businesses', 'Service Companies', 'Accounting Firms', 'Importers & Exporters', 'SMEs & Enterprises'],
  },
  {
    slug: 'workflow-alerts',
    image: '/cap-workflow.jpg',
    title: 'Workflow & Alerts',
    headline: 'Automate decisions, escalations, and notifications',
    description:
      'Escalations, approvals, and notifications,rule-based and fast.',
    accentColor: '#d97706',
    features: [
      'Custom workflow builder',
      'Multi-level approvals',
      'SMS & email alerts',
      'Escalation rules',
    ],
    extendedDescription: [
      'We build workflow engines that turn manual processes into automated, auditable pipelines. From procurement approvals to incident escalations, every step is tracked and enforced by rules you define.',
      'Our alert systems integrate with SMS, email, WhatsApp, and push notifications to make sure the right person is notified at the right time. Escalation chains ensure nothing falls through the cracks.',
      'Visual workflow builders let non-technical users design and modify processes without writing code. Drag-and-drop interfaces with conditional logic, parallel branches, and time-based triggers.',
    ],
    detailedFeatures: [
      {
        icon: Workflow,
        title: 'Custom Workflow Builder',
        description:
          'Visual drag-and-drop interface for designing multi-step processes. Define conditions, parallel paths, and loops without writing code. Templates for common workflows included.',
      },
      {
        icon: Users,
        title: 'Multi-Level Approvals',
        description:
          'Configurable approval chains with role-based routing, delegation rules, and automatic escalation on timeout. Supports sequential, parallel, and conditional approval paths.',
      },
      {
        icon: Bell,
        title: 'SMS & Email Alerts',
        description:
          'Multi-channel notifications triggered by workflow events. Customizable message templates with dynamic data insertion. Delivery tracking and retry logic for failed messages.',
      },
      {
        icon: Activity,
        title: 'Escalation Rules',
        description:
          'Time-based and condition-based escalation chains. When a task is overdue or a threshold is breached, the system automatically notifies the next level in the chain.',
      },
      {
        icon: BarChart3,
        title: 'Process Analytics',
        description:
          'Track cycle times, bottleneck identification, and SLA compliance across all workflows. Historical data to optimize processes over time.',
      },
      {
        icon: ShieldCheck,
        title: 'Audit & Compliance',
        description:
          'Every workflow action is logged with timestamps, actors, and outcomes. Exportable audit logs for regulatory compliance and internal reviews.',
      },
    ],
    useCases: [
      {
        title: 'Procurement & approvals',
        description: 'Multi-level purchase order approvals with budget checks and vendor management.',
      },
      {
        title: 'Incident management',
        description: 'Automated escalation of IT, maintenance, or safety incidents based on severity and response time.',
      },
      {
        title: 'Leave & HR processes',
        description: 'Employee leave requests, onboarding checklists, and performance review workflows.',
      },
      {
        title: 'Healthcare alerts',
        description: 'Disease outbreak notifications, stock-out alerts, and patient follow-up reminders.',
      },
    ],
    techStack: ['Node.js', 'React', 'PostgreSQL', 'Redis', 'SMS Gateway', 'WhatsApp API', 'Docker', 'WebSocket'],
    whoItsFor: ['Hospitals & Health Programs', 'Government Agencies', 'Enterprises', 'NGOs', 'Schools & Universities'],
  },
  {
    slug: 'data-pipelines',
    image: '/cap-data.jpg',
    title: 'Data Pipelines',
    headline: 'Clean data in, reliable insights out',
    description: 'Clean ingest, validation, and scheduled exports.',
    accentColor: '#7c3aed',
    features: [
      'ETL processes',
      'Data quality checks',
      'Scheduled exports',
      'API integrations',
    ],
    extendedDescription: [
      'We build data pipelines that transform raw, messy data into clean, reliable datasets ready for analysis. Whether it is facility reports, financial transactions, or sensor data, our ETL processes handle the heavy lifting.',
      'Our pipelines run on schedule or on demand, pulling data from APIs, databases, spreadsheets, and flat files. Built-in validation catches errors early, and transformation rules ensure consistency across sources.',
      'Outputs feed into dashboards, data warehouses, or downstream systems. Every pipeline is monitored, logged, and recoverable so you never lose data or miss a deadline.',
    ],
    detailedFeatures: [
      {
        icon: Database,
        title: 'ETL Processes',
        description:
          'Extract-Transform-Load pipelines that pull data from multiple sources, apply cleaning and transformation rules, and load into your target systems. Handles CSV, JSON, XML, API, and database sources.',
      },
      {
        icon: ShieldCheck,
        title: 'Data Quality Checks',
        description:
          'Rule-based validation at every stage: completeness, format, range, uniqueness, and referential integrity. Quarantine invalid records for review without blocking the pipeline.',
      },
      {
        icon: Server,
        title: 'Scheduled Exports',
        description:
          'Cron-based and event-driven exports to dashboards, data warehouses, or partner systems. Configurable formats, encryption, and delivery methods (SFTP, API, email).',
      },
      {
        icon: Workflow,
        title: 'API Integrations',
        description:
          'Pre-built connectors for DHIS2, URA, mobile money providers, and common SaaS tools. Custom API adapters for any REST or GraphQL endpoint.',
      },
      {
        icon: Activity,
        title: 'Pipeline Monitoring',
        description:
          'Real-time status dashboards showing pipeline runs, success rates, data volumes, and error counts. Automated alerts when pipelines fail or degrade.',
      },
      {
        icon: BarChart3,
        title: 'Data Lineage',
        description:
          'Track data from source to destination. Know exactly where every record came from, what transformations were applied, and where it ended up.',
      },
    ],
    useCases: [
      {
        title: 'Health data aggregation',
        description: 'Consolidate facility-level HMIS data from multiple sources into a unified reporting warehouse.',
      },
      {
        title: 'Financial reconciliation',
        description: 'Automated matching of payment records from mobile money, banks, and POS systems.',
      },
      {
        title: 'M&E reporting',
        description: 'Aggregate program data from field tools into donor-ready reports and dashboards.',
      },
      {
        title: 'Data migration',
        description: 'Safe, validated transfer of records between legacy systems and modern platforms.',
      },
    ],
    techStack: ['Python', 'Apache Airflow', 'PostgreSQL', 'Redis', 'Docker', 'AWS S3', 'REST APIs', 'GraphQL'],
    whoItsFor: ['Health Programs', 'Financial Institutions', 'Government Agencies', 'Research Organizations', 'NGOs'],
  },
  {
    slug: 'ai-assistants',
    image: '/cap-ai.jpg',
    title: 'AI Assistants',
    headline: 'AI trained on your data, not the internet',
    description:
      'LLM-powered search, document generation, and decision support.',
    accentColor: '#0891b2',
    features: [
      'Claude API integration',
      'Smart document generation',
      'Predictive analytics',
      'Chatbot interfaces',
    ],
    extendedDescription: [
      'We build AI assistants that understand your organization\'s data, documents, and processes. Powered by large language models and grounded in your own knowledge base, these tools augment human decision-making without hallucination risks.',
      'From intelligent search across thousands of documents to automated report generation and predictive analytics, our AI solutions are practical, secure, and designed for non-technical users.',
      'Every AI system we deploy includes guardrails, human-in-the-loop review, and transparent reasoning so teams can trust and verify the outputs they receive.',
    ],
    detailedFeatures: [
      {
        icon: BrainCircuit,
        title: 'Claude API Integration',
        description:
          'Enterprise-grade LLM integration using Anthropic\'s Claude API. Retrieval-augmented generation (RAG) ensures responses are grounded in your organization\'s actual data and documents.',
      },
      {
        icon: FileText,
        title: 'Smart Document Generation',
        description:
          'Automated generation of reports, proposals, summaries, and correspondence. Templates combined with AI produce polished documents in seconds instead of hours.',
      },
      {
        icon: BarChart3,
        title: 'Predictive Analytics',
        description:
          'Machine learning models for demand forecasting, risk scoring, and trend analysis. Trained on your historical data to predict outcomes specific to your operations.',
      },
      {
        icon: Bot,
        title: 'Chatbot Interfaces',
        description:
          'Conversational AI that answers questions about your data, guides users through processes, and provides instant support. Deployable on web, WhatsApp, and internal tools.',
      },
      {
        icon: Database,
        title: 'Knowledge Base Search',
        description:
          'Semantic search across documents, policies, SOPs, and records. Users ask questions in plain language and get precise answers with source citations.',
      },
      {
        icon: ShieldCheck,
        title: 'AI Guardrails',
        description:
          'Built-in safety: content filtering, hallucination detection, human-in-the-loop review, and transparent reasoning chains. Every AI output is auditable and explainable.',
      },
    ],
    useCases: [
      {
        title: 'Healthcare decision support',
        description: 'AI assistants that help clinicians interpret guidelines, check drug interactions, and generate patient summaries.',
      },
      {
        title: 'Document intelligence',
        description: 'Extract structured data from contracts, reports, and forms. Summarize lengthy documents instantly.',
      },
      {
        title: 'Customer support bots',
        description: 'WhatsApp and web chatbots that answer FAQs, process orders, and escalate complex queries to human agents.',
      },
      {
        title: 'M&E analytics',
        description: 'AI-powered analysis of program data to surface insights, anomalies, and recommendations for decision-makers.',
      },
    ],
    techStack: ['Claude API', 'Python', 'LangChain', 'Vector DB', 'React', 'TensorFlow', 'Docker', 'AWS'],
    whoItsFor: ['Healthcare Organizations', 'Government Agencies', 'Enterprises', 'NGOs', 'Educational Institutions'],
  },
];
