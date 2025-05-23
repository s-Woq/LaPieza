module.exports = {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx}",
      "./public/**/*.html"
    ],
    theme: {
      extend: {
        fontFamily: {
          Lexend: ["var(--font-Lexend)", 'sans-serif'],
          Rubik: ["var(--font-Rubik)", 'arial'],
      },
    },
    plugins: [
      require('@tailwindcss/typography')
    ],
  }}