module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.brand.500'),
              '&:hover': {
                color: theme('colors.red.500'),
              },
            },

            h1: {
              color: theme('colors.gray.300'),
            },
            h2: {
              color: theme('colors.gray.300'),
            },
            h3: {
              color: theme('colors.gray.300'),
            },
            h4: {
              color: theme('colors.gray.300'),
            },
            h5: {
              color: theme('colors.gray.300'),
            },
            h6: {
              color: theme('colors.gray.300'),
            },

            strong: {
              color: theme('colors.gray.300'),
            },

            code: {
              color: theme('colors.gray.300'),
            },

            figcaption: {
              color: theme('colors.gray.500'),
            },
          },
        },
      }),
      colors: {
        brand: {
          100: '#fceeea',
          200: '#fad6d2',
          300: '#f9b4a9',
          400: '#f9826f',
          500: '#ef5a4d',
          600: '#f2362c',
          700: '#d6292a',
          800: '#ac2229',
          900: '#8a1c23',
        },
      },
    },
  },
  variants: {
    extend: {
      // Add hover modifier to fill for SVGs
      fill: ['hover'],
    },
  },
  // Use the @tailwindcss/typography plugin
  plugins: [require('@tailwindcss/typography')],
}
