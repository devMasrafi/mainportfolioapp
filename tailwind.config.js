/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
  		sm: '320px',
  		md: '768px',
  		lg: '1280px'
  	},
  	fontFamily: {
  		'RobotoFont': ['Roboto", serif'],
      'RaleWayFont': ['"Raleway", serif']
  	},
    extend: {
      colors: {
        mainColor: '#F0F3E5',
  			skyblue: '#9EFCF1',
  			darkBlue: '#00364B',
        DarkBlack: '#00171F'
      },
    },
  },
  plugins: [],
};
