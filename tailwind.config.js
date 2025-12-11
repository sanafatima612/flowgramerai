/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        border: "border 6s linear infinite",
      },
      keyframes: {
        border: {
          to: { "--border-angle": "360deg" },
        },
      },
       keyframes: {
    slide: {
      "0%": { transform: "translateX(0)" },
      "25%": { transform: "translateY(10px) translateX(10px)" },
      "50%": { transform: "translateX(0) translateY(20px)" },
      "75%": { transform: "translateY(10px) translateX(-10px)" },
      "100%": { transform: "translateX(0)" },
    },
  },
  animation: {
    slide: "slide 5s linear infinite",
  },
    },
  },
  
  plugins: [],
};

export default config;
