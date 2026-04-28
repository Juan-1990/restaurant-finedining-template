/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdf8ee',
          100: '#f9edcc',
          200: '#f2d98a',
          300: '#ebc14a',
          400: '#e2a820',
          500: '#c88a10',
          600: '#a06a0d',
          700: '#7a4f0f',
          800: '#653f13',
          900: '#563514',
        },
        cream: {
          50:  '#fdfaf4',
          100: '#f8f1e0',
          200: '#f0e0bc',
          300: '#e6cc94',
          400: '#dbb46a',
        },
        charcoal: {
          800: '#1a1714',
          900: '#100f0c',
          950: '#0a0906',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Jost"', 'system-ui', 'sans-serif'],
        accent: ['"Cinzel"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
