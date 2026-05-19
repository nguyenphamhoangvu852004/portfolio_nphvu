import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projectDetails } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section container mx-auto max-width pb-16">
      <SectionHeading title="Projects" />

      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-2">
        {projectDetails.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
