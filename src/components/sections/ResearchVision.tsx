import { profile } from "@/data/profile";
import { StatCard } from "@/components/cards/StatCard";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ResearchVision() {
  return (
    <section id="research-vision" className="section bg-cream">
      <SectionHeader
        eyebrow="/ Research Vision"
        title="Researching AI systems that stay reliable when the world changes."
        description="My work asks how learning systems can remain robust, private, and adaptive when data is distributed across clients, domains, and time."
      />
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
        {profile.stats.map((stat, index) => (
          <StatCard key={stat.label} {...stat} index={index} />
        ))}
      </div>
      <Reveal className="mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="rounded-[2.5rem] bg-neutral-950 p-8 text-cream sm:p-10 lg:p-12">
          <p className="max-w-5xl text-balance font-serif text-4xl italic leading-tight sm:text-5xl lg:text-6xl">
            “Reliable AI is not only about a higher score. It is about what survives when clients, domains, tasks, and time disagree.”
          </p>
        </div>
      </Reveal>
    </section>
  );
}
