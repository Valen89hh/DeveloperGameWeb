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
      colors: {
        "primary": "#0D7DF2",
        "primary-dark": "#61758A",
        "secondary": "#F0F2F5",
        "secondary-dark": "#374957",
        "blackout": "#121417",
        "primary-light": "#DBE0E5"
      },
      screens: {
      'xs': "480px",
      'sm': "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px"
    }
    },
  },
  plugins: [],
};
export default config;
