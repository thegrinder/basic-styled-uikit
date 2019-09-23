import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  * {
    margin: 0;
  }

  html {
    font-family: 'Inter', sans-serif;
  }

  html .margin-bottom {
    display: block;
    margin-bottom: 16px;
  }

  html .padding {
    padding: 16px;
  }

  html .max-width-m {
    max-width: 300px;
  }

  html .max-width-s {
    max-width: 70px;
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: 'Inter var', sans-serif;
    }
  }
`;

export default GlobalStyle;
