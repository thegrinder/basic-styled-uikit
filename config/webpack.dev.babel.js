const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = require('./paths');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(`${__dirname}/../demo/index.html`),
  filename: 'index.html',
  inject: 'body',
});

const devConfig = {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    PATHS.demo,
  ],
  output: {
    path: PATHS.build,
    filename: 'index.js',
    publicPath: '/',
  },
  context: PATHS.demo,
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: PATHS.build,
    hot: false,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [htmlPlugin],
};

module.exports = devConfig;
