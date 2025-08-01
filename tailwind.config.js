/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Color Palette based on psychological principles from Design Report
      colors: {
        // Primary Palette - Trust & Serenity (muted, mid-tone blue with warmth)
        primary: {
          50: '#f0f4ff',   // Very light blue for backgrounds
          100: '#e0e9ff',  // Light blue for subtle highlights
          200: '#c7d6ff',  // Soft blue for hover states
          300: '#a3b8ff',  // Medium blue for borders
          400: '#7b91ff',  // Main blue for primary actions
          500: '#5b6bff',  // Primary brand blue (trust & serenity)
          600: '#4a56e8',  // Darker blue for active states
          700: '#3f47c7',  // Dark blue for text
          800: '#353ba3',  // Very dark blue for headings
          900: '#2f3482',  // Darkest blue for emphasis
        },
        // Secondary Color - Growth & Positivity (soft, muted green)
        secondary: {
          50: '#f0fdf4',   // Very light green for backgrounds
          100: '#dcfce7',  // Light green for subtle highlights
          200: '#bbf7d0',  // Soft green for hover states
          300: '#86efac',  // Medium green for borders
          400: '#4ade80',  // Main green for positive states
          500: '#22c55e',  // Secondary brand green (growth & positivity)
          600: '#16a34a',  // Darker green for active states
          700: '#15803d',  // Dark green for text
          800: '#166534',  // Very dark green for headings
          900: '#14532d',  // Darkest green for emphasis
        },
        // Neutral Foundation - Breathing Room & Calm
        neutral: {
          50: '#fafafa',   // Off-white for main backgrounds
          100: '#f5f5f5',  // Light grey for subtle backgrounds
          200: '#e5e5e5',  // Light grey for borders
          300: '#d4d4d4',  // Medium grey for dividers
          400: '#a3a3a3',  // Grey for secondary text
          500: '#737373',  // Grey for body text
          600: '#525252',  // Dark grey for headings
          700: '#404040',  // Very dark grey for emphasis
          800: '#262626',  // Dark grey for dark mode text
          900: '#171717',  // Darkest grey for dark mode backgrounds
        },
        // Accent Colors - Guiding Action & Communicating Urgency
        accent: {
          50: '#fff7ed',   // Very light orange for backgrounds
          100: '#ffedd5',  // Light orange for subtle highlights
          200: '#fed7aa',  // Soft orange for hover states
          300: '#fdba74',  // Medium orange for borders
          400: '#fb923c',  // Main orange for primary actions
          500: '#f97316',  // Accent orange (warm, optimistic)
          600: '#ea580c',  // Darker orange for active states
          700: '#c2410c',  // Dark orange for text
          800: '#9a3412',  // Very dark orange for headings
          900: '#7c2d12',  // Darkest orange for emphasis
        },
        // Warning/Gap Colors - Informative, Not Alarming
        warning: {
          50: '#fef2f2',   // Very light red for backgrounds
          100: '#fee2e2',  // Light red for subtle highlights
          200: '#fecaca',  // Soft red for hover states
          300: '#fca5a5',  // Medium red for borders
          400: '#f87171',  // Main red for warnings
          500: '#ef4444',  // Warning red (muted, not alarming)
          600: '#dc2626',  // Darker red for active states
          700: '#b91c1c',  // Dark red for text
          800: '#991b1b',  // Very dark red for headings
          900: '#7f1d1d',  // Darkest red for emphasis
        },
        // Success/Completion Colors - Positive Reinforcement
        success: {
          50: '#f0fdf4',   // Very light green for backgrounds
          100: '#dcfce7',  // Light green for subtle highlights
          200: '#bbf7d0',  // Soft green for hover states
          300: '#86efac',  // Medium green for borders
          400: '#4ade80',  // Main green for success states
          500: '#22c55e',  // Success green (brighter than secondary)
          600: '#16a34a',  // Darker green for active states
          700: '#15803d',  // Dark green for text
          800: '#166534',  // Very dark green for headings
          900: '#14532d',  // Darkest green for emphasis
        },
      },
      // Typography Scale - Humanist Sans-serif for approachability
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'], // Humanist sans-serif
        'display': ['Inter', 'system-ui', 'sans-serif'], // For headings
        'body': ['Inter', 'system-ui', 'sans-serif'], // For body text
      },
      fontSize: {
        // Modular scale (1.25 ratio) for harmonious proportions
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1' }],           // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
      },
      // Spacing System - 8pt grid for consistency
      spacing: {
        '0.5': '0.125rem',  // 2px
        '1': '0.25rem',     // 4px
        '1.5': '0.375rem',  // 6px
        '2': '0.5rem',      // 8px
        '2.5': '0.625rem',  // 10px
        '3': '0.75rem',     // 12px
        '3.5': '0.875rem',  // 14px
        '4': '1rem',        // 16px
        '5': '1.25rem',     // 20px
        '6': '1.5rem',      // 24px
        '7': '1.75rem',     // 28px
        '8': '2rem',        // 32px
        '9': '2.25rem',     // 36px
        '10': '2.5rem',     // 40px
        '11': '2.75rem',    // 44px
        '12': '3rem',       // 48px
        '14': '3.5rem',     // 56px
        '16': '4rem',       // 64px
        '20': '5rem',       // 80px
        '24': '6rem',       // 96px
        '28': '7rem',       // 112px
        '32': '8rem',       // 128px
      },
      // Border Radius - Rounded corners for friendliness
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',   // 2px
        'DEFAULT': '0.25rem', // 4px
        'md': '0.375rem',   // 6px
        'lg': '0.5rem',     // 8px
        'xl': '0.75rem',    // 12px
        '2xl': '1rem',      // 16px
        '3xl': '1.5rem',    // 24px
        'full': '9999px',
      },
      // Box Shadow - Subtle shadows for depth
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'none': 'none',
      },
      // Animation - Smooth, purposeful motion
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      // Z-index scale for proper layering
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'auto': 'auto',
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      },
    },
  },
  plugins: [],
} 