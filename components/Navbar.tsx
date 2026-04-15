"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personal } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-ink-950/70 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative inline-flex h-9 w-9 items-center justify-center">
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-accent/60 via-accent-glow/40 to-transparent blur-[6px] opacity-80" />
            <span className="relative inline-flex h-9 w-9 rounded-full overflow-hidden border border-white/15 bg-gradient-to-br from-accent/30 to-accent-glow/20 items-center justify-center">
              <span className="absolute inset-0 flex items-center justify-center font-display font-semibold text-white/80 text-xs">
                PK
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={personal.portrait}
                alt={personal.name}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
                className="relative h-full w-full object-cover"
              />
            </span>
          </span>
          <span className="font-display font-semibold tracking-tight group-hover:text-white transition-colors">
            Prashant
            <span className="text-accent-light">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="btn-primary text-sm"
          >
            Hire me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-white/80"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl"
          >
            <div className="container-xl py-4 flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-white/80 border-b border-white/5 last:border-none"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4"
              >
                Hire me
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
