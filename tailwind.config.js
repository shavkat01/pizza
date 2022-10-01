/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xsm': '400px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'brand-btn': '#70C05B',
      'main-color': '#FF6633',
      'body-color': '#FBF8EC',
      'white': '#ffffff',
      'like-bg': '#F9F8F8',
      'muted': '#BFBFBF',
      'muted-btn': '#F3F2F1',
      'muted-text': '#606060',
      'offer-card1': '#F5C6AA',
      'offer-card2': '#E5FFDE',
      'black': '#000000',
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
}
