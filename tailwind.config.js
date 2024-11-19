/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow-modal-conta': '5px 5px 45px rgba(220, 220, 220, 0.4), -5px -5px 45px rgba(220, 220, 220, 0.4)',
      },
      backgroundImage: {
        'geracao-energia': "url('./src/assets/images/background-geracao-energia.png')",
        'login': "url('./src/assets/images/background-login.png')",
        'criar-conta': "url('./src/assets/images/background-criar-conta.png')",
<<<<<<< HEAD
        'area-usuario': "url('./src/assets/images/backdround-area-usuario.png')",
=======
        'sobre' : "url('./src/assets/images/background-sobre.png')"
>>>>>>> 778d8bfd252780e233377f6886214a5bcf08d739
      },
    },
  },
  plugins: [],
}

