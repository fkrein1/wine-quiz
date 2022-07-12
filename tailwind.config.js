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
        },
      },
    },
  },
  plugins: [],
};
