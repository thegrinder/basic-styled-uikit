const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
  demo: path.join(__dirname, 'demo'),
  build: path.join(__dirname, 'dist'),
};

const config = {
  mode: 'production',
  entry: [
    PATHS.src,
  ],
  devtool: 'source-map',
  output: {
    path: PATHS.build,
    filename: 'index.js',
    publicPath: '/',
    library: 'basicStyledUiKit',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: [
          PATHS.demo,
          /node_modules/,
        ],
      },
    ],
  },
  externals: [
    'react',
    'styled-components',
  ],
};

module.exports = config;
