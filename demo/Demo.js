import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { Button, Link, Spinner, Input,
  Select, Textarea, Radio, Checkbox,
  Notification, Alert, Close, Paragraph,
  Span, Heading, Card, theme } from '../src/index';

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
        <div className="pa4">
          <div className="mb4">
            <Heading sizing="h1">Heading</Heading>
            <Heading sizing="h2">Heading</Heading>
            <Heading sizing="h3">Heading</Heading>
            <Heading sizing="h4">Heading</Heading>
            <Heading sizing="h5">Heading</Heading>
            <Heading sizing="h6">Heading</Heading>
          </div>
          <div className="mb4">
            <Paragraph sizing="large">Large paragraph</Paragraph>
            <Paragraph>Medium paragraph</Paragraph>
            <Paragraph sizing="small">Small paragraph</Paragraph>
            <Paragraph colour="lightest">Lightest Paragraph</Paragraph>
            <Paragraph colour="light">Light Paragraph</Paragraph>
            <Span>Span</Span>
          </div>
          <div className="mb4">
            <Card className="pa4 mw5">
              <Heading sizing="h5">Card Heading</Heading>
              <Paragraph>Paragraph</Paragraph>
            </Card>
          </div>
          <div className="mb4">
            <Button btnType="default">Default</Button>
            <Button btnType="primary">Primary</Button>
            <Button btnType="secondary">Secondary</Button>
            <Button btnType="danger">Danger</Button>
          </div>
          <div className="mb4">
            <Button btnType="default" btnSize="small">Small</Button>
            <Button btnType="primary" btnSize="default">Default</Button>
            <Button btnType="secondary" btnSize="large">Large</Button>
          </div>
          <div className="mb4">
            <Link linkType="default">Default Link</Link>
            <Link linkType="muted">Muted Link</Link>
          </div>
          <div className="mb4">
            <Spinner color="#ddd" size={30} />
          </div>
          <div className="w-50 mb4">
            <Input isValid={true} value="Valid" />
          </div>
          <div className="w-50 mb4">
            <Input isValid={false} value="Invalid" />
          </div>
          <div className="w-50 mb4">
            <Select>
              <option>Option one</option>
              <option>Option two</option>
            </Select>
          </div>
          <div className="w-50 mb4">
            <Textarea rows={5}/>
          </div>
          <div className="w-50 mb4">
            <Radio />
            <Radio />
          </div>
          <div className="w-50 mb4">
            <Checkbox />
            <Checkbox />
          </div>
          <div className="w-50 mb4">
            <Close />
            <Close iconSize={20} />
          </div>
          <div className="w-50 mb4">
            <Notification status="default">Default</Notification>
            <Notification status="primary">Primary</Notification>
            <Notification status="warning">Warning</Notification>
            <Notification status="success">Success</Notification>
            <Notification status="danger">Danger</Notification>
          </div>
          <div className="w-50 mb4">
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
