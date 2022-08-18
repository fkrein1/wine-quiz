/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Josefin Sans, sans-serif',
      },
      colors: {
        purple: {
          500: '#b580cd',
          600: '#A672BD',
          700: '#763064',
          800: '#662555',
        },
      },
    },
  },
  plugins: [],
};
