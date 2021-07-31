const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      brand: {
        DEFAULT: 'rgb(104, 211, 145)',
        dark: 'rgb(82, 168, 115)',
      },
      primary: {
        DEFAULT: 'rgb(26, 32, 44)',
        light: 'rgba(44, 54, 74)',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      'xs': '.85rem',
      'sm': '1rem',
      'tiny': '1.4rem',
      'base': '2rem',
      'lg': '2.4rem',
      'xl': '3.0rem',
      '2xl': '3.4rem',
      '3xl': '3.8rem',
      '4xl': '4.2rem',
      '5xl': '5rem',
      '6xl': '6rem',
      '7xl': '7rem',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
