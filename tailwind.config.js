module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {   
        zomatoCol: 
        {
          50: '#ffe5e7',
          100: '#fabac0',
          200: '#f18f96',
          300: '#e9626d',
          400: '#e23744',
          500: '#c81d2a',
          600: '#9d152a',
          700: '#700d16',
          800: '#46060c',
          900: '#1e0002',
        },
        edCol: 
          {
            50: '#e4f4ff',
            100: '#bddbf5',
            // 200: '#000000a4',
            200: '#2B3148',
            300: '#6aace3',
            400: '#4494db',
            500: '#2e7ac2',
            600: '#235f97',
            700: '#17446d',
            800: '#0a2942',
            900: '#000f1a',
          },
          mealCol: 
          {
            // 900: '#0000a4',
            // 100: '#bddbf5',
            // 200: '#000000a4',
            // 200: '#2B3148',
            // 300: '#6aace3',
            // 400: '#4494db',
            // 500: '#2e7ac2',
            // 600: '#235f97',
            // 700: '#17446d',
            // 800: '#0a2942',
            // 900: '#000f1a',
          }
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
//websites
//colorhunt website -> to get color parlet
//smart swatch netlify -> converts your color parlet into json object

/* <h2> className='bg-edhuvacol-500'</h2>
module.exports = {

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        edhuvacol: {
          50: '#fdfce0',
          100: '#fdfce0',
          200: '#fdfce0',
          100: '#fdfce0',
          ....
        }
      }
    },
  }
}
*/
