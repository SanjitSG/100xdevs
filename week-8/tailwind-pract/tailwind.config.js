/** @type {import('tailwindcss').Config} */
export default {
  content: [flowbite.content(), "./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          700: "#146eb4",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
