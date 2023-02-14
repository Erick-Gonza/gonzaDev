/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#06203f',
        secondary: '#c2a345',
        tertiary: '#b1acab',
        primaryVariant: '#DEDBD2',
      },
    },
  },
  plugins: [],
}
