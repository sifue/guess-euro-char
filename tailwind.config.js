/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'euro': ['Noto Sans', 'DejaVu Sans', 'Arial Unicode MS', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

