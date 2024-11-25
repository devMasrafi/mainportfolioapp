/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'Roboto': ['"Roboto", serif']
    },
    extend: {
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'mainColor': '#F0F3E5',
        'mainWhite': "#FFFFFF",
        'skyblue': '#9EFCF1',
        'darkBlue': '#00364B'
      },
    },
  },
  plugins: [],
};
