const fs = require("fs");
const gracefulFs = require("graceful-fs");
gracefulFs.gracefulify(fs);
const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "../app"),
  devtool: "source-map",
  entry: {
    app: ["babel-polyfill", "./src/main/js/index.js", "./src/main/res/scss/main.scss"]
  },
  target: "electron-renderer",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../app/build"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images/"
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new MinifyPlugin(),
    new ExtractTextPlugin("main.css"),
    new CopyWebpackPlugin([
      {
        from: "./src/main/app.js",
        to: path.join(__dirname, "../app/build")
      },
      {
        from: "./src/main/index.html",
        to: path.join(__dirname, "../app/build")
      },
      {
        from: "./src/main/splash.html",
        to: path.join(__dirname, "../app/build")
      },
      {
        from: "./src/main/logo.png",
        to: path.join(__dirname, "../app/build")
      },
      {
        from: "./src/main/server",
        to: path.join(__dirname, "../app/build/server")
      },
      {
        from: "./src/main/themes",
        to: path.join(__dirname, "../app/build/themes")
      }
    ])
  ]
};
