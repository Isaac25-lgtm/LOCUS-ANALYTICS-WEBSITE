import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { footerNavigation } from "@/content/navigation";

const sectorLinks = [
  { label: "Healthcare", href: "/sectors#healthcare" },
  { label: "Education", href: "/sectors#education" },
  { label: "Business", href: "/sectors#business" },
  { label: "Public Sector", href: "/sectors#public-sector" },
  { label: "Data & AI", href: "/capabilities" },
];

const columnHeadingClass =
  "text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3";
const linkClass =
  "text-xs text-slate-300 hover:text-white transition-colors";

export function Footer() {
  return (
    <footer className="bg-navy-900">
      {/* Main footer columns */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/">
              <Image
                src="/brand/Asset 2.png"
                alt="Locus Analytics"
                width={160}
                height={40}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-3 text-xs text-slate-400 leading-relaxed max-w-xs">
              {SITE.tagline}
            </p>
            <div className="mt-3 flex flex-col gap-0.5">
              <a
                href={`mailto:${SITE.email.primary}`}
                className="text-slate-400 hover:text-white text-xs transition-colors"
              >
                {SITE.email.primary}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="text-slate-400 hover:text-white text-xs transition-colors"
              >
                {SITE.phone}
              </a>
            </div>
          </div>

          {/* Company column */}
          <div>
            <h3 className={columnHeadingClass}>Company</h3>
            <ul className="flex flex-col gap-2">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions column */}
          <div>
            <h3 className={columnHeadingClass}>Solutions</h3>
            <ul className="flex flex-col gap-2">
              {footerNavigation.solutions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors column */}
          <div>
            <h3 className={columnHeadingClass}>Sectors</h3>
            <ul className="flex flex-col gap-2">
              {sectorLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3.5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-[11px] text-slate-500">
              &copy; {new Date().getFullYear()} {SITE.legalName}. All rights
              reserved.
            </p>
            <div className="flex gap-5">
              {footerNavigation.legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
