/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          vibrant: '#187E5F',
          deep: '#0B5844',
          pine: '#00381F',
        },
        silver: {
          light: '#F8FAFC',
          chrome: '#E2E8F0',
          steel: '#CBD5E1',
          metallic: '#94A3B8',
          border: '#64748B',
        },
        canvas: {
          ice: '#F4F7F5',
          card: '#FFFFFF',
        },
        terracotta: {
          DEFAULT: '#C85A32',
          hover: '#A9441E',
          light: '#FBF2EE',
        },
        coral: {
          DEFAULT: '#C85A32',
          hover: '#A9441E',
          glow: '#FBF2EE',
        },
      },
      boxShadow: {
        'neo-pine': '4px 4px 0px 0px #00381F',
        'neo-pine-lg': '6px 6px 0px 0px #00381F',
        'neo-silver': '4px 4px 0px 0px #94A3B8',
        'neo-emerald': '4px 4px 0px 0px #0B5844',
        'neo-terracotta': '4px 4px 0px 0px #00381F',
        'neo-coral': '4px 4px 0px 0px #00381F',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        ticker: 'ticker 25s linear infinite',
      },
    },
  },
  plugins: [],
};