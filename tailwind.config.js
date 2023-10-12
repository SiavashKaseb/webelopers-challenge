/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkColor: "#8130f2",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    rtl: true,
    themes: [],
  },
};
