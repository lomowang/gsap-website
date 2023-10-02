/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura", "sans"],
      },
      fontSize: {
        "1.5vw": "1.5vw",
        "2vw": "2vw",
        "3vw": "3vw",
        "4vw": "4vw",
        "10vw": "10vw",
        "15vw": "15vw",
        "15.2vw": "15.2vw",
        "17vw": "17vw",
      },
    },
  },
  plugins: [],
};
