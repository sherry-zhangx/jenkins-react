/*
 * @Descripttion:
 * @version:
 * @Author: shirley
 * @Date: 2022-06-30 14:24:08
 * @LastEditors: shirley
 * @LastEditTime: 2022-07-07 16:47:02
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "production",
  entry: "./app/index.js",
  output: {
    //path.resolve方法解析提供的路径的绝对路径
    // path: path.resolve("./dist/"),
    // path: path.join(__dirname, "..", "./dist/"),
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
    // publicPath: "/",
  },
  devServer: {
    open: true,
    hot: true,
    port: 5000,
    compress: true,
    // contentBase: "./src",
  },
  // loaders: [
  //   {
  //     test: /\.js$/,
  //     exclude: /node_modules/,
  //     loaders: "babel-loader",
  //     query: {
  //       presets: ["es2015", "react"],
  //     },
  //   },
  // ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./app/index.html",
    }),
  ],
};
