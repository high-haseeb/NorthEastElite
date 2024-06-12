import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
