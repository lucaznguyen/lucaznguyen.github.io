import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FloatingResearchLabels } from "@/components/sections/FloatingResearchLabels";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 bg-hero-grid opacity-70" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-cream to-transparent" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-10 lg:py-20">
        <div className="flex flex-col justify-center">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              <span>{profile.primaryTitle}</span>
              <span className="size-1.5 rounded-full bg-vin-red" aria-hidden="true" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8">
              <p className="font-serif text-3xl italic text-vin-red sm:text-5xl">{profile.nickname}</p>
              <h1 className="mt-2 text-balance text-6xl font-semibold leading-[0.92] tracking-tight text-neutral-950 sm:text-7xl lg:text-[7.6rem]">
                {profile.name}
              </h1>
            </div>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-10 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
              {profile.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{profile.shortBio}</p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/research" variant="dark">
                Explore Research
              </ButtonLink>
              <ButtonLink href="/publications" variant="outline">
                View Publications
              </ButtonLink>
              <ButtonLink href="/notes" variant="ghost">
                Read Notes
              </ButtonLink>
              <ButtonLink href="/contact" variant="accent">
                Contact
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col gap-4 border-t border-neutral-950/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-sm leading-6 text-neutral-500">
                {profile.affiliations.map((affiliation) => affiliation.name).join(" → ")}
              </p>
              <a
                href="#research-vision"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 transition hover:text-vin-red"
              >
                Scroll
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="relative flex items-center justify-center lg:justify-end">
          <div className="relative aspect-[0.78] w-full max-w-[31rem] overflow-hidden rounded-[2.5rem] bg-neutral-950 shadow-strong">
            <Image
              src={profile.portrait}
              alt={profile.portraitAlt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 88vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/55 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Research focus</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">Robust learning under distribution shift.</p>
            </div>
            <FloatingResearchLabels />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
