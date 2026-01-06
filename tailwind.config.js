/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        oprix: {
          dark: '#0a0a0f',
          card: '#13131f',
          accent: '#14b8a6', // Teal-500
          accentHover: '#0d9488', // Teal-600
          secondary: '#64748b',
          border: '#27272a'
        }
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}