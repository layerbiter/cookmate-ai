/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#4DEEEA',
          purple: '#B026FF',
          pink: '#FF2EB2',
        },
      },
      boxShadow: {
        neon: '0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.blue)',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.blue)' },
          '50%': { boxShadow: '0 0 10px theme(colors.neon.purple), 0 0 30px theme(colors.neon.purple)' },
        }
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}