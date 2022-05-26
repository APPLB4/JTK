module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        JTK : '#28345c',
        second : '#905cf4'
      }
    },
   
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  
}