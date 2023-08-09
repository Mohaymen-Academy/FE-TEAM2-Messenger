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
        pattern2: "url('/src/assets/img/bgPattern2.webp')",
        pattern3: "url('/src/assets/img/bgPattern3.svg')",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        white: "var(--text-white)",
        blue: "var(--text-blue)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        online: "var(--bg-online)",
        btn: "var(--bg-btn)",
        hover: "var(--bg-hover)",
        "btn-hover": "var(--bg-btn-hover)",
        "btn-ghost": "var(--bg-btn-ghost)",
        "msg-current": "var (--bg-msg-current)",
        "msg-other": "var (--bg-msg-other)",
      },
    },
  },
  // safelist: ["opacity-100", "scale-100"],
  plugins: [],
};
