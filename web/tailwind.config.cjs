/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundColor: {
        base: '#F4F4F5',
        aqua: '#99F6E4',
        darkBase: '#E4E4E7',
        cleanGreen: '#6EE7B7'
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      
    },
  },
  plugins: [],
}
