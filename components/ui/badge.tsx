import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  brand: "bg-brand-50 text-brand-700",
  neutral: "bg-slate-100 text-slate-700",
};

type BadgeProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function Badge({
  children,
  variant = "neutral",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
