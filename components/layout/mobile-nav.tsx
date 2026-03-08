"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { mainNavigation } from "@/content/navigation";
import { SITE } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex h-full flex-col px-8 py-8">
              {/* Close button */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-slate-500 hover:text-slate-900 transition-colors"
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="mt-10 flex flex-col gap-1">
                {mainNavigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Divider */}
              <div className="my-8 h-px bg-slate-200" />

              {/* Contact info */}
              <div className="space-y-2 text-sm text-slate-500">
                <p>{SITE.email.primary}</p>
                <p>{SITE.phone}</p>
              </div>

              {/* CTA */}
              <div className="mt-auto pb-8">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex w-full items-center justify-center rounded-md bg-brand-600 px-6 py-3 text-sm font-medium text-white hover:bg-brand-700 transition-colors"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
