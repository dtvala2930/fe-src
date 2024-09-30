import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "alice-blue": "rgb(238, 245, 252)",
        "cornflower-blue": "rgb(88, 152, 230)",
        "dodger-blue": "rgba(0, 122, 255, 0.2)",
        "vivid-blue": "rgba(0, 122, 255)",
        "cobalt-blue": "#0b6ab3",
        "ivory-yellow": "rgb(255, 247, 236)",
        "light-blue": "#5898e6",
        "light-sky-blue": "#adcce3",
        "peach-puff": "#FFF7EC",
        "neon-carrot": "#FFB443",
        "dark-gray": "#6B6B6B",
        "medium-blue":"#0B6AB3",
        "blue-gray": "#CAD6DF",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
