"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { personal } from "@/lib/data";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    primary: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/prashant-kushwaha",
    href: personal.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "/prashant-kush",
    href: personal.github,
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@Prashant__kush",
    href: personal.twitter,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-8 md:p-14">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-mint/10 blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-30 mask-radial-fade" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="eyebrow mb-4">— Let&apos;s talk</div>
                <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-balance">
                  Got a role or a project?
                  <br />
                  <span className="gradient-text">Let&apos;s make it real.</span>
                </h2>
                <p className="mt-5 text-white/65 leading-relaxed max-w-xl">
                  I&apos;m currently open to contract engagements and full-time roles. Drop a note —
                  I typically reply within a day.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${personal.email}?subject=Let's%20work%20together`}
                    className="btn-primary"
                  >
                    <Mail className="h-4 w-4" />
                    Email me
                  </a>
                  <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                    View resume
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 grid gap-2.5">
              {channels.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 hover:border-accent/40 hover:bg-white/[0.06] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                      <c.icon className="h-4 w-4 text-accent-light" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                        {c.label}
                      </div>
                      <div className="text-sm text-white/85">{c.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
