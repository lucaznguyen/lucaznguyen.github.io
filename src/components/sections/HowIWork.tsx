import { profile } from "@/data/profile";
import { Reveal } from "@/components/motion/Reveal";
import { ProcessStep } from "@/components/sections/ProcessStep";

export function HowIWork() {
  return (
    <section className="section bg-neutral-950 text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <Reveal>
            <div>
              <p className="section-label text-cream/55">/ How I Work</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                From distribution shift to deployable research systems.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-lg leading-8 text-cream/65">
              The process is deliberately practical: understand the failure mode, design a protocol that respects privacy and system constraints, then test it in settings that resemble real use.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.process.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <ProcessStep {...step} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
