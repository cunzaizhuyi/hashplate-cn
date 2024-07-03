import * as path from "path";
import dts from "vite-plugin-dts";
import { defineConfig, UserConfig } from "vite";

const alias = {
    "@": path.resolve(__dirname, "src")
};

export default defineConfig({
    build: {
        target: "esnext",
        lib: {
            entry: "src/index.ts",
            fileName: "index",
            name: "hashplate"
        }
    },
    plugins: [dts()],
    resolve: {
        alias
    }
});
