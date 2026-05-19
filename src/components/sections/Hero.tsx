import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalDetails } from "@/data/portfolio";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [avatarError, setAvatarError] = useState(false);

  const fadeSlide = (delay: number) => ({
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
    },
  });

  const imageAnim = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="section container mx-auto max-width md:flex md:items-center md:justify-between"
    >
      <div ref={ref}>
        <motion.h1
          variants={fadeSlide(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-2xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight"
        >
          Hi, 👋
          <br />
          My Name is
          <br />
        </motion.h1>
        <motion.h1
          variants={fadeSlide(0.25)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-2xl font-bold text-gradient md:text-4xl xl:text-5xl xl:leading-tight"
        >
          {personalDetails.name}
        </motion.h1>
        <motion.h2
          variants={fadeSlide(0.4)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-2xl font-bold text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight"
        >
          {personalDetails.tagline}
        </motion.h2>
      </div>

      <motion.div
        variants={imageAnim}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mt-8 flex justify-center md:mt-0 md:justify-end"
      >
        {avatarError ? (
          <div
            className="flex h-56 w-56 items-center justify-center rounded-full bg-gradient-brand text-5xl font-bold text-white shadow-2xl md:h-72 md:w-72"
            aria-label={personalDetails.name}
          >
            Vu
          </div>
        ) : (
          <img
            src={personalDetails.avatar}
            alt={personalDetails.name}
            className="h-56 w-56 rounded-full border-4 border-dark-content/20 object-cover shadow-2xl dark:border-light-content/20 md:ml-auto md:h-72 md:w-72"
            onError={() => setAvatarError(true)}
          />
        )}
      </motion.div>
    </section>
  );
}
