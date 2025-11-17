import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: "#0A1E3F",
          navyLight: "#12325F",
          navyDark: "#07142A",

          medium: "#1E4D8F",
          mediumLight: "#2D67B5",
          mediumDark: "#153766",
        },
        gold: {
          DEFAULT: "#F5C242",
          light: "#FFD976",
          dark: "#BB8F1F",
        },
        gray: {
          light: "#F2F4F7",
          medium: "#CED3D9",
          dark: "#4A4F57",
        },

        // TRANSLUCIDOS → estilo moderno
        overlay: "rgba(10, 30, 63, 0.6)",
        cardBg: "rgba(255, 255, 255, 0.07)",
      },

      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #0A1E3F 0%, #1E4D8F 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #F5C242 0%, #FFD976 100%)",
      },

      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
        medium: "0 6px 20px rgba(0,0,0,0.12)",
        gold: "0 0 20px rgba(245, 194, 66, 0.35)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },

      animation: {
        fadeUp: "fadeUp 0.6s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
