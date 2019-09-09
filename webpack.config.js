const path = require('path');

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
  entry: {
    index: './src/index.js',
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
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
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    react: reactExternal,
    'styled-components': styledComponentsExternal,
  },
};

module.exports = config;
