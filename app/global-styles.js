import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    font-size: 16px;
    height: 100%;
  }
  body {
    width: 100%;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }
  button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
  a {
    font-weight: 300;
  }
  input {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 300;
  }
`;
