import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline" | "accent" | "ghost";
  className?: string;
  showArrow?: boolean;
};

const variants = {
  dark: "bg-neutral-950 text-white hover:bg-neutral-800",
  light: "bg-cream text-neutral-950 hover:bg-white",
  outline:
    "border border-neutral-950/15 bg-white/50 text-neutral-950 hover:border-neutral-950 hover:bg-white",
  accent: "bg-vin-red text-white hover:bg-vin-red-dark",
  ghost: "text-neutral-950 hover:bg-neutral-950/5",
};

export function ButtonLink({
  href,
  children,
  variant = "dark",
  className,
  showArrow = true,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vin-red",
    variants[variant],
    className,
  );
  const content = (
    <>
      {children}
      {showArrow ? <ArrowUpRight className="size-4" aria-hidden="true" /> : null}
    </>
  );

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
