/*
 * @Descripttion:
 * @version:
 * @Author: shirley
 * @Date: 2022-06-30 14:24:08
 * @LastEditors: shirley
 * @LastEditTime: 2022-06-30 14:37:57
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    //path.resolve方法解析提供的路径的绝对路径
    // path: path.resolve("./dist/"),
    // path: path.join(__dirname, "..", "./dist/"),
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
    // publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
};
