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
      {
        blog_light: {
          primary: "#ff7200",
          secondary: "#414141",
          accent: "#eee4e4",
          neutral: "#66635f",
          // "base-100": "#131E1F",
          "base-100": "#FFFFFF",
          "base-200": "#fbfbfa",
          info: "#58a6ff",
          success: "#00d600",
          warning: "#ef4444",
          error: "#1e232a",
        },
        blog_dark: {
          primary: "#ff7200",
          secondary: "#DDCEC6",
          accent: "#242a2c",
          neutral: "#908A82",
          // "base-100": "#131E1F",
          "base-100": "#22221f",
          "base-200": "#191814",
          info: "#58a6ff",
          success: "#00d600",
          warning: "#ef4444",
          error: "#1e232a",
        },
      },
    ],
  },
};
export default config;
