import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { navLinks, socialMediaUrl } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dark-content/10 bg-white/90 backdrop-blur-md dark:border-light-content/10 dark:bg-dark-mode/90">
      <div className="container mx-auto max-width flex justify-between py-3 md:items-center md:py-4">
        <div className="flex w-full items-center justify-between md:w-auto">
          <a href="#home" onClick={closeMenu}>
            <img src="/logo.svg" alt="Logo" className="h-12 w-12 md:h-14 md:w-14" />
          </a>
          <button
            type="button"
            className="cursor-pointer p-2 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 stroke-dark-heading dark:stroke-white" />
            ) : (
              <Menu className="h-6 w-6 stroke-dark-heading dark:stroke-white" />
            )}
          </button>
        </div>

        <nav
          className={cn(
            "absolute left-0 right-0 top-full border-b border-dark-content/10 bg-white px-5 py-6 dark:border-light-content/10 dark:bg-dark-mode md:static md:flex md:flex-1 md:items-center md:justify-end md:border-0 md:bg-transparent md:p-0",
            !isOpen && "hidden md:flex",
          )}
        >
          <ul className="space-y-4 text-center font-medium text-dark-heading dark:text-light-content md:flex md:items-center md:space-x-6 md:space-y-0">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="transition-colors hover:text-gradient"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex items-center justify-center gap-5 md:my-0 md:ml-8">
            <li>
              <a
                href={socialMediaUrl.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-7 w-7 fill-dark-heading dark:fill-light-heading" />
              </a>
            </li>
            <li>
              <a
                href={socialMediaUrl.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                <GitHubIcon className="h-7 w-7 fill-dark-heading dark:fill-light-heading" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
