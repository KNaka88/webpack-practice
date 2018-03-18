const path = require('path');

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
        use: ['style-loader', 'css-loader'], // loader applied right from left. Start from css-loader,
        test: /\.css$/,
      }
    ]
  }
};

module.exports = config;
