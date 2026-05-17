import { GitHubIcon } from "@/components/icons";
import { Cpu } from "lucide-react";

const PROJECTS = [
  {
    name: "Social Media - Lopet",
    description:
      "A social media contain overall core features like user auth, post, comment, like, photo, real-time message, advertising",
    tech: ["TypeScript", "ExpressJS", "MySQL", "Redis"],
    highlights: [
      "This is my gradutaion project, that I spend a lot of mind, heart, and soul into",
      "I own this backend project, serve as a sole backend developer from API contracts, database design, implementing business logic, deployment",
      "This Backend app used to be deployed on Ubuntu server on AWS EC2 (But my AWS account has been banned because of using over free tier resources -_-)",
    ],
    github: "https://github.com/nguyenphamhoangvu852004/lopet-be",
    demo: "#",
  },
  {
    name: "Ticket Concert Booking System - TICKET4U",
    description:
      "This is a personal project, the purpose is learning, research, apply more modern technologies.",
    tech: [
      "TypeScript",
      "NestJS",
      "Go",
      "Gin",
      "Java",
      "SpringBoot",
      "MySQL",
      "Redis",
      "Kafka",
    ],
    highlights: [
      "This is a personal project, the purpose is learning, research, apply more modern technologies.",
    ],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
          Selected Projects
        </h2>
        <div className="h-px w-12 bg-primary/20" />
      </div>

      <div className="grid gap-12">
        {PROJECTS.map((project) => (
          <div key={project.name} className="group space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="text-xl font-light group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-2 py-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <div className="flex items-center gap-2">
                    <div>Dive into project here</div>
                    <GitHubIcon className="w-4 h-4" />
                  </div>
                </a>
                {/* <a
                  href={project.demo}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a> */}
              </div>
            </div>

            <p className="text-muted-foreground font-light leading-relaxed">
              {project.description}
            </p>

            <div className="bg-muted/20 border-l border-primary/20 p-4 space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-primary/60">
                <Cpu className="w-3 h-3" />
                Highlights
              </div>
              <ul className="grid gap-1">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="text-xs text-muted-foreground font-light flex items-start gap-2"
                  >
                    <span className="text-primary/40 text-[8px] mt-1">●</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
