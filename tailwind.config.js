/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'green-bauzan': '#1F271B',
        'blue-bauzan': '#95B2B0'
      },
      fontFamily: {
        'Flipahaus': ['Flipahaus'],
        'Glamore': ['Glamore'],
        'Montserrat': ['Montserrat'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

