import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  compact?: boolean;
  className?: string;
};

export function SocialLinks({ compact = false, className }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noreferrer" : undefined}
            className={cn(
              "group inline-flex items-center gap-2 rounded-full border border-neutral-950/10 bg-white/60 font-semibold text-neutral-800 transition hover:border-vin-red hover:text-vin-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vin-red",
              compact ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm",
            )}
            aria-label={social.label}
          >
            <Icon className={cn("transition group-hover:-translate-y-0.5", compact ? "size-4" : "size-5")} />
            <span>{compact ? social.label : social.value}</span>
          </a>
        );
      })}
    </div>
  );
}
