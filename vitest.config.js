import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        coverage: {
            include: ["src/**/*.ts", "src/**/*.js"],
            reporter: ["text", "json", "html"],
            exclude: [
                "**/*.test.js",
                "**/*.test.ts",
                "**/*.spec.js",
                "**/*.spec.ts",
                "**/types.ts",
            ],
            all: true,
        },
    },
});
