import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 16px;
    height: 100%;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    height: 100%;
  }
  button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
  a {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
  }
  input, textarea {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }
`;
