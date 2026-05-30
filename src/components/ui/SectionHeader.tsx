import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, action, className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-12 flex w-full max-w-7xl flex-col gap-6 px-5 sm:px-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:px-10",
        className,
      )}
    >
      <div className="max-w-4xl">
        <p className="section-label">{eyebrow}</p>
        <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
