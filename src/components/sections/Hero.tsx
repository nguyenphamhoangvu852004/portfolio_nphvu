import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-4 flex-1">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
            Nguyen Pham Hoang Vu
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            {/* Backend Engineer specializing in scalable architectures and
            distributed systems. */}
            Passion Backend Developer from Vietnam.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="h-9 gap-2 text-xs font-mono uppercase tracking-wider"
              onClick={() =>
                window.open(
                  "https://github.com/nguyenphamhoangvu852004",
                  "_blank",
                )
              }
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-9 gap-2 text-xs font-mono uppercase tracking-wider"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </Button>
          </div>
        </div>

        <div className="relative group">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-border/50 group-hover:border-primary/50 transition-colors duration-500">
            <img
              src="/avatar.jpg"
              alt="Nguyen Pham Hoang Vu"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full" />
        </div>
      </div>

      <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed font-light">
        <h4 className="text-xl font-light border-b border-border/40 py-2">
          What can I do
        </h4>
        <p>
          I build robust backend systems with a focus on performance,
          reliability, and clean code. Currently exploring high-concurrency
          patterns and cloud-native infrastructure. Passionate about developer
          experience and system observability.
        </p>
      </div>

      {/* <div className="flex items-center gap-6 text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors"><LinkedInIcon className="w-5 h-5" /></a>
        <a href="#" className="hover:text-foreground transition-colors"><Mail className="w-5 h-5" /></a>
      </div> */}
    </section>
  );
}
