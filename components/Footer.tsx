import { personal } from "@/lib/data";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10 mt-10">
      <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/45">
          © {year} {personal.name}. Crafted with care.
        </div>
        <div className="flex items-center gap-2">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="h-9 w-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="h-9 w-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={personal.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="h-9 w-9 rounded-lg border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
