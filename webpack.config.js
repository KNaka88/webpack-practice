const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),  // output path: you need to write absolute path with a help of path
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
      },
      {
        // loader and use are interchangeable and we should use 'use' in general
        // however ExtractTextPlugin uses legacy, 'loader'
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/,
      }
    ]
  },
  // make css files outside of webpack
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
