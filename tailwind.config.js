/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          black: '#050729',
          gray: {
            100: '#EDEEF2',
            200: '#989AAE',
          },
          purple: {
            100: '#F3F0F8',
            500: '#5313CA',
          },
          yellow: {
            500: '#FF9736',
          },
          aqua: {
            100: '#00e6e6',
            200: '#00b3b3',
            300: '#008080',
            400: '#004d4d',
            500: '#001919',
          },
        },
      },
    },
  },
  plugins: [],
};
