import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projectDetails } from "@/data/portfolio";
import { SEO } from "@/components/SEO";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Backend", "TypeScript", "Microservices"];

  const filteredProjects = projectDetails.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Backend") {
      return (
        project.techstack.includes("ExpressJS") ||
        project.techstack.includes("NestJS") ||
        project.techstack.includes("Go") ||
        project.title.toLowerCase().includes("erp")
      );
    }
    if (activeFilter === "TypeScript") {
      return project.techstack.includes("TypeScript");
    }
    if (activeFilter === "Microservices") {
      return (
        project.techstack.toLowerCase().includes("kafka") ||
        project.description.toLowerCase().includes("microservices")
      );
    }
    return true;
  });

  return (
    <>
      <SEO
        title="Projects"
        description="Browse the backend and fullstack software development projects of Nguyen Pham Hoang Vu, including Social Media, concert booking architectures, and central ERP systems."
      />

      <section className="container mx-auto max-width py-12">
        <SectionHeading
          title="Projects"
          subtitle="A collection of backend services, microservices, and platforms I have engineered"
        />

        {/* Dynamic Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-5 py-2 text-xs font-semibold shadow-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${
                activeFilter === category
                  ? "bg-gradient-brand text-white shadow-md"
                  : "bg-slate-100 text-dark-heading hover:bg-slate-200 dark:bg-dark-card dark:text-light-heading dark:hover:bg-zinc-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-x-10 mt-4 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
