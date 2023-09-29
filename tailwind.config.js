/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      maxWidth: {
        '8xl': '1400px',
      },
      colors: {
        'primary': colors.orange[600]
      } ,
    }
  },
  darkMode: "class",
  plugins: [nextui(), require('tailwindcss-animated')]
}
