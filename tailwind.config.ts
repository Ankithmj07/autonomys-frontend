import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ Must point to your project files
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-slow': 'fadeIn 3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
