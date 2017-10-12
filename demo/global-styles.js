import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
    box-sizing: border-box;
  }
  html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
  button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
  }
  input, textarea, select {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }
`;
