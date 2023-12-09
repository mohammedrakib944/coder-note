import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // "blog_dark", // first one will be the default theme
      {
        blog_dark: {
          primary: "#E78109",
          secondary: "#DDCEC6",
          accent: "#242a2c",
          neutral: "#908A82",
          "base-100": "#131E1F",
          "base-200": "#0F1718",
          info: "#58a6ff",
          success: "#00d600",
          warning: "#ef4444",
          error: "#1e232a",
        },
        blog_light: {
        },
      },
    ],
  },
};
export default config;