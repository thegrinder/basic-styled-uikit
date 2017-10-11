import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import PATHS from './paths';

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  },
});
const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  comments: false,
  beautify: false,
  mangle: {
    screw_ie8: true,
    keep_fnames: true,
  },
  compress: {
    screw_ie8: true,
  },
});
const extractSass = new ExtractTextPlugin({
  filename: 'basic-styled-uikit.css',
  disable: process.env.NODE_ENV === 'development',
});

const prodConfig = {
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
        test: /\.scss$/,
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
  plugins: [productionPlugin, uglifyJsPlugin, extractSass],
  externals: [
    'react',
    'react-dom',
    'webpack',
    'styled-components',
    'react-router-dom',
  ],
};

export default prodConfig;
