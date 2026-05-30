import { ArrowUpRight } from "lucide-react";
import type { Publication } from "@/data/publications";
import { TagList } from "@/components/ui/TagList";
import { cn } from "@/lib/utils";

type PublicationCardProps = {
  publication: Publication;
  compact?: boolean;
};

export function PublicationCard({ publication, compact = false }: PublicationCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-[2rem] border border-neutral-950/10 bg-white/70 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-vin-red/30 hover:bg-white",
        compact ? "min-h-96" : "min-h-[28rem]",
      )}
    >
      <div className="flex items-start justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
        <span>{publication.venue}</span>
        <span>{publication.year}</span>
      </div>
      <div className="mt-6 flex items-start gap-3">
        <h3 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-neutral-950">
          {publication.title}
        </h3>
        {publication.featured ? (
          <span className="shrink-0 rounded-full bg-vin-red px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white">
            Featured
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-6 text-neutral-500">{publication.authors.join(", ")}</p>
      <p className="mt-5 text-base leading-7 text-neutral-700">{publication.summary}</p>
      <div className="mt-6">
        <TagList tags={publication.tags} compact />
      </div>
      <div className="mt-auto flex items-center justify-between gap-4 pt-8">
        <span className="rounded-full border border-neutral-950/10 bg-cream px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-neutral-700">
          {publication.status}
        </span>
        {publication.links?.length ? (
          <div className="flex flex-wrap justify-end gap-2">
            {publication.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full text-sm font-semibold text-neutral-950 transition hover:text-vin-red"
              >
                {link.label}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
