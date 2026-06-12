/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D97706',
        'primary-dark': '#B45309',
        'primary-light': '#F59E0B',
        secondary: '#0F172A',
        accent: '#F59E0B',
        dark: '#020617',
        'dark-card': '#0A1628',
        'dark-border': '#1E3A5F',
        light: '#F8FAFC',
        gold: {
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
        'dark-gradient': 'linear-gradient(135deg, #020617 0%, #0F172A 100%)',
        'card-gradient': 'linear-gradient(180deg, transparent 0%, rgba(2,6,23,0.9) 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(2,6,23,0.95) 0%, rgba(15,23,42,0.85) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(217, 119, 6, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(217, 119, 6, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(217, 119, 6, 0.3)',
        'gold-lg': '0 8px 48px rgba(217, 119, 6, 0.4)',
        'dark': '0 8px 32px rgba(2, 6, 23, 0.8)',
        'card': '0 20px 60px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 40px rgba(217, 119, 6, 0.2)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}