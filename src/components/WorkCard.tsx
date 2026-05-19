import { MapPin, Building2 } from "lucide-react";

interface WorkCardProps {
  position: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
  duration: string;
  description?: string;
}

export function WorkCard({
  position,
  company,
  companyUrl,
  location,
  type,
  duration,
  description,
}: WorkCardProps) {
  return (
    <article className="border-b border-dark-content/20 pb-8 pt-8 dark:border-light-content/20">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-content text-lg lg:text-xl">{position}</h3>
        <span className="inline-block min-w-fit rounded-3xl bg-greenbg px-3 py-1 text-xs text-green-text">
          {type}
        </span>
      </div>

      <div className="flex flex-col justify-between gap-3 pt-3 md:flex-row md:items-center">
        <div className="flex flex-col gap-2 md:flex-row md:gap-5">
          <div className="flex items-center gap-1.5">
            <Building2 className="h-4 w-4 shrink-0 text-dark-heading dark:text-light-heading" />
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-content text-xs font-light hover:underline md:text-sm"
              >
                {company}
              </a>
            ) : (
              <p className="text-content text-xs font-light md:text-sm">
                {company}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 shrink-0 text-dark-heading dark:text-light-heading" />
            <p className="text-content text-xs font-light md:text-sm">
              {location}
            </p>
          </div>
        </div>
        <p className="min-w-fit text-xs font-light text-content md:text-sm">
          {duration}
        </p>
      </div>

      {description ? (
        <p className="pt-4 text-sm font-light leading-relaxed text-content lg:max-w-3xl">
          {description}
        </p>
      ) : null}
    </article>
  );
}
