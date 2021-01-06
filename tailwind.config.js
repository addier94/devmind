module.exports = {
  theme: {
    extend: {
      fill: (theme) => ({
        white: theme('colors.white'),
      }),
      backgroundColor: (theme) => ({
        light: theme('colors.gray-main.300'),
        dark: theme('colors.blue-main.900'),
      }),
      colors: {
        'gray-main': {
          300: '#EAEDF2',
        },
        'blue-main': {
          800: '#EAEDF2',
          900: '#2D2D3A',
        },
      },
    },
  },
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
  // darkMode: 'class',
}
