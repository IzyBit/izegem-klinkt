/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    // I know this is wrong, this project was made a long time ago and I didn't know how to use tailwindcss properly

    screens: {
      "sm": "1px", // applies styles for screens wider than or equal to 640px

      "md": "768px",
      // => @media (min-width: 768px) { ... }

      "lg": "992px",
      // => @media (min-width: 992px) { ... }

      "xl": "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1536px", // Added 2xl breakpoint
    },
    extend: {
      colors: {
        primary: "#bc2b26",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    },
  },
  plugins: [],
};
