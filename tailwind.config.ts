import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // all the 10 values
        'navy': '#0a192f',
        white: '#f9fbf2',
        'beige': '#d2cca1', // maybe change?
        purple: {
          //50 light, 100 darker
          50: '#c2aff0',
          100: '#9191e9' 
        }
      },
    },
  },
  plugins: [],
};
export default config;
