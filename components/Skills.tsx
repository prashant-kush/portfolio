"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-xl">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="eyebrow mb-4">— Toolkit</div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
              The stack I reach for.
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-sm md:text-base">
            Opinions are cheap — I pick tools because they&apos;ve held up at scale, not because they
            trend. Here&apos;s what I&apos;ve earned scars with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card p-6 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-white">{g.label}</h3>
                <span className="font-mono text-[10px] text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono text-white/75 bg-white/[0.03] border border-white/5 hover:border-accent/30 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
