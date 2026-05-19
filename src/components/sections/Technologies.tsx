import { SectionHeading } from "@/components/SectionHeading";
import {
  techStackExperienced,
  techStackEducated,
  tools,
} from "@/data/portfolio";

function TechBadge({ label }: { label: string }) {
  return (
    <div className="flex h-20 items-center justify-center rounded-xl bg-white px-4 shadow-md dark:bg-dark-card">
      <span className="text-center text-sm font-medium text-dark-heading dark:text-light-heading">
        {label}
      </span>
    </div>
  );
}

export function Technologies() {
  return (
    <section
      id="technologies"
      className="section container mx-auto max-width pb-12"
    >
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies I already have hands-on experience with"
      />

      <div className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {techStackExperienced.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
      <p className=" mt-8 text-content text-sm md:text-base">
        Technologies I have base knowledge of, learned through University and
        myself researching.
      </p>

      <div className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {techStackEducated.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
      <SectionHeading title="Tools" className="pt-12" />

      <div className="grid grid-cols-2 gap-6 pt-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {tools.map((tool) => (
          <TechBadge key={tool} label={tool} />
        ))}
      </div>
    </section>
  );
}
