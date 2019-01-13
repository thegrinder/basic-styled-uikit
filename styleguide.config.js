/* eslint-disable */
const path = require('path');
const webpackConfig = require('./config/webpack.dev.js');

module.exports = {
  webpackConfig,
  components: 'src/components/**/[A-Z]*.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/ThemeWrapper'),
  },
};
