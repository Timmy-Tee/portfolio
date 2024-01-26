/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ["./dist/*.{html,js}"],
  },
  theme: {
    extend: {
      screens:{
        sm:     '415px',
        vs:     '340px',
        // md:     '980px'
      },
      colors: {
        "primary-color":    "#27213C",
        'seconday-color':   '#fefefef3',
        'box-shadow':       'rgba(0, 0, 0, 0.247)',
        'border-color':      'rgba(177, 177, 177, 0.247)',
        'git-hub':           '#6e5494',
        'twitter':           '#1DA1F2',
        'linkedin':          '#0A66C2',
        'instagram':         '#405DE6',
        'whatsapp':         '#128c7e',
        'text':              '#C1292E',
        'p-text':            '#c2c2c2',
        'banner-text-color': '#5f5f5f8a',
        'contact-icon':       'rgb(255, 255, 255)',
        'contact-box-shadow': ' rgba(0, 0, 0, 0.1) 0px 0px 10px',
        'contact-text':         'rgb(45, 46, 50)',
        'portfolio-text':     '#22333B',
      },

      fontFamily: {
        "rubik": "Rubik",
        "space": "Space Grotesk"
      },

      padding:{
      'a-links': '10px 20px',
      'project-links': '15px 30px',
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
      transitionProperty: {
        'smooth': "4s all ease-in-out"
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
  plugins: [
    require('taos/plugin')
  ],

  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

