import type { Metadata } from "next";
import { PublicationExplorer } from "@/components/sections/PublicationExplorer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Publications",
  "Publications by Thinh Nguyen (Lucaz), including CVPR 2026 papers and work on federated learning, continual learning, and trustworthy AI.",
  "/publications",
);

export default function PublicationsPage() {
  return (
    <section className="section bg-cream">
      <SectionHeader
        eyebrow="/ Publications"
        title="Research papers across federated, continual, and trustworthy learning."
        description="Filter by status or topic. Links are included where a public record is available."
      />
      <PublicationExplorer />
    </section>
  );
}
