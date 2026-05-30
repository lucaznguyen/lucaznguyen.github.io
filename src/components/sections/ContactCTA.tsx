import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function ContactCTA() {
  return (
    <section className="section bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-neutral-950 p-8 text-cream shadow-strong sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-dark-grid opacity-35" aria-hidden="true" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="section-label text-cream/55">/ Contact</p>
              <h2 className="mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                Let&apos;s talk research, collaboration, and ideas.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/65">
                {profile.keywords.slice(0, 4).join(" · ")}
              </p>
            </div>
            <div>
              <ButtonLink href={`mailto:${profile.email}`} variant="light" className="w-full sm:w-auto">
                {profile.email}
              </ButtonLink>
              <SocialLinks compact className="mt-5 [&_a]:border-white/10 [&_a]:bg-white/5 [&_a]:text-cream [&_a:hover]:border-vin-red [&_a:hover]:text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
