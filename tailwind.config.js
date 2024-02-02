/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      background: '#121212',
      backgroundGrayTwo: '#1D1D1D',
      white: '#fff',
      grayWhite: '#BBB',
      gray: '#f5f5f5',
      yellow: '#e38616',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

