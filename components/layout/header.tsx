"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNavigation } from "@/content/navigation";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 w-full z-40 bg-white border-b transition-shadow duration-300",
          scrolled ? "border-slate-200 shadow-sm" : "border-slate-100"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/brand/Asset 2.png"
                alt="Locus Analytics"
                width={180}
                height={46}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-7">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] font-medium text-slate-700 hover:text-brand-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA + Mobile hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center rounded-md bg-brand-600 px-5 py-2 text-[13px] font-medium text-white hover:bg-brand-700 transition-colors"
              >
                Request a Demo
              </Link>

              <button
                type="button"
                className="md:hidden -m-2.5 p-2.5 text-slate-700"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
