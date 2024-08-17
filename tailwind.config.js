/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':'Raleway'
      },
      colors:{
        primary:'#0E1F51',
        secondary:'#FF3E54',
        accent:'#ffdfe3',
      },
      backgroundImage:{
        'quote':"url('/assets/quote.png)",
      }
    },
  },
  plugins: [],
}

