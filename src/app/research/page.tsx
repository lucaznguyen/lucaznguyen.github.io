import type { Metadata } from "next";
import { HowIWork } from "@/components/sections/HowIWork";
import { ResearchInterests } from "@/components/sections/ResearchInterests";
import { ResearchVision } from "@/components/sections/ResearchVision";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Research",
  "Research vision and interests of Thinh Nguyen (Lucaz), focused on Trustworthy AI, Federated Learning, Continual Learning, and Domain Generalization.",
  "/research",
);

export default function ResearchPage() {
  return (
    <>
      <ResearchVision />
      <ResearchInterests />
      <HowIWork />
      <ContactCTA />
    </>
  );
}
