/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      colors:{
        "search":"#19345E",
        'primary-color-hover': '#F16A13',
        'border-color': '#E1E1E1'
      },
=======
      colors: {
        "primary-color": "#F47624",
        'primary-color-hover': '#F16A13',
        'border-color': '#E1E1E1'
      },
      fontFamily: {
        'Lilita-One': ['Lilita One', 'cursive'],
      },
>>>>>>> 073fe15a557ed3e904b730c8c1e11da1f72a45b6
      backgroundColor: {
        'activeBackground': '#F47624'
      }
    },
<<<<<<< HEAD
=======
    container: {
      center: true,
    },
>>>>>>> 073fe15a557ed3e904b730c8c1e11da1f72a45b6
  },
  plugins: [require("daisyui")],
}

