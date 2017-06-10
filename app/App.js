import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Button from 'components/Button/Button';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <div>
            <Button btnType="default">Default</Button>
            <Button btnType="primary">Primary</Button>
            <Button btnType="secondary">Secondary</Button>
            <Button btnType="danger">Danger</Button>
          </div>
          <br />
          <div>
            <Button btnType="default" btnSize="small">Small</Button>
            <Button btnType="primary" btnSize="default">Default</Button>
            <Button btnType="secondary" btnSize="large">Large</Button>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
