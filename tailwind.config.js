/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#F9A51A",
         },
         fontFamily: {
            title: ["Bebas Neue", "sans-serif"],
            body: ["Montserrat", "sans-serif"],
         },
      },
   },
   plugins: [],
};
