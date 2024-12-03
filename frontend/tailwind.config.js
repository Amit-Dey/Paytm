/** @type {import('tailwindcss').Config} */

import { colors } from 'tailwindcss/colors'

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './src/App.jsx',
    './index.html',
  ],
  darkMode: "selector",
  theme: {

    extend: {
      colors: {
        primary: {
          light: '#3F72AF',
          DEFAULT: '#00ADB5',
          dark: '#00ADB5',
        },
        secondary: {
          light: '#DBE2EF',
          DEFAULT: '#393E46',
          dark: '#393E46',
        },
        background: {
          light: '#F9F7F7',
          DEFAULT: '#222831',
          dark: '#222831',
        },
        text: {
          light: '#112D4E',
          DEFAULT: '#EEEEEE',
          dark: '#EEEEEE',
        },
        ...colors
      },
    },
  },
  plugins: [],
}

