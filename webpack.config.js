var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.join(__dirname, './src/public');
var APP_DIR =  path.join(__dirname, './src/app');

var config = {
  devtool: "source-map",
  entry:  APP_DIR + '/index.jsx',
  output: {
    devtoolLineToLine: true,
    sourceMapFilename: "./bundle.js.map",
    pathinfo: true,
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015', 'react']} },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.(png|jpg)$/, loader: 'file-loader?name=src/public/[name].[ext]'}
    ]
  }
};

module.exports = config;