import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import packageInfo from "./package.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const skipRollUp = env.SKIP_ROLLUP === "true";
  return {
    define: {
      "process.env": process.env,
    },
    publicDir: false,
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "./src"),
        "@ui": path.resolve(__dirname, "./src/ui"),
      },
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, "./src/index.ts"),
        name: packageInfo.name,
        formats: ["es", "cjs"],
      },
      rollupOptions: {
        external: ["react", "react/jsx-runtime", "react-dom", "@mantine/hooks", "@mantine/core"],
        output: {
          globals: {
            react: "react",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "react/jsx-runtime",
          },
        },
      },
    },
    plugins: [
      tsconfigPaths({
        projects: [path.resolve(__dirname, "tsconfig.app.json")],
      }),
      svgr(),
      react(),
      // commonjs(),
      dts({
        tsconfigPath: "./tsconfig.app.json",
        rollupTypes: !skipRollUp,
        copyDtsFiles: true,
      }),
    ],
  };
});
