import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Button from 'components/Button/Button';
import Link from 'components/Link/Link';
import Spinner from 'components/Spinner/Spinner';
import theme from './theme/theme';

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
          <br />
          <div>
            <Link linkType="default">Default Link</Link>
            <br />
            <Link linkType="muted">Muted Link</Link>
          </div>
          <Spinner color="#ddd"/>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
