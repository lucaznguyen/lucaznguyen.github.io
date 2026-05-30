import type { Metadata } from "next";
import { AboutBio } from "@/components/sections/AboutBio";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "About",
  "About Thinh Nguyen (Lucaz), Ph.D. student at VinUniversity working on trustworthy AI.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <section className="section bg-cream">
        <SectionHeader
          eyebrow="/ About"
          title="Trustworthy AI research with a systems mindset."
          description="Current Ph.D. student at VinUniversity, affiliated with VISHC and SAIL Lab, advised by Prof. Kok-Seng Wong."
        />
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
          {profile.affiliations.map((affiliation) => (
            <a
              key={affiliation.name}
              href={affiliation.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[2rem] border border-neutral-950/10 bg-white/70 p-6 shadow-soft transition hover:-translate-y-1 hover:border-vin-red/30 hover:bg-white"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-vin-red">Affiliation</p>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight text-neutral-950">{affiliation.name}</h2>
            </a>
          ))}
        </div>
      </section>
      <AboutBio />
      <ContactCTA />
    </>
  );
}
