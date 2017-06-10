import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import Button from 'components/Button/Button';

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
