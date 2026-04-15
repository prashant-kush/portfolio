"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { achievements } from "@/lib/data";

const icons = [Award, GraduationCap];

export default function Achievements() {
  return (
    <section className="section pt-0">
      <div className="container-xl">
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((a, i) => {
            const Icon = icons[i] ?? Award;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card p-6 flex items-center gap-5"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/25 to-accent-glow/10 border border-white/10 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-accent-light" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white">{a.title}</h3>
                  <p className="text-sm text-white/55 mt-0.5">{a.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
