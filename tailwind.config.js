/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEC600",
        gray: { 100: "#C6C6C6", 200: "#3C3F4E", DEFAULT: "#C6C6C6" },
        black: {
          100: "#000000",
          200: "#100F0F",
          300: "#2C2C2E",
          DEFAULT: "#000",
        },
      },
    },
  },
  plugins: [],
};
