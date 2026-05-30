import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Projects",
  "Project shelf for Thinh Nguyen (Lucaz), including FathomNet and future trustworthy AI prototypes.",
  "/projects",
);

export default function ProjectsPage() {
  return (
    <section className="section bg-white">
      <SectionHeader
        eyebrow="/ Projects"
        title="Applied research, competition work, and academic tools."
        description="A project layer for research artifacts, competition work, and academic tooling."
      />
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 lg:grid-cols-3 lg:px-10">
        {projects.map((project, index) => (
          <div key={project.id} className={index === 0 ? "lg:col-span-2" : undefined}>
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
