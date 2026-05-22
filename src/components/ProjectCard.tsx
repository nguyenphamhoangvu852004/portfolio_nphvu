import { Link } from "react-router-dom";
import { GitHubIcon } from "@/components/icons";

interface ProjectCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  techstack: string;
  previewLink?: string;
  githubLink?: string;
}

export function ProjectCard({
  id,
  title,
  image,
  description,
  techstack,
  githubLink,
}: ProjectCardProps) {
  return (
    <article className="mt-10 overflow-hidden rounded-xl shadow-xl shadow-slate-300 dark:shadow-slate-900 border border-slate-100/50 dark:border-zinc-800/40 bg-white dark:bg-dark-card flex flex-col h-full group hover:shadow-2xl transition-all duration-300 glass card-hover">
      <Link
        to={`/projects/${id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden relative"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/10 transition-colors duration-300" />
      </Link>
      
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="pt-1 text-xl font-bold text-dark-heading dark:text-light-heading group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors duration-200">
            <Link to={`/projects/${id}`} target="_blank" rel="noopener noreferrer">
              {title}
            </Link>
          </h3>
          <p className="pt-3 font-light text-content text-sm md:text-base leading-relaxed">
            {description}
          </p>
          <p className="pt-4 font-semibold text-xs md:text-sm text-dark-heading dark:text-light-heading">
            Tech Stack:{" "}
            <span className="font-light text-content">{techstack}</span>
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-4">
          <Link
            to={`/projects/${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300 transition-colors group/btn"
          >
            View Details
            <svg
              className="h-4 w-4 transform group-hover/btn:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm font-light text-content hover:text-dark-heading dark:hover:text-light-heading underline transition-colors"
          >
            <GitHubIcon className="h-4 w-4" />
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}
