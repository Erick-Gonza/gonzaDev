/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#160d18',
        darkblue: '#23145b',
        blue: '#09456c',
        darkcyan: '#026f6e',
        cyan: '#1ca39e',
      },
      fontFamily: {
        asap: ['Asap', 'sans-serif'],
      },
    },
    plugins: [],
  },
}
