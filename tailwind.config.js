/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        sm:     '415px',
        vs:     '350px',
        // md:     '980px'
      },
      colors: {
        "primary-color":    "rgb(43, 36, 88)",
        'seconday-color':   '#fefefef3',
        'box-shadow':       'rgba(0, 0, 0, 0.247)',
        'border-color':      'rgba(177, 177, 177, 0.247)',
        'git-hub':           '#6e5494',
        'twitter':           '#1DA1F2',
        'linkedin':          '#0A66C2',
        'instagram':         '#405DE6',
        'text':              '#ffaa0c',
        'p-text':            '#c2c2c2',
        'banner-text-color': '#5f5f5f8a',
      },

      fontFamily: {
        "rubik": "Rubik",
        "space": "Space Grotesk"
      },

      padding:{
        'a-links': '10px 20px',
        65: '65px',
        20: "20px"
      },

      lineHeight: {
        5:  '5rem',
      },

      fontSize: {
        16: "16px",
        30: '30px',
        45: "45px"
      },

      flexBasis: {
        45: "45%",
        90: '90%',
      },

      width:{
        290: "290px",
        380: '380px',
        400: '400px'
      },

      height: {
        290: "290px",
        380: '380px',
        400: '400px'
      }
    },
  },
  plugins: [],
}

