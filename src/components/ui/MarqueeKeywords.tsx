import { profile } from "@/data/profile";

export function MarqueeKeywords() {
  const keywords = [...profile.keywords, ...profile.keywords];

  return (
    <div className="overflow-hidden border-y border-neutral-950/10 bg-neutral-950 py-4 text-cream">
      <div className="marquee-track">
        {keywords.map((keyword, index) => (
          <span key={`${keyword}-${index}`} className="mx-6 inline-flex items-center gap-6 text-sm font-semibold uppercase tracking-[0.28em]">
            {keyword}
            <span className="size-1.5 rounded-full bg-vin-red" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
