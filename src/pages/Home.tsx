import { SEO } from "@/components/SEO";
import { personalDetails } from "@/data/portfolio";
import { quote } from "@/data/quote";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [avatarError, setAvatarError] = useState(false);

  const fadeSlide = (delay: number) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
    },
  });

  const imageAnim = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <>
      <SEO
        title="Home"
        description="Nguyen Pham Hoang Vu's professional backend engineering portfolio. Highly skilled in NestJS, ExpressJS, Go, Spring Boot, clean architecture, and building highly scalable, reliable systems."
      />

      <section className="container mx-auto max-width flex flex-col-reverse justify-center gap-8 py-8 lg:py-0 lg:h-[calc(100dvh-160px)] lg:min-h-[500px] lg:max-h-[750px] lg:flex-row lg:items-center lg:justify-between lg:overflow-hidden">
        <div ref={ref} className="flex-1 space-y-4 lg:space-y-6">
          <div className="space-y-1.5 lg:space-y-2">
            <motion.h1
              variants={fadeSlide(0.1)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-2xl font-bold text-dark-heading dark:text-light-heading md:text-4xl lg:text-5xl xl:text-6xl xl:leading-tight"
            >
              Hi, 👋
              <br />
              My Name is
            </motion.h1>
            <motion.h1
              variants={fadeSlide(0.2)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-2xl font-bold text-gradient md:text-4xl lg:text-5xl xl:text-6xl xl:leading-tight py-1"
            >
              {personalDetails.name}
            </motion.h1>
            <motion.blockquote
              variants={fadeSlide(0.3)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative text-xl md:text-2xl lg:text-3xl xl:text-2xl font-light italic 
             text-dark-heading/90 dark:text-light-heading/90
             before:content-['“'] before:absolute before:-top-4 before:-left-6 
             before:text-8xl before:text-dark-heading/20 dark:before:text-light-heading/20 
             before:leading-none before:font-serif
             after:content-['”'] after:absolute after:-bottom-8 after:right-0 
             after:text-8xl after:text-dark-heading/20 dark:after:text-light-heading/20 
             after:leading-none after:font-serif"
            >
              {quote}
            </motion.blockquote>
          </div>

          {/* <motion.p
            variants={fadeSlide(0.4)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-content max-w-lg text-xs md:text-sm lg:text-base leading-relaxed"
          >
            I specialize in crafting high-performance RESTful APIs, microservices, and clean architecture. I design and implement robust systems that manage operational complexity gracefully.
          </motion.p> */}

          <motion.div
            variants={fadeSlide(0.5)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap gap-4 pt-1"
          >
            <Link
              to="/projects"
              className="rounded-lg bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-dark-heading px-5 py-2.5 text-sm font-semibold text-dark-heading hover:bg-black/5 dark:border-white dark:text-white dark:hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={imageAnim}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center md:justify-end flex-1"
        >
          {avatarError ? (
            <div
              className="flex h-56 w-56 items-center justify-center rounded-full bg-gradient-brand text-5xl font-bold text-white shadow-2xl md:h-72 md:w-72 lg:h-80 lg:w-80"
              aria-label={personalDetails.name}
            >
              Vu
            </div>
          ) : (
            <img
              src={personalDetails.avatar}
              alt={personalDetails.name}
              className="h-56 w-56 rounded-full border-4 border-dark-content/20 object-cover shadow-2xl dark:border-light-content/20 md:h-72 md:w-72 lg:h-72 lg:w-72 xl:h-80 xl:w-80 hover:rotate-1 transition-transform duration-500"
              onError={() => setAvatarError(true)}
            />
          )}
        </motion.div>
      </section>
    </>
  );
}
