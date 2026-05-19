import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h2 className="text-2xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-content text-sm md:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
}
