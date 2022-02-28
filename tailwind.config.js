module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        sans: ['Open Sans'],
        kremlin: ['kremlin'],
      },
      colors: {
        background: '#001B2E',
        coral: '#FB8F67',
        accent: {
          50: '#e5f4ff',
          100: '#b9defa',
          200: '#8cc9f7',
          300: '#61b4f6',
          400: '#419ff5',
          500: '#3386dc',
          600: '#2769aa',
          700: '#1b4b79',
          800: '#0c2d49',
          900: '#000f1a',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
