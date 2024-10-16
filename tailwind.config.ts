import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geistSans: ['var(--font-geist-sans)', 'sans-serif'],
        geistMono: ['var(--font-geist-mono)', 'monospace']
      },
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
        gray:{
          50: '#b7c2cf',
          100: '#8890af'
        },
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