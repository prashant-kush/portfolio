"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink-900/40 to-transparent" />
      <div className="container-xl">
        <div className="max-w-2xl mb-16">
          <div className="eyebrow mb-4">— Experience</div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            A track record of shipping into high-stakes systems.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Marker */}
                <div className="absolute left-0 top-1">
                  <div
                    className={`h-10 w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-br ${exp.accent} flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/10`}
                  >
                    <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-white/90" />
                  </div>
                </div>

                <div className="card p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-white">
                        {exp.role}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/60">
                        <span className="font-medium text-accent-light">{exp.company}</span>
                        <span className="text-white/25">·</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-white/50 whitespace-nowrap pt-1">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-white/70 leading-relaxed">
                        <span className="mt-2 h-1 w-1 rounded-full bg-accent-light/70 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
