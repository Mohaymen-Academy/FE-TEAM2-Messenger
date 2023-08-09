/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        lightGradient: "url('/src/assets/img/lightGradient.svg')",
        darkBg: "url('/src/assets/img/darkBg.svg')",
        darkIcons: "url('/src/assets/img/bgIconsDark.png')",
        lightIcons: "url('/src/assets/img/bgIconsLight.png')",
        pattern: "url('/src/assets/img/bgPattern.svg')",
        pattern2: "url('/src/assets/img/bgPattern2.svg')",
        pattern3: "url('/src/assets/img/bgPattern3.svg')",
      },
      backgroundColor: {
        primary: {},
        secondary: {},
      },
    },
  },
  // safelist: ["opacity-100", "scale-100"],
  plugins: [],
};
