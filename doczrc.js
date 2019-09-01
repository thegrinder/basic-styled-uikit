export default {
  wrapper: '../../docz/Wrapper',
  codeSandbox: false,
  base: '/basic-styled-uikit/',
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato:400,700',
        },
      ],
      raw: ['<style>.border {border-width: 1px; border-style: solid;}</style>'],
    },
  },
};
