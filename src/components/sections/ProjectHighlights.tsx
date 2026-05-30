import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProjectHighlights() {
  return (
    <section className="section bg-white">
      <SectionHeader
        eyebrow="/ Projects"
        title="Tools, competition work, and research dashboards."
        description="A compact project shelf for applied work and academic tooling."
        action={
          <ButtonLink href="/projects" variant="dark">
            View projects
          </ButtonLink>
        }
      />
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.04} className={index === 0 ? "lg:col-span-2" : undefined}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
