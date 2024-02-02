/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        custom:["CustomFont", 'sans-serif'],
        heading:["Heading", 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}