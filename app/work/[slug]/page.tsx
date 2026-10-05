type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return (
    <main>
      <section className="border-b p-6"><h1>Project title / intro placeholder</h1><p>Slug: {slug}</p></section>
      <section className="border-b p-6" aria-label="Hero image area">Hero image area placeholder</section>
      <section className="border-b p-6"><h2>Project metadata placeholder</h2><p>Role · Context · Timeline · Tools</p></section>
      <section className="border-b p-6"><h2>Problem / context placeholder</h2></section>
      <section className="border-b p-6"><h2>Process / key decisions placeholder</h2></section>
      <section className="border-b p-6" aria-label="Project visuals">Visuals / image area placeholder</section>
      <section className="p-6"><h2>Outcome / reflection placeholder</h2></section>
    </main>
  );
}
