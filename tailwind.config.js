/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkestBlue: "#01012b",
      darkBlue: "#005678",
      midBlue: "#05d9e8",
      lightBlue: "#d1f7ff",
      highlight: "#ff2a6d",
      grey: "#4E4E50",
      white: "#F9F9F9",
      black: "#000000",
    },
    extend: {
      boxShadow: {
        neon: "0 0 10px theme('colors.highlight')",
      },
    },
  },
  plugins: [],
};
