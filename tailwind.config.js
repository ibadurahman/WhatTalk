/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Lato", "Open Sans", "ui-sans-serif"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    extend: {
      colors: {
        colorPrimary: "#CDE7FF",
        colorSecondary: "#E8F4FF",
        colorPrimaryStroke: "#ADD8FF",
        colorFontPlaceholder: "#5B5B5B",
        colorFontThin: "#9e9e9e",
        green: {
          100: "#DFE6DA",
          200: "#B9C7B3",
          300: "#93A88D",
          400: "#6D8966",
          500: "#476A40",
          600: "#3A5633",
          700: "#2C4226",
          800: "#1E2E19",
        },
        grey: {
          100: "#F4F4F4",
          200: "#CCCCCC",
          300: "#D4D4D4",
          400: "#B7B7B7",
          500: "#A3A3A3",
          600: "#8F8F8F",
          700: "#7A7A7A",
          800: "#666666",
        },
        black: {
          100: "#5B5B5B",
          200: "#4D4D4D",
          300: "#3F3F3F",
          400: "#313131",
          500: "#232323",
          600: "#1C1C1C",
          700: "#141414",
          800: "#000000",
        },
      },
    },
  },
  plugins: [],
};
