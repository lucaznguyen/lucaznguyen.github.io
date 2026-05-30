import { AboutBio } from "@/components/sections/AboutBio";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { MarqueeKeywords } from "@/components/ui/MarqueeKeywords";
import { NewsTimeline } from "@/components/sections/NewsTimeline";
import { NotesTeaser } from "@/components/sections/NotesTeaser";
import { ProjectHighlights } from "@/components/sections/ProjectHighlights";
import { ResearchInterests } from "@/components/sections/ResearchInterests";
import { ResearchVision } from "@/components/sections/ResearchVision";
import { SelectedPublications } from "@/components/sections/SelectedPublications";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeKeywords />
      <ResearchVision />
      <ResearchInterests />
      <HowIWork />
      <SelectedPublications />
      <ProjectHighlights />
      <NewsTimeline limit={8} />
      <AboutBio showFormalName={false} showPortrait={false} />
      <NotesTeaser />
      <ContactCTA />
    </>
  );
}
