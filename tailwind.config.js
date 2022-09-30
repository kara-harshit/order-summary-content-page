/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors:{
      paleBlue:'hsl(225, 100%, 94%)',
      brightBlue: 'hsl(245, 75%, 52%)',
      vpaleBlue:'hsl(225, 100%, 98%)',
      Normalblue:'hsl(224, 23%, 55%)',
      darkBlue:'hsl(223, 47%, 23%)',
      white:'#fff'
    },
    extend: {
      backgroundImage:{
        'main_image':"url('./images/pattern-background-desktop.svg')"
      }
    },
  },
  plugins: [],
}
