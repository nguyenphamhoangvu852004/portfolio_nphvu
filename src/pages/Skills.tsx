import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import {
  techStackExperienced,
  techStackEducated,
  tools,
} from "@/data/portfolio";
import { SEO } from "@/components/SEO";

function TechBadge({ label }: { label: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="flex h-20 items-center justify-center rounded-xl bg-white px-4 shadow-md border border-slate-100 hover:border-sky-500/20 hover:shadow-lg dark:bg-dark-card dark:border-zinc-800 dark:hover:border-sky-500/20 transition-all duration-200"
    >
      <span className="text-center text-sm font-semibold text-dark-heading dark:text-light-heading">
        {label}
      </span>
    </motion.div>
  );
}

export function Skills() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterTech = (techList: readonly string[]) => {
    return techList.filter((tech) =>
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredExperienced = filterTech(techStackExperienced);
  const filteredEducated = filterTech(techStackEducated);
  const filteredTools = filterTech(tools);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <>
      <SEO
        title="Skills"
        description="Nguyen Pham Hoang Vu's specialized tech stack including NestJS, ExpressJS, Go, Java, Spring Boot, MySQL, Redis, Kafka, and Docker."
      />

      <section className="container mx-auto max-width py-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <SectionHeading
            title="Tech Stack & Skills"
            subtitle="The technologies, environments, and languages I leverage."
          />

          {/* Search box */}
          <div className="relative max-w-xs w-full">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-dark-content/20 bg-white py-2.5 pl-10 pr-4 text-sm text-dark-heading outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 dark:border-light-content/20 dark:bg-dark-card dark:text-light-heading dark:focus:border-sky-500 transition-colors duration-200"
            />
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-dark-content/60 dark:text-light-content/60" />
          </div>
        </motion.div>

        {/* Experienced Technologies */}
        {filteredExperienced.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-dark-heading dark:text-light-heading mb-1">
              Hands-on Experience
            </h3>
            <p className="text-sm text-content mb-6">
              Technologies I have hands-on experience and built APIs with
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            >
              {filteredExperienced.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </motion.div>
          </div>
        )}

        {/* Educated/Researching Skills */}
        {filteredEducated.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-dark-heading dark:text-light-heading mb-1">
              Research & Knowledge
            </h3>
            <p className="text-sm text-content mb-6">
              Learned through university coursework and self-directed engineering studies
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            >
              {filteredEducated.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </motion.div>
          </div>
        )}

        {/* Tools */}
        {filteredTools.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-dark-heading dark:text-light-heading mb-1">
              Development Tools
            </h3>
            <p className="text-sm text-content mb-6">
              Utility tools and container environments I use in development workflows
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
            >
              {filteredTools.map((tool) => (
                <TechBadge key={tool} label={tool} />
              ))}
            </motion.div>
          </div>
        )}

        {/* Empty state */}
        {filteredExperienced.length === 0 &&
          filteredEducated.length === 0 &&
          filteredTools.length === 0 && (
            <div className="mt-16 text-center text-content">
              No skills match your search term "{searchTerm}"
            </div>
          )}
      </section>
    </>
  );
}
