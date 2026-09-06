/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: '#e8e6f5',
          100: '#c9c4e8',
          200: '#9b94cf',
          300: '#6d63b5',
          400: '#3e329b',
          500: '#1e1450',
          600: '#150f3a',
          700: '#0f0a2a',
          800: '#0a0720',
          900: '#050310',
          950: '#020108',
        },
        blush: {
          50: '#fff5f7',
          100: '#ffe4ea',
          200: '#ffc9d6',
          300: '#ffa3bc',
          400: '#ff6f93',
          500: '#f5426f',
          600: '#d92755',
          700: '#b31942',
          800: '#8a1234',
          900: '#5e0c24',
        },
        gold: {
          300: '#f5d98b',
          400: '#e8c273',
          500: '#d4a94f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-down': 'fadeDown 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-heart': 'floatHeart 8s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatHeart: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-100vh) rotate(20deg)', opacity: '0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 66, 111, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(245, 66, 111, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
};
