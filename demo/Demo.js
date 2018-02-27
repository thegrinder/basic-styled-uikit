import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { Button, Link, Spinner, Input, PlainButton, MenuBtn, Paragraph,
  Select, Textarea, Radio, Checkbox, CloseBtn, TrashBtn, PencilBtn, InlineInput,
  Span, H1, H2, H3, H4, H5, H6, Card, ColorBox, Aux, List, ListItem, theme } from '../src/index';
import '../src/tachyons/tachyons.scss';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="pa4">
          <div className="pa4">
            <Aux>
              <ColorBox bgColor="lightPrimary" borderColor="primary" className="pa4" />
            </Aux>
          </div>
          <div className="mb4">
            <H1 sizing="h1">Heading</H1>
            <H2 sizing="h2">Heading</H2>
            <H3 sizing="h3">Heading</H3>
            <H4 sizing="h4">Heading</H4>
            <H5 sizing="h5">Heading</H5>
            <H6 sizing="h6">Heading</H6>
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
            <List>
              <ListItem>List Item</ListItem>
              <ListItem>List Item</ListItem>
            </List>
          </div>
          <div className="mb4">
            <Card className="pa4 mw5">
              <H5>Card Heading</H5>
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
            <PlainButton>Plain Button</PlainButton>
          </div>
          <div className="mb4">
            <Link linkType="default">Default Link</Link>
            <Link linkType="muted">Muted Link</Link>
          </div>
          <div className="mb4">
            <Spinner color="#ddd" size={30} />
          </div>
          <div className="w-50 mb4">
            <Input invalid={false} value="Valid" />
          </div>
          <div className="w-50 mb4">
            <Input invalid={true} value="Invalid" />
          </div>
          <div className="w-50 mb4">
            <InlineInput
              disabled={false}
              submitting={false}
              invalid={false}
              value="Valid inline"
            />
          </div>
          <div className="w-50 mb4">
            <InlineInput
              disabled={true}
              submitting={false}
              invalid={true}
              value="Invalid inline"
            />
          </div>
          <div className="w-50 mb4">
            <InlineInput
              disabled={true}
              submitting={true}
              invalid={false}
              value="Submitting inline"
            />
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
            <CloseBtn />
            <CloseBtn iconSize={20} />
            <TrashBtn />
            <TrashBtn iconSize={20} />
            <PencilBtn />
            <PencilBtn iconSize={20} />
          </div>
          <div className="w-50 mb4">
            <MenuBtn />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
