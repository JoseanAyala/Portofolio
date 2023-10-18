/** @type {import('tailwindcss').Config} */
import "tailwindcss/plugin";

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

      animation: {
        fadeUp: "fadeUp .75s ease-in",
        fadeDown: "fadeDown .75s ease-in",
        fadeRight: "fadeRight .75s ease-in",
        fadeLeft: "fadeLeft .75s ease-in",
      },
      keyframes: () => {
        const movementPixels = 75;
        return {
          fadeUp: {
            "0%": { opacity: 0, transform: `translateY(-${movementPixels}px)` },
            "100%": { opacity: 100, transform: `translateY(0)` },
          },
          fadeDown: {
            "0%": { opacity: 0, transform: `translateY(${movementPixels}px)` },
            "100%": { opacity: 100, transform: `translateY(0)` },
          },
          fadeRight: {
            "0%": { opacity: 0, transform: `translateX(-${movementPixels}px)` },
            "100%": { opacity: 100, transform: `translateX(0)` },
          },
          fadeLeft: {
            "0%": { opacity: 0, transform: `translateX(${movementPixels}px)` },
            "100%": { opacity: 100, transform: `translateX(0)` },
          },
        };
      },
    },
  },
  plugins: [],
};
