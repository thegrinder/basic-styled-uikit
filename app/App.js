import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Button from 'components/Button/Button';
import Link from 'components/Link/Link';
import Spinner from 'components/Spinner/Spinner';
import Input from 'components/Form/Input/Input';
import Select from 'components/Form/Select/Select';
import Textarea from 'components/Form/Textarea/Textarea';
import Radio from 'components/Form/Radio/Radio';
import Checkbox from 'components/Form/Checkbox/Checkbox';
import Notification from 'components/Notification/Notification';
import Alert from 'components/Alert/Alert';
import Close from 'components/Close/Close';
import theme from './theme';

const AlertClose = () => (
  <Close
    style={{ position: 'absolute', right: '15px', top: '20px' }}
    btnColor="inherit"
    btnHoverColor="inherit"
  />
);

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
            <Input isValid={true} value="Valid" />
          </div>
          <div style={{ width: '50%', marginBottom: '20px' }}>
            <Input isValid={false} value="Invalid" />
          </div>
          <div style={{ width: '50%', marginBottom: '20px' }}>
            <Select>
              <option>Option one</option>
              <option>Option two</option>
            </Select>
          </div>
          <div style={{ width: '50%', marginBottom: '20px' }}>
            <Textarea rows={5}/>
          </div>
          <div style={{ width: '50%', marginBottom: '20px' }}>
            <Radio />
            <Radio />
          </div>
          <div style={{ width: '50%', marginBottom: '20px' }}>
            <Checkbox />
            <Checkbox />
          </div>
          <div style={{ width: '50%', marginBottom: '20px' }}>
            <Close />
            <Close iconSize={20} />
          </div>
          <div style={{ width: '50%', marginBottom: '20px' }}>
            <Notification status="default">Default</Notification>
            <Notification status="primary">Primary</Notification>
            <Notification status="warning">Warning</Notification>
            <Notification status="success">Success</Notification>
            <Notification status="danger">Danger</Notification>
          </div>
          <div style={{ width: '50%', marginBottom: '20px' }}>
            <Alert status="default">Default<AlertClose /></Alert>
            <Alert status="primary">Primary<AlertClose /></Alert>
            <Alert status="warning">Warning<AlertClose /></Alert>
            <Alert status="success">Success<AlertClose /></Alert>
            <Alert status="danger">Danger<AlertClose /></Alert>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
