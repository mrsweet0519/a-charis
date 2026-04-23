/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'edu-orange': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          DEFAULT: '#FF6B00',
          600: '#ea580c',
          700: '#c2410c',
        },
        'edu-black': {
          DEFAULT: '#000000',
          pure: '#000000',
          deep: '#050505',
          rich: '#0a0a0a',
          surface: '#121212',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
