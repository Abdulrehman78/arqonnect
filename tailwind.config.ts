import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#09090B",
        "bg-alt": "#0F0F12",
        panel: "#18181B",
        "panel-2": "#1F1F23",
        accent: "#22C55E",
        "accent-dim": "#16A34A",
        violet: "#8B5CF6",
        "violet-dim": "#7C3AED",
        electric: "#6366F1",
        "electric-2": "#818CF8",
        cyan: "#06B6D4",
        text: "#FAFAFA",
        "text-dim": "#A1A1AA",
        "text-dimmer": "#71717A",
        gold: "#A1A1AA",
        "gold-dim": "#71717A",
        line: "rgba(255,255,255,0.08)",
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "16px",
        xl: "20px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "wave-bar": "waveBar 1.2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        waveBar: {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34,197,94,0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139,92,246,0.1), transparent)",
      },
    },
  },
  plugins: [],
};
export default config;
