import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  * {
    margin: 0;
  }

  html {
    font-family: 'Inter', sans-serif;
  }

  .margin-bottom {
    display: block;
    margin-bottom: 16px;
  }

  .padding {
    padding: 16px;
  }

  .max-width-m {
    max-width: 300px;
  }

  .max-width-s {
    max-width: 70px;
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: 'Inter var', sans-serif;
    }
  }
`;

export default GlobalStyle;
