import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import PATHS from './paths';

const extractSass = new ExtractTextPlugin({
  filename: 'basic-styled-uikit.css',
  disable: process.env.NODE_ENV === 'development',
});

const prodConfig = {
  mode: 'production',
  entry: [
    PATHS.src,
  ],
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
      { test: /\.inline.svg$/, use: 'svg-react-loader' },
      { test: /^(?!.*\.inline\.svg$).*\.svg$/, use: 'url-loader' },
      {
        test: /\.s?css$/,
        use: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [autoprefixer()],
              },
            },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [extractSass],
  externals: [
    'react',
    'react-dom',
    'webpack',
    'styled-components',
    'react-router-dom',
  ],
};

export default prodConfig;
