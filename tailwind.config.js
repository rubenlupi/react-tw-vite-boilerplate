/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./index.html", "./src/**/*.{html,tsx, jsx, js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
