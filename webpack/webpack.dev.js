const ReactRefreshWebpackPlugin = require("reacr-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: { directory: path.resolve(__dirname, "..", "./build") },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
};
