import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  hoverable?: boolean;
  className?: string;
};

export function Card({ children, hoverable = false, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8",
        hoverable &&
          "transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
