/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6a00ff",

          "secondary": "#f9b500",

          "accent": "#00fceb",

          "neutral": "#08051c",

          "base-100": "#fafeff",

          "info": "#3ca1ff",

          "success": "#54ec92",

          "warning": "#b55300",

          "error": "#d3013c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

