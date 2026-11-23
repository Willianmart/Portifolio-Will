import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--wm-bg)",
        panel: "var(--wm-panel)",
        surface: "var(--wm-surface)",
        ink: "var(--wm-ink)",
        muted: "var(--wm-muted)",
        accent: "var(--wm-accent)",
        electric: "var(--wm-electric)",
        line: "var(--wm-line)",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -12px color-mix(in srgb, var(--wm-accent) 55%, transparent)",
        card: "0 18px 50px -28px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        "grid-tech":
          "linear-gradient(to right, var(--wm-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--wm-grid) 1px, transparent 1px)",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 14s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
