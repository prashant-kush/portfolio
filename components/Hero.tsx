"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, MapPin } from "lucide-react";
import { personal, stats } from "@/lib/data";

const companies = ["Atlassian", "Blinkit", "Razorpay", "Rakuten"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40 pb-20">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 grid-bg mask-radial-fade opacity-60" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[500px] w-[800px] -z-10 bg-glow-accent blur-3xl opacity-70" />
      <div className="absolute inset-0 -z-10 noise opacity-[0.015] pointer-events-none" />

      <div className="container-xl">
        {/* SEO H1 — visually hidden, read by search engines and assistive tech */}
        <h1 className="sr-only">
          Prashant Kushwaha — Senior Software Engineer (SDE-2) at Atlassian. Ex-Blinkit, Razorpay.
          Frontend-focused full-stack developer specializing in React, Next.js, TypeScript, and web
          performance. Based in Bengaluru, India. Available for contract and full-time roles.
        </h1>

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur px-4 py-1.5 text-xs font-mono text-white/80 hover:border-white/20 hover:bg-white/[0.06] transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            {personal.availability}
            <ArrowRight className="h-3 w-3 opacity-60 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Visual headline (H2 — H1 is the SEO one above) */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="heading text-center text-balance max-w-5xl mx-auto"
        >
          Senior software engineer building
          <br className="hidden md:block" />{" "}
          <span className="gradient-text">products people trust.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 subheading mx-auto text-center"
        >
          I&apos;m {personal.name.split(" ")[0]} — SDE-2 at Atlassian, ex-Blinkit and Razorpay. I ship
          performant frontends, resilient backends, and the observability to keep them honest.
        </motion.p>

        {/* Location + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <div className="inline-flex items-center gap-2 text-sm text-white/50">
            <MapPin className="h-4 w-4" />
            {personal.location}
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#contact" className="btn-primary">
              Hire me
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              <Download className="h-4 w-4" />
              Download resume
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/[0.06] border border-white/[0.06]"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="group bg-ink-900/80 backdrop-blur p-6 md:p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-accent/10 to-transparent" />
              <div className="relative">
                <div className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  {s.value}
                </div>
                <div className="mt-2 text-xs md:text-sm text-white/55">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Company marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="flex items-center gap-3 justify-center mb-6">
            <Sparkles className="h-4 w-4 text-accent-light" />
            <span className="eyebrow">Trusted by teams at</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {companies.map((c) => (
              <span
                key={c}
                className="font-display text-2xl md:text-3xl font-semibold text-white/35 hover:text-white/80 transition-colors"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
