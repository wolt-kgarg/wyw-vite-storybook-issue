import type { StorybookConfig } from "@storybook/react-vite";
import { InlineConfig, mergeConfig } from "vite";
import wyw from "@wyw-in-js/vite";
import Inspect from "vite-plugin-inspect";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    const mergedConfig: InlineConfig = mergeConfig(config, {
      build: {
        sourcemap: true,
      },
      plugins: [
        Inspect({
          build: true,
          outputDir: ".vite-inspect",
        }),
        wyw({
          displayName: true,
          sourceMap: true,

          babelOptions: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        }),
      ],
    });
    return mergedConfig;
  },
};
export default config;
