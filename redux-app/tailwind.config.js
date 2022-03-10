module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors:{
        "beau":{
          100:"#DBEBFB",
          200:"#BFDBF7",
          300:"#A4CCF4",
          400:"#80B8EF",
          500:"#6EADED",
          600:"#4999E9",
          700:"#2585E4",
          800:"#1970C8",
          900:"#145CA3"
        },
        "gunmetal":{
          '50': '#D7F3FE',
          '100': '#C3EDFD',
          '200': '#9CE2FB',
          '300': '#75D6FA',
          '400': '#4DCBF8',
          '500': '#26BFF7',
          '600': '#08A4DD',
          '700': '#067CA7',
          '800': '#045471',
          '900': '#022B3A'
        },
        "lavender":{
          100:"#F1F3F9",
          200:"#D4DAED",
          300:"#C6CDE7",
          400:"#A9B5DA",
          500:"#9BA8D4",
          600:"#7E90C8",
          700:"#6277BC",
          800:"#4960AB",
          900:"#3D508F"
        }
      }
    },
  },
  plugins: [],
}
