module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono'],
        sans: ['IBM Plex Mono'],
      },
      fontSize: {
        tiny: '10px',
      },
      colors: {
        blackish: '#181818',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
