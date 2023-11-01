/** @type {import('tailwindcss').Config} */
import "tailwindcss/plugin";
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cod-gray": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#121212",
        },
      },

      boxShadow: {
        neon: "0 0 10px theme('colors.primary.500')",
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
  darkMode: "class",
  plugins: [],
});
