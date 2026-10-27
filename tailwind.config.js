/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blood: {
          950: '#0a0002',
          900: '#1a0005',
          800: '#35000a',
          700: '#5c0012',
          600: '#8b0000',
          500: '#cc0000',
          400: '#ff0033',
          300: '#ff3355',
          200: '#ff6677',
          100: '#ffccd4',
        },
        mound: {
          black: '#050505',
          dark: '#0d0d0d',
          zinc: '#171717',
          silver: '#cccccc',
          glitter: '#e6f0ff',
        }
      },
      fontFamily: {
        gothic: ['"UnifrakturCook"', '"Pirata One"', 'serif'],
        pirata: ['"Pirata One"', 'serif'],
        creepster: ['"Creepster"', 'cursive'],
        terminal: ['"VT323"', '"Courier New"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'flicker': 'flicker 2s infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'glitch': 'glitch 1s infinite linear alternate-reverse',
        'blood-drip': 'bloodDrip 3s infinite ease-in-out',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(255, 0, 51, 0.8))' },
          '50%': { filter: 'drop-shadow(0 0 25px rgba(255, 0, 0, 1))' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.9' },
          '50%': { transform: 'scale(1.3) rotate(45deg)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
