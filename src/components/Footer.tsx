import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="container mx-auto max-width border-t border-dark-content/10 py-8 dark:border-light-content/10 transition-colors duration-300">
      <p className="w-full text-center text-xs text-content">
        Designed and coded by{" "}
        <Link
          to="/"
          className="font-medium text-dark-heading hover:underline dark:text-light-heading"
        >
          Nguyen Pham Hoang Vu
        </Link>{" "}
        with <span className="text-gradient font-medium">Love</span> &{" "}
        <span className="text-gradient font-medium">Coffee</span>
      </p>
    </footer>
  );
}
