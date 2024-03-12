/** @type {import('tailwindcss').Config} */
// const useTheme  =  require('./src/context/DarkTheme.jsx');
// console.log(useTheme)
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#544DF6',
        black: '#1F2025',
        lightBlack: '#26272F',
        lightGrey: '#E2E9FA',
        grey: '#D9D9D9'
      },
      boxShadow: {
        'main': '3px 4px 10px 0px #544DF6'
      }
    },
    fontFamily: {
      'noto': ['Noto Sans Arabic', 'sans-serif']
    }
  },
  plugins: [],
  darkMode: 'class'
}

