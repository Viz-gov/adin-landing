/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'gradient-flow': {
          '0%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      animation: {
        'gradient-flow': 'gradient-flow 2s linear infinite',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontFeatureSettings: {
        roundPeriod: "'ss03' 1",
      },
    },
  },
  plugins: [],
}; 