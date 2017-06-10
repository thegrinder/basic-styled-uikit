import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Button from 'components/Button/Button';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button>Button</Button>
      </ThemeProvider>
    );
  }
}

export default App;
