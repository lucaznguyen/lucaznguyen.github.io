import { Hero } from "@/components/sections/Hero";
import { MarqueeKeywords } from "@/components/ui/MarqueeKeywords";
import { ProjectHighlights } from "@/components/sections/ProjectHighlights";
import { SelectedPublications } from "@/components/sections/SelectedPublications";

export default function Home() {
  return (
    <div data-homepage>
      <Hero />
      <MarqueeKeywords />
      <SelectedPublications />
      <ProjectHighlights />
    </div>
  );
}
