/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // make sure this covers your files
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-60px) translateX(40px)' },
        },
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
        'float-slow': 'float 25s ease-in-out infinite',
        'float-reverse': 'float 25s ease-in-out infinite reverse',
        'float-long': 'float 30s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}