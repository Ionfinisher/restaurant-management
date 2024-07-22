import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        refine: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "10%": {
            transform: "rotate(36deg)",
          },
          "20%": {
            transform: "rotate(72deg)",
          },
          "30%": {
            transform: "rotate(108deg)",
          },
          "40%": {
            transform: "rotate(144deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "60%": {
            transform: "rotate(216deg)",
          },
          "70%": {
            transform: "rotate(252deg)",
          },
          "80%": {
            transform: "rotate(288deg)",
          },
          "90%": {
            transform: "rotate(324deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "refine-slide": "refine 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
