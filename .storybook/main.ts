import { StorybookConfig } from "@storybook/core-common";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    const resolve = config.resolve;
    if (resolve) {
      resolve.modules = [
        path.resolve(__dirname, ".."),
        "node_modules",
        "styles",
      ];

      resolve.alias = {
        ...resolve.alias,
        "~": path.resolve(__dirname, ".."),
      };
    }

    return config;
  },
};

export default config;
