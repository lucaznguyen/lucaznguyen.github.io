import { ArrowUpRight } from "lucide-react";
import { news } from "@/data/news";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { formatShortDate } from "@/lib/utils";

type NewsTimelineProps = {
  limit?: number;
  showHeader?: boolean;
};

export function NewsTimeline({ limit, showHeader = true }: NewsTimelineProps) {
  const items = limit ? news.slice(0, limit) : news;

  return (
    <section className="section bg-cream">
      {showHeader ? (
        <SectionHeader
          eyebrow="/ News"
          title="Milestones in publication, service, awards, and research life."
          description="A chronological record of selected updates."
          action={
            <ButtonLink href="/news" variant="outline">
              All news
            </ButtonLink>
          }
        />
      ) : null}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-neutral-950/10 sm:block" aria-hidden="true" />
          <div className="grid gap-4">
            {items.map((item, index) => {
              const content = (
                <article className="group grid gap-5 rounded-[2rem] border border-neutral-950/10 bg-white/70 p-5 shadow-soft transition hover:-translate-y-1 hover:border-vin-red/30 hover:bg-white sm:grid-cols-[10rem_1fr] sm:p-6">
                  <div className="flex items-center gap-4">
                    <span className="hidden size-8 rounded-full border border-neutral-950/10 bg-cream sm:block" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-neutral-950">{formatShortDate(item.date)}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-vin-red">{item.category}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-balance text-xl font-semibold tracking-tight text-neutral-950">{item.title}</h3>
                    <p className="mt-2 text-base leading-7 text-neutral-600">{item.description}</p>
                  </div>
                  {item.href ? (
                    <ArrowUpRight className="absolute right-6 top-6 size-5 text-neutral-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-vin-red" />
                  ) : null}
                </article>
              );

              return (
                <Reveal key={`${item.date}-${item.title}`} delay={index * 0.025}>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="relative block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vin-red">
                      {content}
                    </a>
                  ) : (
                    <div className="relative">{content}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
