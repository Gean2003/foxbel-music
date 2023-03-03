/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-red-secondary': '#662323',
        'red-principal': '#662323',
        'soft-gray': '#BDBDBD',
        'light-red': '#FF7676'
      }
    },
  },
  plugins: [],
}
