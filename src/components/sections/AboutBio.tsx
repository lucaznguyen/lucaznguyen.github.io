import Image from "next/image";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils";

type AboutBioProps = {
  showFormalName?: boolean;
  showPortrait?: boolean;
};

export function AboutBio({ showFormalName = true, showPortrait = true }: AboutBioProps) {
  return (
    <section className="section bg-white">
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:px-10",
          showPortrait ? "lg:grid-cols-[0.85fr_1.15fr]" : "lg:grid-cols-1",
        )}
      >
        {showPortrait ? (
          <Reveal className="lg:col-span-1">
            <div className="relative aspect-[0.82] overflow-hidden rounded-[2.5rem] bg-neutral-950 shadow-strong">
              <Image
                src={profile.portrait}
                alt={profile.portraitAlt}
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        ) : null}
        <Reveal delay={0.08} className={showPortrait ? "lg:col-span-1" : "mx-auto max-w-5xl"}>
          <div className="flex h-full flex-col justify-center">
            <p className="section-label">/ About</p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              A research profile grounded in trustworthy AI and mathematical discipline.
            </h2>
            <p className="mt-7 text-lg leading-8 text-neutral-600">{profile.bio}</p>
            <p className="mt-5 text-lg leading-8 text-neutral-600">{profile.extendedBio}</p>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-neutral-600 sm:grid-cols-2">
              <p>Advisor: {profile.advisor}</p>
              <p>Location: {profile.location}</p>
              {showFormalName ? <p>Formal name: {profile.formalName}</p> : null}
            </div>
            <div className="mt-9">
              <ButtonLink href="/about" variant="dark">
                More about me
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
