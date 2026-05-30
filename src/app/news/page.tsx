import type { Metadata } from "next";
import { NewsTimeline } from "@/components/sections/NewsTimeline";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "News",
  "News and milestones for Thinh Nguyen (Lucaz), including publications, awards, service, and research updates.",
  "/news",
);

export default function NewsPage() {
  return (
    <>
      <section className="bg-cream pt-20">
        <SectionHeader
          eyebrow="/ News"
          title="A timeline of research milestones and academic service."
          description="Selected updates across publications, reviewing, competitions, mentorship, and awards."
        />
      </section>
      <NewsTimeline showHeader={false} />
    </>
  );
}
