import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Georgia', 'Times New Roman', 'serif'],
        inter: ['system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        beige: '#F5F0E8',
      },
    },
  },
  plugins: [],
};

export default config;
