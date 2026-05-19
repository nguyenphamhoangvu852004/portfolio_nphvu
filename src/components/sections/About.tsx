import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { personalDetails, workDetails, eduDetails } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="section container mx-auto max-width pb-12">
      <SectionHeading title="About Me" />
      <p className="py-8 text-sm font-light leading-relaxed text-content lg:max-w-3xl md:text-base">
        {personalDetails.about}
      </p>

      <SectionHeading title="Work Experience" className="pt-4" />
      {workDetails.map((job) => (
        <WorkCard key={`${job.company}-${job.duration}`} {...job} />
      ))}

      <SectionHeading title="Education" className="pt-10" />
      {eduDetails.map((edu) => (
        <WorkCard
          key={`${edu.university}-${edu.duration}`}
          position={edu.major}
          company={edu.university}
          companyUrl={edu.universityUrl}
          description={edu.description}
          location={edu.location}
          type={edu.type}
          duration={edu.duration}
        />
      ))}
    </section>
  );
}
