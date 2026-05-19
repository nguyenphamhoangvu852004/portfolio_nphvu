/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "system-ui", "sans-serif"],
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        "light-content": "#A7A7A7",
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "light-heading": "#CCCCCC",
        "dark-mode": "#191919",
        "dark-card": "#363636",
        "green-text": "#018C0F",
        greenbg: "#D7FFE0",
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, #0ea5e9, #a855f7, #db2777)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
