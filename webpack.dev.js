const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: "development",
  // Control how source maps are generated
  devtool: "inline-source-map",

  // Spin up a server for quick development
  devServer: {
    static: {
      directory: "./dist", // Путь к собранным файлам
    },
    port: 9000,             // Должен совпадать с URL в e2e тестах
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
  },

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
});
