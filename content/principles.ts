import type { Principle } from "@/types";

export const principles: Principle[] = [
  {
    title: "Security First",
    description:
      "Every system is built with defense in depth: encrypted data, role-based access, audit logging, and secure deployment from day one.",
    icon: "Shield",
  },
  {
    title: "Observability",
    description:
      "We instrument our systems for real-time monitoring, structured logging, and proactive alerting so issues are caught before they become failures.",
    icon: "Eye",
  },
  {
    title: "Operational Clarity",
    description:
      "Our systems come with clear documentation, runbooks, and training materials. Your team should be able to understand and operate what we build.",
    icon: "FileText",
  },
  {
    title: "Ongoing Support",
    description:
      "We provide structured maintenance, incident response, and iterative improvements. We don't build and disappear.",
    icon: "Headphones",
  },
];
