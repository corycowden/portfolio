import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="border-b p-6" aria-labelledby="selected-work-heading">
        <h2 id="selected-work-heading">Selected Work placeholder</h2>
        <ProjectGrid projects={[]} />
      </section>
      <section className="border-b p-6" aria-labelledby="more-work-heading">
        <h2 id="more-work-heading">More Work / Experiments placeholder</h2>
      </section>
      <section className="border-b p-6" aria-labelledby="short-about-heading">
        <h2 id="short-about-heading">Short About placeholder</h2>
      </section>
    </main>
  );
}
