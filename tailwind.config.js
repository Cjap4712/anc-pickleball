/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ancOrange: "#FF6B35",
        ancGreen: "#2C5530",
      },
    },
  },
  plugins: [],
}