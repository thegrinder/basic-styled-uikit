import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Button from 'components/Button/Button';
import Link from 'components/Link/Link';
import Spinner from 'components/Spinner/Spinner';
import TextInput from 'components/Form/TextInput/TextInput';
import Textarea from 'components/Form/Textarea/Textarea';
import Notification from 'components/Notification/Notification';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <Button btnType="default">Default</Button>
            <Button btnType="primary">Primary</Button>
            <Button btnType="secondary">Secondary</Button>
            <Button btnType="danger">Danger</Button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Button btnType="default" btnSize="small">Small</Button>
            <Button btnType="primary" btnSize="default">Default</Button>
            <Button btnType="secondary" btnSize="large">Large</Button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Link linkType="default">Default Link</Link>
            <Link linkType="muted">Muted Link</Link>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <Spinner color="#ddd" size={30} />
          </div>
          <div style={{ width: '50%', marginBottom: '20px' }}>
            <TextInput isValid={true} value="Valid" />
          </div>
          <div style={{ width: '50%', marginBottom: '20px' }}>
            <TextInput isValid={false} value="Invalid" />
          </div>
          <div style={{ width: '50%', marginBottom: '20px' }}>
            <Textarea rows={5}/>
          </div>
          <div style={{ width: '50%', marginBottom: '20px' }}>
            <Notification status="default">Default</Notification>
            <Notification status="primary">Primary</Notification>
            <Notification status="warning">Warning</Notification>
            <Notification status="success">Success</Notification>
            <Notification status="danger">Danger</Notification>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
