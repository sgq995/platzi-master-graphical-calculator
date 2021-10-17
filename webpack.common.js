const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    filename: process.env.NODE_ENV === 'production' 
        ? '[name].[contenthash].bundle.js' 
        : '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      title: 'Calculator'
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ],
  },
};
