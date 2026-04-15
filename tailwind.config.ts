import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#06070A",
          900: "#0A0B10",
          800: "#0F1117",
          700: "#161921",
          600: "#1E222D",
          500: "#2A2F3D",
        },
        accent: {
          DEFAULT: "#7C5CFF",
          light: "#A689FF",
          glow: "#5B3BFF",
        },
        mint: "#4ADE9F",
        amber: "#F5B94A",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at center, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "glow-accent":
          "radial-gradient(60% 60% at 50% 40%, rgba(124,92,255,0.35) 0%, rgba(124,92,255,0) 70%)",
      },
      animation: {
        "gradient-shift": "gradient 10s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
