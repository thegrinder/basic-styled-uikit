import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  html {
    font-family: 'Inter', sans-serif;
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: 'Inter var', sans-serif;
    }
  }

  * {
    margin: 0;
  }
`;

export default GlobalStyle;
