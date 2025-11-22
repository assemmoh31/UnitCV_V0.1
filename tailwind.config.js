/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'plan-free': {
          DEFAULT: '#3b82f6',
          light: '#dbeafe',
          dark: '#1e40af',
        },
        'plan-plus': {
          DEFAULT: '#10b981',
          light: '#d1fae5',
          dark: '#047857',
        },
        'plan-pro': {
          DEFAULT: '#f59e0b',
          light: '#fef3c7',
          dark: '#d97706',
        },
      },
    },
  },
  plugins: [],
}


