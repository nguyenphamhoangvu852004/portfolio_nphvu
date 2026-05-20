import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { navLinks, socialMediaUrl } from "@/data/portfolio";
import { useDarkTheme } from "@/hooks/useDarkTheme";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useDarkTheme();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dark-content/10 bg-white/90 backdrop-blur-md dark:border-light-content/10 dark:bg-dark-mode/90 transition-colors duration-300">
      <div className="container mx-auto max-width flex justify-between py-3 md:items-center md:py-4">
        <div className="flex w-full items-center justify-between md:w-auto">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
            <img
              src="/icons8-backend-development-96.png"
              alt="Logo"
              className="h-12 w-12 md:h-14 md:w-14 hover:scale-105 transition-transform duration-200"
            />
          </Link>

          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-dark-heading hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 stroke-white" />
              ) : (
                <Moon className="h-5 w-5 stroke-dark-heading" />
              )}
            </button>

            <button
              type="button"
              className="cursor-pointer p-2"
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
        </div>

        <nav
          className={cn(
            "absolute left-0 right-0 top-full border-b border-dark-content/10 bg-white px-5 py-6 dark:border-light-content/10 dark:bg-dark-mode md:static md:flex md:flex-1 md:items-center md:justify-end md:border-0 md:bg-transparent md:p-0 transition-all duration-300",
            !isOpen && "hidden md:flex",
          )}
        >
          <ul className="space-y-4 text-center font-medium text-dark-heading dark:text-light-content md:flex md:items-center md:space-x-6 md:space-y-0">
            {navLinks.map(({ label, path }) => (
              <li key={path} className="relative py-1">
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      "relative px-2 py-1 text-sm font-medium transition-colors hover:text-sky-500 dark:hover:text-sky-400",
                      isActive
                        ? "text-gradient font-bold"
                        : "text-dark-heading/85 dark:text-light-heading/85"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-brand rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme switcher & social media links */}
          <div className="mt-6 flex flex-col items-center gap-5 md:mt-0 md:ml-8 md:flex-row">
            {/* Desktop Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden md:flex rounded-lg p-2 text-dark-heading hover:bg-black/5 dark:text-white dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 stroke-white" />
              ) : (
                <Moon className="h-5 w-5 stroke-dark-heading" />
              )}
            </button>

            <ul className="flex items-center gap-5">
              <li>
                <a
                  href={socialMediaUrl.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="block hover:scale-110 transition-transform duration-200"
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
                  className="block hover:scale-110 transition-transform duration-200"
                >
                  <GitHubIcon className="h-7 w-7 fill-dark-heading dark:fill-light-heading" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
