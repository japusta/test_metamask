/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      fontSize: {
        'h1': '36px',
        'h2': '30px',
        'High': '32px',
        'Med': '28px',
        'h3': '24px',
        'body': '16px',
        'body1': '18px',
        'body0': '14px',
      },
      colors: {
        darkBackground: '#171719',
        
        orange:{
          darkOrange: '#E75626',
          hoverOrange: '#BE3B10',
        },
        grey:{
          greyDef: '#D2C4C4',
          darkGray: '#5A5A5A',
          fewBlack: '#323232',
          lightGray: '#[#C7C7C7]',
        },
        
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        avenir: ['AvenirNextCyr', 'sans-serif'], // Добавляем шрифт Avenir Next Cyr
      },
    },
  },
  plugins: [],
}

