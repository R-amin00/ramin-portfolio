/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-pattern": "url('./src/assets/background/background.jpg')",
      },
      boxShadow: {
        "box-shadow": " -15px 15px 43px #424242",
      },
    },
  },
  plugins: [require("daisyui")],
};
