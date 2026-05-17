const EXPERIENCE = [
  {
    role: "Intern Backend Developer",
    company: "Sea Dragon Technology",
    url: "https://sdtc.vn/",
    duration: "April 2025 — June 2025",
    description:
      "Through the internship I have serve as a sole Backend Developer, three projects I have built: Backend for a social media, backend for a clone company consult website, backend for a core chat system",

    tech: ["TypeScript", "ExpressJS", "Go", "Gin", "MySQL", "Redis"],
  },
];

export function Experience() {
  return (
    <section className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
          Career Changelog
        </h2>
        <div className="h-px w-12 bg-primary/20" />
      </div>

      <div className="space-y-12">
        {EXPERIENCE.map((exp) => (
          <div
            key={exp.company}
            className="relative pl-8 border-l border-border/40 group"
          >
            <div className="absolute -left-[1.5px] top-0 h-4 w-px bg-primary/40 group-hover:bg-primary transition-colors" />

            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-primary px-1.5 py-0.5 bg-primary/10 rounded">
                      <a href={exp.url}>{exp.company}</a>
                    </span>
                    <h3 className="text-lg font-light px-1.5 py-0.5">
                      {exp.role}
                    </h3>
                  </div>
                </div>
                <div className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest">
                  {exp.duration}
                </div>
              </div>

              <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {exp.tech.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-1.5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span className="text-[10px] font-mono text-foreground uppercase tracking-tight">
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
