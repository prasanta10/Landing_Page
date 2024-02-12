/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#B2AC88",
        secondary:"#FADA5E",
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
}