import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { SEO } from "@/components/SEO";
import { technicalDiscussions, type TechDiscussion } from "@/data/technical";
import { projectDetails } from "@/data/portfolio";

// ── Tag colour map ──────────────────────────────────────────────────────────
const tagStyles: Record<string, string> = {
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300",
  sky: "bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300",
  emerald:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300",
};

const borderAccent: Record<string, string> = {
  purple: "border-purple-400/40 dark:border-purple-500/30",
  sky: "border-sky-400/40 dark:border-sky-500/30",
  emerald: "border-emerald-400/40 dark:border-emerald-500/30",
  amber: "border-amber-400/40 dark:border-amber-500/30",
  rose: "border-rose-400/40 dark:border-rose-500/30",
};

const dotAccent: Record<string, string> = {
  purple: "bg-purple-500",
  sky: "bg-sky-500",
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
};

// ── Chevron icon ────────────────────────────────────────────────────────────
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ── Trade-off row ───────────────────────────────────────────────────────────
function TradeoffRow({
  option,
  pro,
  con,
}: {
  option: string;
  pro: string;
  con: string;
}) {
  return (
    <div className="rounded-xl border border-slate-100 dark:border-zinc-800 overflow-hidden">
      <div className="px-4 py-2 bg-slate-50 dark:bg-zinc-800/60 border-b border-slate-100 dark:border-zinc-700">
        <span className="text-xs font-bold uppercase tracking-wider text-dark-heading dark:text-light-heading">
          {option}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-zinc-800">
        <div className="flex gap-3 p-4">
          <span className="mt-0.5 flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <p className="text-sm text-content leading-relaxed">{pro}</p>
        </div>
        <div className="flex gap-3 p-4">
          <span className="mt-0.5 flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
          <p className="text-sm text-content leading-relaxed">{con}</p>
        </div>
      </div>
    </div>
  );
}

// ── Discussion Card ─────────────────────────────────────────────────────────
function DiscussionCard({ item }: { item: TechDiscussion }) {
  const [open, setOpen] = useState(false);

  const relatedProjects = projectDetails.filter((p) =>
    item.relatedProjects.includes(p.id),
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      className={`rounded-2xl border bg-white dark:bg-dark-card shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${borderAccent[item.tagColor]}`}
    >
      {/* Card Header */}
      <button
        id={`technical-card-${item.id}`}
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 group"
        aria-expanded={open}
      >
        <div className="flex-1 space-y-2">
          {/* Tag */}
          <span
            className={`inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${tagStyles[item.tagColor]}`}
          >
            {item.tag}
          </span>

          <div className="flex items-start gap-3">
            <span
              className={`mt-1.5 flex-shrink-0 h-2.5 w-2.5 rounded-full ${dotAccent[item.tagColor]}`}
            />
            <div>
              <h3 className="text-lg md:text-xl font-bold text-dark-heading dark:text-light-heading leading-snug group-hover:text-gradient transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-content mt-1">{item.subtitle}</p>
            </div>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2 pl-5">
            {item.keywords.map((kw) => (
              <span
                key={kw}
                className="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 text-content font-medium"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        <div className="text-content mt-1">
          <ChevronIcon open={open} />
        </div>
      </button>

      {/* Expandable Body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-7 space-y-7 border-t border-slate-100 dark:border-zinc-800 pt-6">
              {/* Context */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-dark-heading/60 dark:text-light-heading/50 mb-2">
                  Context / Problem
                </h4>
                <p
                  className="text-base text-content leading-relaxed text-justify"
                  dangerouslySetInnerHTML={{ __html: item.context }}
                ></p>
              </div>

              {/* Approach */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-dark-heading/60 dark:text-light-heading/50 mb-2">
                  My Approach
                </h4>
                <p
                  className="text-base text-content leading-relaxed text-justify"
                  dangerouslySetInnerHTML={{ __html: item.approach }}
                />
              </div>

              {/* Trade-offs */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-dark-heading/60 dark:text-light-heading/50 mb-3">
                  Trade-off Analysis
                </h4>
                <div className="space-y-3">
                  {item.tradeoffs.map((t) => (
                    <TradeoffRow key={t.option} {...t} />
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="rounded-xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/60 dark:border-zinc-800/70 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="h-4 w-4 text-sky-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h4 className="text-sm font-bold text-dark-heading dark:text-light-heading">
                    Conclusion & My Decision
                  </h4>
                </div>
                <p
                  className="text-sm text-content leading-relaxed text-justify"
                  dangerouslySetInnerHTML={{ __html: item.conclusion }}
                />
              </div>

              {/* Related Projects */}
              {relatedProjects.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-dark-heading/60 dark:text-light-heading/50 mb-3">
                    Explored In
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {relatedProjects.map((proj) => (
                      <Link
                        key={proj.id}
                        to={`/projects/${proj.id}`}
                        className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/60 hover:border-sky-400/60 hover:shadow-sm transition-all text-sm font-medium text-dark-heading dark:text-light-heading"
                      >
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="h-5 w-5 rounded object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                        <span className="group-hover:text-sky-500 transition-colors">
                          {proj.title}
                        </span>
                        <svg
                          className="h-3.5 w-3.5 text-content group-hover:text-sky-500 transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main Page ───────────────────────────────────────────────────────────────
const ALL_TAGS = [
  "All",
  ...Array.from(new Set(technicalDiscussions.map((d) => d.tag))),
];

export function Technical() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? technicalDiscussions
      : technicalDiscussions.filter((d) => d.tag === activeTag);

  return (
    <>
      <SEO
        title="Technical Discussion"
        description="In-depth engineering discussions by Nguyen Pham Hoang Vu — covering concurrency, microservices, clean architecture, Kafka, and Redis caching strategies."
      />

      <section className="container mx-auto max-width py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <SectionHeading
            title="Technical Discussion"
            subtitle="Engineering trade-offs, architectural decisions, and lessons learned from real projects."
          />

          {/* Callout banner */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-start gap-3 rounded-xl border border-sky-200/60 dark:border-sky-800/40 bg-sky-50/60 dark:bg-sky-950/20 px-5 py-4 mt-2"
          >
            <svg
              className="h-5 w-5 flex-shrink-0 text-sky-500 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm text-content leading-relaxed">
              These are not tutorials — they are honest reflections on real
              engineering decisions I faced, the trade-offs I considered, and
              the conclusions I reached. Click any card to expand the full
              discussion.
            </p>
          </motion.div>
        </motion.div>

        {/* Tag Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-wrap gap-2 mt-8"
        >
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              id={`tag-filter-${tag.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeTag === tag
                  ? "bg-gradient-brand text-white border-transparent shadow-md scale-[1.04]"
                  : "border-slate-200 dark:border-zinc-700 text-content hover:border-sky-400 hover:text-sky-500 dark:hover:border-sky-600"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div layout className="mt-8 space-y-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <DiscussionCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-zinc-900 dark:to-zinc-800 border border-slate-700 p-8 text-center space-y-4"
        >
          <p className="text-2xl font-bold text-white">
            Want to discuss further?
          </p>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            I enjoy deep technical conversations around backend engineering,
            system design, and architecture. Feel free to reach out.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-2 bg-gradient-brand text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 text-sm"
          >
            Get In Touch →
          </Link>
        </motion.div>
      </section>
    </>
  );
}
