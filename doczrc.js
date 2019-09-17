export default {
  wrapper: '../../docz/Wrapper',
  codeSandbox: false,
  base: '/basic-styled-uikit/',
  themeConfig: {
    mode: 'light',
  },
  modifyBabelRc: babelRc => ({
    ...babelRc,
    plugins: [...babelRc.plugins, '@babel/plugin-proposal-optional-chaining'],
  }),
};
