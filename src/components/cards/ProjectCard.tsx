import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { TagList } from "@/components/ui/TagList";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const content = (
    <article
      className={cn(
        "group flex h-full min-h-80 flex-col rounded-[2rem] border border-neutral-950/10 p-6 transition duration-300 hover:-translate-y-1",
        project.status === "Featured"
          ? "bg-neutral-950 text-white shadow-strong"
          : "bg-white/70 text-neutral-950 shadow-soft hover:border-vin-red/30 hover:bg-white",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "font-serif text-5xl italic",
            project.status === "Featured" ? "text-cream" : "text-neutral-300",
          )}
        >
          0{index + 1}
        </span>
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]",
            project.status === "Featured"
              ? "bg-white/10 text-white"
              : "border border-neutral-950/10 text-neutral-500",
          )}
        >
          {project.status}
        </span>
      </div>
      <p className={cn("mt-8 text-sm font-semibold uppercase tracking-[0.18em]", project.status === "Featured" ? "text-white/55" : "text-neutral-500")}>
        {project.context}
      </p>
      <h3 className="mt-4 text-3xl font-semibold tracking-tight">{project.title}</h3>
      <p className={cn("mt-4 text-base leading-7", project.status === "Featured" ? "text-white/70" : "text-neutral-600")}>
        {project.summary}
      </p>
      <div className="mt-6">
        <TagList tags={project.tags} compact />
      </div>
      <div className="mt-auto flex items-center justify-between gap-4 pt-8">
        <span className={cn("text-sm font-semibold", project.status === "Featured" ? "text-cream" : "text-neutral-600")}>
          {project.role}
        </span>
        {project.href ? <ArrowUpRight className="size-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" /> : null}
      </div>
    </article>
  );

  if (!project.href) {
    return content;
  }

  return (
    <a href={project.href} target="_blank" rel="noreferrer" className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vin-red">
      {content}
    </a>
  );
}
