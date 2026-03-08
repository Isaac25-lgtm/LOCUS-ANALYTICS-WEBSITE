import type { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Systems", href: "/systems" },
  { label: "Sectors", href: "/sectors" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  company: [
    { label: "About", href: "/about" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Contact", href: "/contact" },
  ],
  solutions: [
    { label: "Systems", href: "/systems" },
    { label: "Sectors", href: "/sectors" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "/security" },
  ],
};
