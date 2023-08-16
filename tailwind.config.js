/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
        sm: "600px",
        // "2xl": "1275px",
      },
      backgroundImage: {
        lightGradient: "url('/src/assets/img/lightGradient.svg')",
        darkBg: "url('/src/assets/img/darkBg.svg')",
        darkIcons: "url('/src/assets/img/bgIconsDark.png')",
        lightIcons: "url('/src/assets/img/bgIconsLight.png')",
        pattern: "url('/src/assets/img/bgPattern.svg')",
        pattern2: "url('/src/assets/img/bgPattern2.webp')",
        pattern3: "url('/src/assets/img/bgPattern3.svg')",
        chatCurrentUser: "url('src/assets/img/chat_currentuser.svg')",
        chatOtherUser: "url('src/assets/img/chat_otheruser.svg')",
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        white: "var(--text-white)",
        "neon-blue": "var(--text-neon-blue)",
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        online: "var(--bg-online)",
        btn: "var(--bg-btn)",
        "btn-danger": "var(--bg-btn-danger)",
        "btn-danger-hover": "var(--bg-btn-danger-hover)",
        hover: "var(--bg-hover)",
        "btn-hover": "var(--bg-btn-hover)",
        "btn-ghost": "var(--bg-btn-ghost)",
        "msg-current": "var(--bg-msg-current)",
        "msg-other": "var(--bg-msg-other)",
        toast: "var(--toastify-toast-background)",
        "skeleton-primary": "var(--bg-skeleton-primary)",
        
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
