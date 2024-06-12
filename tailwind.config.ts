import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        expandWidth: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        expandWidth: "expandWidth 1s ease-in-out forwards",
        "slide-left": "slide-left 8s linear infinite",
        fadeInUp: "fadeInUp 0.7s ease-out forwards",
      },
      colors: {
        brLime: "#DCFC62",
        brRed: "#F24B2A",
        brBlack: "#000000",
        brGray: "#C7CCCF",
      },
    },
  },
  plugins: [],
};
export default config;
