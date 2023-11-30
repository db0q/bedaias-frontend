/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#5271FF',
      },
    },
    minWidth: {
      '8/12': '78%',
    },
    fontFamily: {
      'dm-serif-display': ['"DM Serif Display"', 'sans'],
      // ... other font families
    },
  },

  plugins: [

    // Other plugins...
  ],
}
