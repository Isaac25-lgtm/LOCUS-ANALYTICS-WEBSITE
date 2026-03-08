import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MetricProps = {
  value: ReactNode;
  label: string;
  accent?: boolean;
  className?: string;
};

export function Metric({
  value,
  label,
  accent = false,
  className,
}: MetricProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span
        className={cn(
          "text-3xl font-bold lg:text-4xl",
          accent ? "text-brand-600" : "text-slate-900"
        )}
      >
        {value}
      </span>
      <span className="mt-1 text-sm text-slate-500">{label}</span>
    </div>
  );
}
