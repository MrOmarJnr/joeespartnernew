/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'lg': '1135px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      'md': {'max': '1135px'},
      'ml': {'max': '767px'},
      'mp': {'max': '639px'},
      'xs': {'max': '474px'},
    },
    container: {
      center: true,
    },
    fontFamily: {
      microsoftNewTaiLue: ['var(--font-microsoft-new-tai-lue)'],
      robotoCondensed : ['var(--font-roboto-condensed)']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#ffffff',
        'DBDBDB': '#DBDBDB',
        'E8E8E8': '#E8E8E8'
      },
      mute: '#bbb',
      black: {
        DEFAULT: '#000000',
      },
      blue: {
        '020A29': '#020A29',
        '0B112B': '#0B112B',
        '131A37': '#131A37',
        '182146': '#182146',
        'main-blue': '#00a1ff',
        '5E82B9': '#5E82B9',
      },
      yellow: {
        'EFA640': '#ffcd0e',
      },
      green: {
        '59DB35': '#ffcd0e',
        '157F70': '#157F70',
        '3ABEB5': '#3ABEB5'
      },
      red: {
        error: '#E11D48',
      },
      'light-beige': '#b6b0a4', // Added color
      'off-white': '#dcd4c9',   // Added color
    },
    extend: {
      fontSize: {
        p: '1.25rem',
        10: '1rem',
        11: '1.1rem',
        12: '1.2rem',
        13: '1.3rem',
        14: '1.4rem',
        15: '1.5rem',
        16: '1.6rem',
        17: '1.7rem',
        18: '1.8rem',
        19: '1.9rem',
        20: '2rem',
        21: '2.1rem',
        22: '2.2rem',
        23: '2.3rem',
        24: '2.4rem',
        25: '2.5rem',
        26: '2.6rem',
        27: '2.7rem',
        28: '2.8rem',
        29: '2.9rem',
        30: '3rem',
        31: '3.1rem',
        32: '3.2rem',
        33: '3.3rem',
        34: '3.4rem',
        35: '3.5rem',
        36: '3.6rem',
        37: '3.7rem',
        38: '3.8rem',
        39: '3.9rem',
        40: '4rem',
        45: '4.5rem',
        50: '5rem',
        55: '5.5rem',
        60: '6rem',
        65: '6.5rem',
        70: '7rem',
        75: '7.5rem',
        80: '8rem',
        85: '8.5rem',
        90: '9rem',
        95: '9.5rem',
        100: '10rem',
        105: '10.5rem',
        110: '11rem',
        115: '11.5rem',
        120: '12rem',
        125: '12.5rem',
        130: '13rem',
        135: '13.5rem',
        140: '14rem',
        145: '14.5rem',
        150: '15rem',
      },
      keyframes: {
        scaleUpDown1: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        scaleUpDown2: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        scaleUpDown3: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.3)' },
        },
        scaleUpDown4: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.4)' },
        },
        scaleUpDown5: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        },
        gradientShift: { // New Keyframe
          '0%': { 'background-position': '0% center' },
          '50%': { 'background-position': '100% center' },
          '100%': { 'background-position': '0% center' },
        },
      },
      backgroundImage: { // New Background Images
        'gradient-custom': 'linear-gradient(to right, #b6b0a4, #dcd4c9)',
        'gradient-animated': 'linear-gradient(to right, #b6b0a4, #dcd4c9, #b6b0a4)',
      },
      backgroundSize: { // New Background Size
        '3xl': '300% 100%',
      },
      animation: { // New Animation
        gradientShift: 'gradientShift 10s linear infinite',
      },
    },
  },
  plugins: [],
};