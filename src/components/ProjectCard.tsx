import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  techstack: string;
  previewLink: string;
  githubLink: string;
}

export function ProjectCard({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <article className="mt-10 overflow-hidden rounded-xl shadow-xl shadow-slate-300 dark:shadow-slate-900">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-48 w-full object-cover"
      />
      <div className="bg-white p-4 dark:bg-dark-card">
        <h3 className="pt-1 text-lg font-semibold text-dark-heading dark:text-light-heading">
          {title}
        </h3>
        <p className="pt-4 font-light text-content">{description}</p>
        <p className="pt-4 font-medium text-dark-heading dark:text-light-heading">
          Tech Stack:{" "}
          <span className="font-light text-content">{techstack}</span>
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm font-light underline dark:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            Live Preview
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-sm font-light underline dark:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}
