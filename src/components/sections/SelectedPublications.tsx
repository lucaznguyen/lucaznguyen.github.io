import { selectedPublications } from "@/data/publications";
import { PublicationCard } from "@/components/cards/PublicationCard";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SelectedPublications() {
  return (
    <section className="section bg-cream">
      <SectionHeader
        eyebrow="/ Selected Publications"
        title="Selected work on federated, continual, and trustworthy learning."
        action={
          <ButtonLink href="/publications" variant="outline">
            Full list
          </ButtonLink>
        }
      />
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        {selectedPublications.map((publication, index) => (
          <Reveal key={publication.id} delay={index * 0.04}>
            <PublicationCard publication={publication} compact />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
