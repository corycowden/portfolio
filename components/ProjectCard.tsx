import type { Project } from "@/data/projects";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border p-4" data-project-slug={project.slug}>
      <h3>{project.title}</h3>
      <Link href={`/work/${project.slug}`}>View project placeholder</Link>
    </article>
  );
}
