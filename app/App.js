import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Button from 'components/Button/Button';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Button btnType="default">Default</Button>
          <Button btnType="primary">Primary</Button>
          <Button btnType="secondary">Secondary</Button>
          <Button btnType="danger">Danger</Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
