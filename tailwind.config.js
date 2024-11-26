/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
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
