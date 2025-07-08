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
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'gradient-flow': 'gradient-flow 2s linear infinite',
        'fade-in-left': 'fade-in-left 0.5s ease-out forwards',
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