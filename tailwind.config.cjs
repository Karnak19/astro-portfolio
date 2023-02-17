/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    "lg:group-hover:text-react",
    "lg:group-hover:text-nestjs",
    "lg:group-hover:text-typescript",
    "lg:group-hover:text-white",
    "lg:group-hover:text-black",
    "lg:group-hover:text-prisma",
    "lg:group-hover:text-graphql",
    "lg:group-hover:bg-typescript",
    "lg:group-hover:bg-white",
    "lg:group-hover:bg-black",
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ["Open Sans Condensed", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
      },
      colors: {
        react: "#61DAFB",
        nestjs: "#E0234E",
        typescript: "#3178C6",
        graphql: "#E10098",
        prisma: "#2D3748",
      },
      animation: {
        "spin-slow": "spin-slow 15s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "50%": { scale: "1 1.8" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
