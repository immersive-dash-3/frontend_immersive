/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "search":"#19345E",
        'primary-color-hover': '#F16A13',
        'border-color': '#E1E1E1'
      },
      fontFamily: {
        'Lilita-One': ['Lilita One', 'cursive']},
      backgroundColor: {
        'activeBackground': '#F47624'
      }
    },
  },
  plugins: [require("daisyui")],
}

