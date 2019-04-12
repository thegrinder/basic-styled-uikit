export default {
  wrapper: '../../docz/Wrapper',
  codeSandbox: false,
  base: '/basic-styled-uikit/',
  modifyBabelRc: config => ({
    ...config,
    plugins: [
      ...config.plugins,
      '@babel/plugin-proposal-export-default-from',
    ],
  }),
  htmlContext: {
    head: {
      links: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700' },
      ],
      raw: [
        '<style>.border {border-width: 1px; border-style: solid;}</style>',
      ],
    },
  },
};
