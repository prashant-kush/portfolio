"use client";

import { motion } from "framer-motion";
import { Code2, Gauge, Layers, ShieldCheck } from "lucide-react";
import { personal } from "@/lib/data";

const pillars = [
  {
    icon: Code2,
    title: "Product-minded frontend",
    body: "React, Next.js, TypeScript — shipped dashboards, onboarding flows, and micro-frontends used by enterprise customers and field teams.",
  },
  {
    icon: Gauge,
    title: "Performance that compounds",
    body: "50% faster initial loads, 30% shorter build times. I treat LCP, FCP, CLS, and HMR like first-class features.",
  },
  {
    icon: Layers,
    title: "Full-stack comfort",
    body: "Node.js services on Kubernetes, Helm deploys, Prometheus + Grafana observability tuned to handle 800 RPS peaks.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability by default",
    body: "Sentry, PagerDuty, load + spike testing, HPA tuning. I ship to teams where uptime is the product.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <div className="lg:col-span-5 flex">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              {/* Subtle portrait chip */}
              <div className="mb-8 flex items-center gap-3">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent/40 via-accent-glow/20 to-transparent blur-md opacity-80" />
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border border-white/15 shadow-[0_0_0_4px_rgba(6,7,10,0.8)] bg-gradient-to-br from-accent/30 to-accent-glow/20 flex items-center justify-center">
                    <span className="absolute inset-0 flex items-center justify-center font-display font-semibold text-white/70 text-sm">
                      PK
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={personal.portrait}
                      alt={personal.name}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                      className="relative h-full w-full object-cover saturate-[0.9]"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                    That&apos;s me —
                  </span>
                  <span className="font-display text-sm text-white/85">
                    {personal.name}
                  </span>
                </div>
              </div>

              <div className="eyebrow mb-4">— About</div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                I build products that load fast, stay up, and get out of people&apos;s way.
              </h2>
              <div className="mt-6 space-y-4 text-white/65 leading-relaxed">
                <p>
                  For the last 3+ years I&apos;ve been shipping production systems at Atlassian, Blinkit,
                  and Razorpay — the kind where a bug shows up on someone&apos;s payment screen or
                  stalls a field sales rep mid-onboarding.
                </p>
                <p>
                  I care about the thousand small choices that turn a feature into a product: the
                  render that doesn&apos;t jank, the form that remembers where you were, the alert that
                  pages the right person before a customer notices.
                </p>
                <p>
                  Now open to <span className="text-white">contract work</span> and the right{" "}
                  <span className="text-white">full-time role</span> — especially on teams where
                  quality and speed are not at war.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 auto-rows-fr gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card p-6 group h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent/30 to-accent-glow/20 border border-white/10 flex items-center justify-center group-hover:from-accent/50 transition-all">
                    <p.icon className="h-5 w-5 text-accent-light" />
                  </div>
                  <h3 className="font-display font-semibold text-white">{p.title}</h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
