import { ProjectGrid } from "@/components/ProjectGrid";
import type { Project } from "@/data/projects";

const placeholderProjects: Project[] = [
  { slug: "placeholder-project-1", title: "Project Placeholder 1" },
  { slug: "placeholder-project-2", title: "Project Placeholder 2" },
  { slug: "placeholder-project-3", title: "Project Placeholder 3" },
];

export default function WorkPage() {
  return (
    <main>
      <section className="border-b p-6" aria-labelledby="work-heading">
        <h1 id="work-heading">Work page heading placeholder</h1>
      </section>
      <section className="border-b" aria-labelledby="featured-work-heading">
        <h2 className="p-6" id="featured-work-heading">Featured / Selected Work placeholder</h2>
        <ProjectGrid projects={placeholderProjects.slice(0, 2)} />
      </section>
      <section aria-labelledby="other-work-heading">
        <h2 className="p-6" id="other-work-heading">Other Work / Experiments placeholder</h2>
        <ProjectGrid projects={placeholderProjects.slice(2)} />
      </section>
    </main>
  );
}
