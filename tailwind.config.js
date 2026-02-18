/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      brand: {
        50: "#EBFAFA",
        100: "#D7F4F4",
        200: "#B2EBEB",
        300: "#8AE0E0",
        400: "#66D6D6",
        500: "#3ECCCC",
        600: "#2DA9A9",
        700: "#217D7D",
        800: "#165555",
        900: "#0B2828",
        950: "#051414",
      },
      white: "#FFFFFF",
      error: "#FF8749",
      "selected-cell": "#FF8749",
      gray: {
        300: "#D1D5DB",
        900: "#171717",
      },
      black: "#000000",
      red: {
        400: "#F87171",
        600: "#DC2626",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "scrollbar-width": "none" /* Firefox */,
          "-ms-overflow-style": "none" /* IE 10+ */,
        },
        "no-scrollbar::-webkit-scrollbar": {
          display: "none" /* All other browsers */,
        },
      });
    },
  ],
};
