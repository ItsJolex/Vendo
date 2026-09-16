/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        none: '0px',
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Montserrat"', 'sans-serif'],
        sans: ['"Montserrat"', '"Inter"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace', 'Courier'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 22s linear infinite',
      },
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
};
