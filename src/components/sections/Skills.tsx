import { Badge } from "@/components/ui/badge";
import { SKILLS } from "@/data/skill";

export function Skills() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
          Technical Stack
        </h2>
        <div className="h-px w-12 bg-primary/20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="rounded-sm font-mono text-[10px] py-0 px-2 bg-muted/30 border-border/50 hover:bg-muted/50 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
