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
        'navy':{
          50: '#0a192f',
          100: '#060E1A'
        },
        white:{
          50: '#f9fbf2',
          100: '##E0E1D9',
          150: '#c7c8c1',
          200: '#aeafa9'
        },
        gray: '#6E7D8B',
        'beige': '#d2cca1', // maybe change?
        purple: {
          //50 light, 100 darker
          50: '#c2aff0',
          100: '#9191e9',
          150: '#8282d1',
          200: '#7474ba'
        }
      },
    },
  },
  plugins: [],
};
export default config;
