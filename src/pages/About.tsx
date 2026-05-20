import { SectionHeading } from "@/components/SectionHeading";
import { SEO } from "@/components/SEO";
import { WorkCard } from "@/components/WorkCard";
import { eduDetails, personalDetails } from "@/data/portfolio";
import { motion } from "framer-motion";

export function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about Nguyen Pham Hoang Vu, a software engineering graduate with a passion for scalable, performant backend architectures."
      />

      <section className="container mx-auto max-width py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading title="About Me" />

          <div className="grid grid-cols-1 gap-10 py-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-sm font-light leading-relaxed text-content md:text-base">
                {personalDetails.about}
              </p>
              <p className="text-sm font-light leading-relaxed text-content md:text-base">
                I strongly believe in writing clean, well-tested code and
                applying robust design principles (SOLID, DRY, Clean
                Architecture) to build highly maintainable solutions. I aim to
                continuously push technical boundaries and grow into a seasoned
                Senior Backend Engineer and Solution Architect.
              </p>

              {/* <div className="pt-4">
                <a
                  href="#resume"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <FileText className="h-4 w-4" />
                  Download Resume / CV
                </a>
              </div> */}
            </div>

            <div className="rounded-2xl border border-dark-content/10 bg-slate-50/50 p-6 dark:border-light-content/10 dark:bg-dark-card/30">
              <h3 className="text-lg font-semibold text-dark-heading dark:text-light-heading mb-4">
                Core Information
              </h3>
              <ul className="space-y-3 text-sm font-light text-content">
                <li>
                  <span className="font-semibold text-dark-heading dark:text-light-heading">
                    Location:
                  </span>{" "}
                  Vietnam
                </li>
                <li>
                  <span className="font-semibold text-dark-heading dark:text-light-heading">
                    Specialization:
                  </span>{" "}
                  Backend Engineering
                </li>
                <li>
                  <span className="font-semibold text-dark-heading dark:text-light-heading">
                    Core Focus:
                  </span>{" "}
                  REST APIs, Microservices & Architecture
                </li>
                <li>
                  <span className="font-semibold text-dark-heading dark:text-light-heading">
                    Status:
                  </span>{" "}
                  Open to Opportunities
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <SectionHeading title="Education" />

          <div className="mt-4 border-l-2 border-slate-200 pl-6 dark:border-slate-800 space-y-8">
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
          </div>
        </motion.div>
      </section>
    </>
  );
}
