/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f5f8f5',
          '100': '#e8f0e8',
          '200': '#d1e1d1',
          '300': '#acc9ac',
          '400': '#80a880',
          '500': '#5d8a5d',
          '600': '#517b51',
          '700': '#3c593c',
          '800': '#334833',
          '900': '#2b3c2c',
          '950': '#141f15',
        },
      },
    },
  },
  plugins: [],
}