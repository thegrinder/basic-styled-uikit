import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { Button, Link, Spinner, Input,
  Select, Textarea, Radio, Checkbox, Close, Paragraph,
  Span, Heading, Card, ColorBox, theme } from '../src/index';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="pa4">
          <div className="pa4">
            <ColorBox bgColor="lightPrimary" borderColor="primary" className="pa4" />
          </div>
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
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
