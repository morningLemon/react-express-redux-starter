// 'use strict';

const webpack = require('webpack');
const path = require('path');
 
module.exports = {
  // context: path.join(__dirname, './public'),
  entry: {
    public: [ 'babel-polyfill', './public/js/app.jsx' ]
  },

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },

  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
};