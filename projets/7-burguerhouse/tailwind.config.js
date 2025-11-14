import forms from "@tailwindcss/forms";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ffc045",
        "primary-hover": "#e5ae30",
        secondary: "#3d2514",
        "secondary-hover": "#543d2c",
        "red-primary": "#bf2222",
        "red-primary-hover": "#d63a3a",
      },
      spacing: {
        17: "4.25rem",
        18: "4.50rem",
        19: "4.75rem",
      },
      fontFamily: {
        secondary: ["Alfa Slab One"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [forms],
};
