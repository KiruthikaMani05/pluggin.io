module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.entry = {
        main: "./src/index.js",
        widget: "./src/widget.js",
      };
      webpackConfig.output.filename = "static/js/[name].js";
      return webpackConfig;
    },
  },
};
