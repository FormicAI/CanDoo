module.exports = {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      mulish: "'Mulish', sans-serif",
    },
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#07102D',
      dark: '#03213f',
      primary: '#003366',
      secondary: '#d6b36c',
      'body-color': '#003366',
      'gradient-1': '#003366',
      'gradient-2': '#ced2e0',
    },
    screens: {
      sm: '540px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1140px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        'primary-hover': '0px 11px 20px rgba(35, 25, 142, 0.2)',
        'black-hover': '0px 11px 30px rgba(51, 67, 120, 0.4)',
        award: '0px 3px 100px rgba(11, 5, 22, 0.07)',
        testimonial: '0px 5px 50px rgba(178, 152, 236, 0.05)',
        faq: '0px 4px 50px rgba(0, 0, 0, 0.03)',
        'shape-1': '0px 0px 100px rgba(0, 0, 0, 0.03)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
      },
      backgroundHover:{
        'hover': '#c2c7da',
      },
      dropShadow: {
        image: '25px 40px 100px rgba(0, 0, 0, 0.1)',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
