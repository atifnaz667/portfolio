import type { Config } from "tailwindcss";

const c = (v: string) =>
  `color-mix(in srgb, var(--${v}) calc(<alpha-value> * 100%), transparent)`;

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SF Mono", "monospace"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      colors: {
        background: c("background"),
        foreground: c("foreground"),
        surface: c("surface"),
        card: c("card"),
        "card-foreground": c("card-foreground"),
        popover: c("popover"),
        "popover-foreground": c("popover-foreground"),
        primary: c("primary"),
        "primary-foreground": c("primary-foreground"),
        secondary: c("secondary"),
        "secondary-foreground": c("secondary-foreground"),
        muted: c("muted"),
        "muted-foreground": c("muted-foreground"),
        accent: c("accent"),
        "accent-foreground": c("accent-foreground"),
        "accent-hover": c("accent-hover"),
        success: c("success"),
        destructive: c("destructive"),
        "destructive-foreground": c("destructive-foreground"),
        border: c("border"),
        input: c("input"),
        ring: c("ring"),
        sand: c("sand"),
        peach: c("peach"),
        mint: c("mint"),
        "teal-soft": c("teal-soft"),
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        ping: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        "caret-blink": {
          "0%, 70%, 100%": { opacity: "1" },
          "20%, 50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
