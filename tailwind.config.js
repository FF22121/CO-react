/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotation: {
          '0%' : { rotate:'0deg' },
          '100%' : {rotate:'360deg'}
        }},
        animation: {
          rotate: 'rotation 10s linear infinite',
        },
       fontSize: {
        sm: ['14px', '16px'],
      },
        screens: {
          sm: "480px",
          md: "948px",
          lg: "1419px",
          xl:"1441px"
        },
      colors: {
         main: {
          white:'#FFFDF8',
          black: '#252525',
          gray: "#252525CC",
          gray2:'#939393',
          green: "#03FF9D",
         },
      },
      fontFamily: {
        'radwave': ['radwave', 'sans-serif'],
    },
    },
  },
  plugins: [],
};


