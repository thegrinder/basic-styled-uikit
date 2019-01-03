import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import {
  Button, Link, Spinner, Input, PlainButton, Paragraph, Toggle, Container,
  Select, Textarea, Radio, Checkbox, InlineInput, InfiniteProgressBar,
  Span, H1, H2, H3, H4, H5, H6, Card, ColorBox, List, ListItem, theme,
} from '../src/index';
import '../src/tachyons/tachyons.scss';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Lato;
  }
`;

const Circle = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin: 0 15px;
  background-color: #000;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <div className="pa4">
        <ColorBox bgColor="lightPrimary" borderColor="primary" className="pa4" />
      </div>
      <div className="mb4">
        <InfiniteProgressBar />
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
        <Button submitting={true} btnType="primary">submitting</Button>
        <Button left={<Circle />}>Icon Button</Button>
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
      <div>
        <Toggle onChange={(e) => { console.log(e.target.checked); }}/>
      </div>
    </Container>
  </ThemeProvider>
);

export default App;
