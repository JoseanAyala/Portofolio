/** @type {import('tailwindcss').Config} */
import "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#F9F9F9",
        black: "#000000",
        primary: {
          50: "#fff0f3",
          100: "#ffe2e9",
          200: "#ffcad9",
          300: "#ff9fb9",
          400: "#ff6994",
          500: "#ff2a6d",
          600: "#ed1161",
          700: "#c80853",
          800: "#a8094c",
          900: "#8f0c47",
          950: "#500122",
        },
        secondary: {
          50: "#ecfcff",
          100: "#d1f7ff",
          200: "#a3ecfe",
          300: "#64ddfc",
          400: "#1ec3f2",
          500: "#02a6d8",
          600: "#0483b6",
          700: "#0b6a93",
          800: "#135677",
          900: "#144865",
          950: "#072e45",
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
  plugins: [],
};
