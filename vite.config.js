import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      defineConfig: {
        theme: {
          extend: {
            colors: {
              primary: "#4F46E5",
              secondary: "#10B981",
              dark: "#1F2937",
              light: "#F9FAFB",
            },
          },
        },
      },
    }),
  ],
});
