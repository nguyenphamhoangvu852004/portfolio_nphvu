import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projectDetails } from "@/data/portfolio";
import { SEO } from "@/components/SEO";
import { GitHubIcon } from "@/components/icons";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  // Find the project based on the id/slug
  const project = projectDetails.find((p) => p.id === id);

  // Fallback if project is not found
  if (!project) {
    return (
      <>
        <SEO
          title="Project Not Found"
          description="The requested project could not be found."
        />
        <div className="container mx-auto py-24 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto bg-white dark:bg-dark-card p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-zinc-800"
          >
            <h1 className="text-2xl font-bold text-dark-heading dark:text-light-heading mb-4">
              Project Not Found
            </h1>
            <p className="text-content mb-8">
              The project you are looking for doesn't exist or may have been
              moved.
            </p>
            <Link
              to="/projects"
              className="inline-block bg-gradient-brand text-white font-medium px-6 py-3 rounded-lg shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Back to Projects
            </Link>
          </motion.div>
        </div>
      </>
    );
  }

  // Handle browser tab closing safely
  const handleCloseTab = () => {
    window.close();
  };

  return (
    <>
      <SEO
        title={`Project: ${project.title}`}
        description={`${project.title} - Detailed engineering breakdown, technical architecture, and challenges solved by Nguyen Pham Hoang Vu.`}
      />

      <section className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Navigation Breadcrumb & Back action */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/projects"
            className="group flex items-center gap-2 text-sm font-semibold text-content hover:text-dark-heading dark:hover:text-light-heading transition-colors"
          >
            <svg
              className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Projects
          </Link>

          <button
            onClick={handleCloseTab}
            className="text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-content hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
          >
            Close Tab
          </button>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl h-80 md:h-[400px] mb-12"
        >
          {/* Background Image with elegant overlay */}
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-xs md:text-sm font-semibold tracking-wider uppercase bg-gradient-brand px-3.5 py-1.5 rounded-full mb-4"
            >
              Detailed Case Study
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
              {project.title}
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-3xl font-light drop-shadow">
              {project.tagline}
            </p>
          </div>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Main Info (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Description */}
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-dark-heading dark:text-light-heading border-b pb-3 border-slate-200 dark:border-zinc-800">
                Project Overview
              </h2>
              <p
                className="text-content  text-base leading-relaxed mt-4"
                dangerouslySetInnerHTML={{
                  __html: project.longDescription || "",
                }}
              ></p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold text-dark-heading dark:text-light-heading border-b pb-3 border-slate-200 dark:border-zinc-800 mb-6">
                Key Engineering Highlights
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {project.features?.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex gap-4 p-4 rounded-xl bg-white dark:bg-dark-card border border-slate-100 dark:border-zinc-800/60 shadow-sm"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-content font-medium text-sm md:text-base">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            <div className="p-6 md:p-8 rounded-2xl bg-amber-50/50 dark:bg-zinc-900/40 border border-amber-200/55 dark:border-zinc-800/80">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-heading dark:text-light-heading">
                  Technical Challenge & Solution
                </h3>
              </div>
              <div className="space-y-8">
                {project.challenges?.map((challenge, index) => (
                  <div key={index} className="border-l border-zinc-700 pl-5">
                    <h4 className="text-lg font-semibold text-slate-100 tracking-tight">
                      {challenge.title}
                    </h4>

                    <div
                      className="mt-3 text-[15px] leading-8 text-zinc-400 text-justify"
                      dangerouslySetInnerHTML={{
                        __html: challenge.content,
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Key Learnings */}
            <div>
              <h2 className="text-2xl font-bold text-dark-heading dark:text-light-heading border-b pb-3 border-slate-200 dark:border-zinc-800 mb-4">
                Key Takeaways & Learnings
              </h2>

              <div
                className="text-justify text-base leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{
                  __html: project.learnings || "",
                }}
              />
            </div>
          </motion.div>

          {/* Project Details Sidebar (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 lg:sticky lg:top-24"
          >
            <div className="bg-white dark:bg-dark-card border border-slate-100 dark:border-zinc-800/85 rounded-2xl p-6 shadow-md space-y-6">
              <h3 className="text-lg font-bold text-dark-heading dark:text-light-heading border-b pb-3 border-slate-100 dark:border-zinc-800/50">
                Project Information
              </h3>

              {/* Role */}
              {project.mentors != undefined && (
                <div>
                  <span className="block text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                    Mentors
                  </span>

                  <span className="text-dark-heading dark:text-light-heading font-medium text-sm md:text-base">
                    {project.mentors.map((mentor, index) => (
                      <div key={index}>
                        {mentor.name} ({mentor.role})
                      </div>
                    ))}
                  </span>
                </div>
              )}
              {project.supervisors != undefined && (
                <div>
                  <span className="block text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                    Acedemic Supervisors
                  </span>
                  <span className="text-dark-heading dark:text-light-heading font-medium text-sm md:text-base">
                    {project.supervisors?.map((mentor, index) => (
                      <div key={index}>{mentor} </div>
                    ))}
                  </span>
                </div>
              )}
              <div>
                <span className="block text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                  My Role
                </span>
                <span className="text-dark-heading dark:text-light-heading font-medium text-sm md:text-base">
                  {project.role}
                </span>
              </div>

              {/* Timeline */}
              <div>
                <span className="block text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-1">
                  Timeline
                </span>
                <span className="text-dark-heading dark:text-light-heading font-medium text-sm md:text-base">
                  {project.timeline}
                </span>
              </div>

              {/* Tech Stack */}
              <div>
                <span className="block text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                  Technologies Used
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techstack.split(", ").map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded-md bg-slate-100 dark:bg-zinc-800 text-content"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Primary Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/50 space-y-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-brand text-white font-medium py-3 px-4 rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-sm md:text-base"
                >
                  <GitHubIcon className="h-5 w-5" />
                  View Source Code
                </a>

                {project.previewLink && project.previewLink !== "#" && (
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full flex items-center justify-center gap-2 border border-slate-200 dark:border-zinc-700 text-dark-heading dark:text-light-heading hover:bg-slate-50 dark:hover:bg-zinc-800 font-medium py-2.5 px-4 rounded-xl transition-colors text-sm"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Quick Back to Projects Trigger */}
            <div className="text-center">
              <Link
                to="/projects"
                className="inline-block text-xs font-semibold text-content hover:underline"
              >
                ← Return to Projects page
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
