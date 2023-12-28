/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom fonts and enjoy.
        'Poppins': ["Poppins", "Sans-serif"],
        'Montserrat': ["Montserrat", "Sans-serif"],
        'NatoSarif': ["Noto Serif", "serif"],
        'Style': ['Style Script', 'cursive'],
      },
      screens: {
        'mb': '300px',
        'tb': '500px',
        'md': '750px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
  screens: {
    mb: '300px',

    tb: '500px',

    md: '750px',
    // => @media (min-width: 768px) { ... }

    lg: '1024px',
    // => @media (min-width: 1024px) { ... }

    xl: '1280px',
    // => @media (min-width: 1280px) { ... }
  },
}

