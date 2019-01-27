const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
  demo: path.join(__dirname, 'demo'),
  build: path.join(__dirname, 'dist'),
};

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
};

const styledComponentsExternal = {
  root: 'styled',
  commonjs2: 'styled-components',
  commonjs: 'styled-components',
  amd: 'styled-components',
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
  externals: {
    react: reactExternal,
    'styled-components': styledComponentsExternal,
  },
};

module.exports = config;
