"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">— Selected work</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              A few things worth showing.
            </h2>
          </div>
          <p className="text-white/55 max-w-sm text-sm md:text-base">
            The rest lives inside NDAs — happy to walk through specifics on a call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => {
            const className = `card group relative overflow-hidden p-7 flex flex-col justify-between h-full min-h-[260px] ${
              p.href ? "cursor-pointer" : ""
            }`;

            const content = (
              <>
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl md:text-[1.35rem] font-semibold text-white leading-snug">
                      {p.name}
                    </h3>
                    {p.href && (
                      <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                    )}
                  </div>
                  <p className="mt-3 text-white/60 leading-relaxed text-sm">
                    {p.summary}
                  </p>
                </div>

                <div className="relative mt-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-xs text-mint/80">{p.metric}</span>
                </div>
              </>
            );

            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noreferrer" className={className}>
                    {content}
                  </a>
                ) : (
                  <div className={className}>{content}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
