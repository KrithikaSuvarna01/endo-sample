/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'custom-gradient': 'linear-gradient(243.18deg, #EAC0D5 0%, #DBDCFA 50.5%, #E1CBE7 100%)',
      },
      colors:{
        'login-bg':'hsla(0, 0%, 100%, 1)',
        'main-text':'hsla(220, 46%, 48%, 1)',
        'something':'hsla(0, 0%, 29%, 1)'
      },
      boxShadow:{
        "login": '0px 4px 18px 0px rgba(75, 70, 92, 0.1)',
      }
    },
  },
  plugins: [],
};
