import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "m-blue-1": "#F2F5FF",
        "m-blue-2": "#DCF0FF",
        "m-blue-3": "#E7F2FF",
        "m-color-1": "#4A65D5",
        "m-d8": "#D8D8D8",
        "m-eb": "#EBEBEB",
      },
      boxShadow: {
        "shadow-1": "4px 4px 24px 4px rgba(215, 236, 255, 0.75)",
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      md2: "839px",
      lg: "1024px",
      xl: "1280px",
      mobile: "435px",
    },
  },
  plugins: [],
};
export default config;
