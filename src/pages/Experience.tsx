import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { workDetails } from "@/data/portfolio";
import { SEO } from "@/components/SEO";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <>
      <SEO
        title="Experience"
        description="Nguyen Pham Hoang Vu's professional backend developer experience, including sole backend responsibilities at Sea Dragon Technology."
      />

      <section className="container mx-auto max-width py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Work Experience"
            subtitle="My career timeline as a Software Developer"
          />

          <div className="relative mt-12 pl-8 md:pl-12">
            {/* Timeline vertical bar */}
            <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-slate-800" />

            {workDetails.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.duration}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline node icon */}
                <div className="absolute -left-[30px] md:-left-[38px] top-6 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand text-white shadow-md z-10">
                  <Briefcase className="h-3.5 w-3.5" />
                </div>

                <div className="rounded-2xl border border-dark-content/5 bg-slate-50/50 p-6 dark:border-light-content/5 dark:bg-dark-card/25 shadow-sm hover:shadow-md transition-all duration-300">
                  <WorkCard {...job} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
