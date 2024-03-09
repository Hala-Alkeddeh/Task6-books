/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'md':'992px',
      'lg':'1280px',
    },
    extend: {
      colors:{
        'primary':'#937DC2',
        'violet':'#C689C6',
        'primary-100':'#937DC299',
      },
      width:{
        'w-185':'185px',
        'w-116':'116px',
        'w-150':'150px',
      },
      fontSize:{
        'font-28':'28px',
      },
      maxWidth:{
        '550':'550px',
      },
      dropShadow:{
        'white':'0 25px 25px #e5e7eb52',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
  }

