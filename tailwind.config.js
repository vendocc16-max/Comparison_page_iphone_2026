/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Apple-like color palette
      colors: {
        apple: {
          gray: {
            50: '#fbfbfd',
            100: '#f5f5f7',
            200: '#e8e8ed',
            300: '#d2d2d7',
            400: '#86868b',
            500: '#6e6e73',
            600: '#424245',
            700: '#333336',
            800: '#1d1d1f',
            900: '#000000',
          },
          blue: {
            DEFAULT: '#0071e3',
            hover: '#0077ed',
            light: '#2997ff',
          },
          green: '#34c759',
          red: '#ff3b30',
        },
      },
      // Apple-like font family
      fontFamily: {
        sans: [
          'SF Pro Display',
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      // Apple-like font sizes
      fontSize: {
        'headline': ['48px', { lineHeight: '1.1', fontWeight: '600' }],
        'subheadline': ['28px', { lineHeight: '1.14', fontWeight: '600' }],
        'body-large': ['21px', { lineHeight: '1.381', fontWeight: '400' }],
        'body': ['17px', { lineHeight: '1.47', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.43', fontWeight: '400' }],
        'small': ['12px', { lineHeight: '1.33', fontWeight: '400' }],
      },
      // Apple-like spacing
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      // Apple-like max widths
      maxWidth: {
        'apple-content': '980px',
        'apple-wide': '1440px',
      },
      // Apple-like border radius
      borderRadius: {
        'apple': '18px',
        'apple-sm': '12px',
        'apple-lg': '28px',
      },
      // Apple-like transitions
      transitionDuration: {
        'apple': '400ms',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      // Apple-like shadows
      boxShadow: {
        'apple': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'apple-lg': '0 8px 32px rgba(0, 0, 0, 0.16)',
      },
      // Animations
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
