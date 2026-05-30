import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Contact Thinh Nguyen (Lucaz) for research collaboration, trustworthy AI, federated learning, and academic discussion.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <section className="section bg-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.78fr] lg:px-10">
          <div>
            <p className="section-label">/ Contact</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-neutral-950 sm:text-7xl">
              Research, collaboration, and ideas.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Reach out for research conversations around trustworthy AI, federated learning, continual learning, and domain generalization.
            </p>
          </div>
          <div className="rounded-[2rem] border border-neutral-950/10 bg-white/70 p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full bg-vin-red text-white">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-neutral-500">Email</p>
                <a href={`mailto:${profile.email}`} className="text-lg font-semibold text-neutral-950 transition hover:text-vin-red">
                  {profile.email}
                </a>
              </div>
            </div>
            <SocialLinks className="mt-8" />
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
