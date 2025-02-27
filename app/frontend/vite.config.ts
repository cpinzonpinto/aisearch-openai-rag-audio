import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dotenv from "dotenv";

// https://vitejs.dev/config/
dotenv.config({ path: path.resolve(__dirname, "./.env") });

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "./static",
        emptyOutDir: true,
        sourcemap: true
    },
    resolve: {
        preserveSymlinks: true,
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
    server: {
        proxy: {
            // "/realtime": {
            "/api/realtime/ws": {
                target: process.env.VITE_WS_TARGET || "ws://localhost:8765",
                ws: true,
                rewriteWsOrigin: true
            }
        }
    }
});
