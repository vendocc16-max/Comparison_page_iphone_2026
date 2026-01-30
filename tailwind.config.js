/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Neutral color palette (Tele2-compatible)
      colors: {
        // Neutral grays - replaces Apple grays
        gray: {
          50: '#f9f9f9',
          100: '#f3f3f3',
          200: '#e5e5e5',
          300: '#d0d0d0',
          400: '#808080',
          500: '#666666',
          600: '#404040',
          700: '#333333',
          800: '#1a1a1a',
          900: '#000000',
        },
        // Primary brand blue - for interactive elements
        primary: {
          DEFAULT: '#0066cc',
          hover: '#0052a3',
          light: '#e6f0ff',
        },
        // Accent colors
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
      },
      // Clean sans-serif font stack
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      // Font sizes (keep - not Apple-specific)
      fontSize: {
        'headline': ['48px', { lineHeight: '1.1', fontWeight: '600' }],
        'subheadline': ['28px', { lineHeight: '1.14', fontWeight: '600' }],
        'body-large': ['21px', { lineHeight: '1.381', fontWeight: '400' }],
        'body': ['17px', { lineHeight: '1.47', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.43', fontWeight: '400' }],
        'small': ['12px', { lineHeight: '1.33', fontWeight: '400' }],
      },
      // Spacing (keep - generic)
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      // Max widths (rename)
      maxWidth: {
        'content': '980px',
        'wide': '1440px',
      },
      // Border radius (rename)
      borderRadius: {
        'lg': '18px',
        'md': '12px',
        'xl': '28px',
      },
      // Transitions (keep)
      transitionDuration: {
        'smooth': '400ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      // Shadows (rename)
      boxShadow: {
        'base': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'lg': '0 8px 32px rgba(0, 0, 0, 0.16)',
      },
      // Animations (keep)
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-in-out',
      },
    },
  },
  plugins: [],
};
