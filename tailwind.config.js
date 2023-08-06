/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        light: "url('/src/assets/img/lightBg.svg')",
        dark: "url('/src/assets/img/darkBg.svg')",
      },
    },
  },
  plugins: [],
};
