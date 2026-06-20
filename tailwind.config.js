/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B59455',
        'primary-dark': '#8F6E30',
        'primary-light': '#C3A05F',
        secondary: '#123C78',
        accent: '#C3A05F',
        dark: '#FFFFFF',
        'dark-card': '#F4F6F9',
        'dark-border': '#E5E7EB',
        light: '#FFFFFF',
        white: '#072A63',
        gold: {
          100: '#FDFBF7',
          200: '#FAF4E8',
          300: '#F4E9D2',
          400: '#E7D5B0',
          500: '#B59455',
          600: '#C3A05F',
          700: '#8F6E30',
          800: '#6E521F',
          900: '#4D3610',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B59455 0%, #C3A05F 100%)',
        'dark-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F4F6F9 100%)',
        'card-gradient': 'linear-gradient(180deg, transparent 0%, rgba(7, 42, 99, 0.05) 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(244, 246, 249, 0.8) 100%)',
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
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(181, 148, 85, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(181, 148, 85, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(181, 148, 85, 0.15)',
        'gold-lg': '0 8px 48px rgba(181, 148, 85, 0.25)',
        'dark': '0 8px 32px rgba(7, 42, 99, 0.08)',
        'card': '0 20px 60px rgba(7, 42, 99, 0.05)',
        'glow': '0 0 40px rgba(181, 148, 85, 0.1)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}