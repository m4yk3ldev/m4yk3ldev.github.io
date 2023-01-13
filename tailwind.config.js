/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)"],
      },
      colors: {
        azul: {
          dark: "#06283D",
          light: "#256D85",
        },
        blanco: {
          dark: "#47B5FF",
          light: "#DFF6FF",
        },
      },
    },
  },
  plugins: [],
};
