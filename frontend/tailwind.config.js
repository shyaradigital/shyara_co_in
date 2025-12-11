/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#F8F9FB',
        foreground: '#0D0D0D',
        primary: {
          DEFAULT: '#0D0D0D',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#4A4A4A',
          foreground: '#0D0D0D',
        },
        accent: {
          DEFAULT: '#6E3AFF',
          foreground: '#FFFFFF',
        },
        'accent-deep': {
          DEFAULT: '#5228D9',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#4A4A4A',
          foreground: '#0D0D0D',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0D0D0D',
        },
        'yellow-soft': {
          DEFAULT: '#F7E46A',
          foreground: '#0D0D0D',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Playfair Display', 'serif'],
        brand: ['Tan Pardiso', 'var(--font-display)', 'Playfair Display', 'serif'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 1.6rem + 2vw, 3rem)',
        'fluid-4xl': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',
        'fluid-5xl': 'clamp(3rem, 2.4rem + 3vw, 5rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow-purple': '0 0 20px rgba(110, 58, 255, 0.3)',
        'glow-purple-lg': '0 0 40px rgba(110, 58, 255, 0.4)',
        'glow-purple-sm': '0 0 10px rgba(110, 58, 255, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(110, 58, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #6E3AFF 0%, #5228D9 100%)',
        'gradient-purple-soft': 'radial-gradient(circle at top, rgba(110, 58, 255, 0.15), transparent 60%)',
        'gradient-purple-horizontal': 'linear-gradient(90deg, #6E3AFF 0%, #5228D9 100%)',
        'gradient-mesh-purple': 'radial-gradient(circle at 20% 30%, rgba(167, 139, 250, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(82, 40, 217, 0.4) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(110, 58, 255, 0.2) 0%, transparent 70%)',
        'spotlight-glow': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(110, 58, 255, 0.15) 0%, transparent 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'breathe': 'breathe 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse-strong': 'glowPulseStrong 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(110, 58, 255, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(110, 58, 255, 0.6)',
          },
        },
        breathe: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'scale(1.15)',
            opacity: '0.5',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        glowPulseStrong: {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(110, 58, 255, 0.4), 0 0 60px rgba(110, 58, 255, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 50px rgba(110, 58, 255, 0.6), 0 0 100px rgba(110, 58, 255, 0.3)',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

