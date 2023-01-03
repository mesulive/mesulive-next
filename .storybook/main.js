const path = require("path");

module.exports = {
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
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-env"),
      require.resolve("@babel/preset-typescript"),
      [
        require.resolve("@babel/preset-react"),
        {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      ],
    ];

    config.module.rules[0].use[0].options.plugins = [
      ...config.module.rules[0].use[0].options.plugins,
      "@emotion/babel-plugin",
    ];

    const resolve = config.resolve;
    if (resolve) {
      resolve.modules = [
        path.resolve(__dirname, ".."),
        "node_modules",
        "styles",
      ];

      resolve.alias = {
        ...resolve.alias,
        base: "/mesulive_next/",
        "~": path.resolve(__dirname, ".."),
      };
    }

    return config;
  },
};
