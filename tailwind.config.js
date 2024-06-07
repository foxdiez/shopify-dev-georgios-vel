/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      fontFamily: {
        'roboto-bold': ['Roboto-bold', 'system-ui'],
        'roboto': ['Roboto', 'system-ui'],
      },
      colors: {
        'transparent': 'transparent',
        'primary-blue': '#252FB2',
        'secondary-white': '#F9F8FD',
        'grey': {
          100: '#5B5B5B',
          200: '#282828',
        },
      },
      animation: {
        bounceX: 'bounceX 1.5s ease-in-out infinite',
      },
      keyframes: {
        bounceX: {
          '0%, 100%': { 
            transform: 'translateX(0)',
            animation_timing_function: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateX(-25%)',
            animation_timing_function: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        }
      }
    },
  },
  plugins: [],
}

