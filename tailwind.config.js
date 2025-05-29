/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f1fe',
          100: '#e2e4fd',
          200: '#c8cdfb',
          300: '#aab1f9',
          400: '#8c8df5',
          500: '#786df0',
          600: '#6a53e4',
          700: '#5a41cd',
          800: '#4a37a6',
          900: '#403385',
          950: '#251e4d',
        },
        secondary: {
          50: '#edfcff',
          100: '#d6f7ff',
          200: '#b5f0ff',
          300: '#83e8ff',
          400: '#48d8ff',
          500: '#1ec1ff',
          600: '#00a1ff',
          700: '#0081df',
          800: '#006cb4',
          900: '#00548a',
          950: '#003256',
        },
        dark: {
          50: '#f6f6f7',
          100: '#e3e3e5',
          200: '#c6c6ca',
          300: '#a2a2a9',
          400: '#7d7d87',
          500: '#636370',
          600: '#4e4e5a',
          700: '#3f3f48',
          800: '#2c2c33',
          900: '#18181c',
          950: '#111114',
        },
        accent: '#ff3cff',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.primary.500"), 0 0 20px theme("colors.primary.500")',
        'neon-hover': '0 0 5px theme("colors.primary.400"), 0 0 25px theme("colors.primary.400"), 0 0 50px theme("colors.primary.500")',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};