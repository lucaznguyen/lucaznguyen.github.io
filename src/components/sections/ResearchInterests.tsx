import { profile } from "@/data/profile";
import { Reveal } from "@/components/motion/Reveal";
import { ResearchInterestItem } from "@/components/sections/ResearchInterestItem";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ResearchInterests() {
  return (
    <section className="section bg-white">
      <SectionHeader
        eyebrow="/ Research Interests"
        title="A numbered map of the problems I keep returning to."
        description="The through-line is trustworthy learning under the conditions that make deployed systems difficult: distribution shift, privacy, heterogeneity, and memory."
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {profile.researchInterests.map((interest, index) => (
          <Reveal key={interest.title} delay={index * 0.04}>
            <ResearchInterestItem {...interest} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
