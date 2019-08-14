const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/"
  },

  // Enable sourcemaps for debugging webpack"s output.
  devtool: "source-map",

  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a ".ts" or ".tsx" extension will be handled by "awesome-typescript-loader".
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "src/index.html"
    })
  ]
}
