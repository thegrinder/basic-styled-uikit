import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import {
  Button, Link, Spinner, Input, PlainButton, Toggle, Container,
  Select, Textarea, Radio, Checkbox, InlineInput, InfiniteProgressBar,
  Text, Heading, Card, ColorBox, theme,
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
  background-color: #fff;
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <GlobalStyle />
      <div className="pa4">
        <ColorBox bgColor="success50" borderColor="success200" className="pa4" />
      </div>
      <div className="mb4">
        <InfiniteProgressBar />
      </div>
      <div className="mb4">
        <Heading as="h1">Heading</Heading>
        <Heading as="h2">Heading</Heading>
        <Heading as="h3">Heading</Heading>
        <Heading as="h4">Heading</Heading>
        <Heading as="h5">Heading</Heading>
        <Heading as="h6">Heading</Heading>
      </div>
      <div className="mb4">
        <Text as="p" sizing="large">Large Paragraph</Text>
        <Text as="p">Medium Paragraph</Text>
        <Text as="p" sizing="small">Small Paragraph</Text>
        <Text >Span</Text>
      </div>
      <div className="mb4">
        <ul>
          <Text as="li">List Item</Text>
          <Text as="li">List Item</Text>
        </ul>
      </div>
      <div className="mb4">
        <Card className="pa4 mw5">
          <Heading as="h5">Card Heading</Heading>
          <Text as="p">Paragraph</Text>
        </Card>
      </div>
      <div className="mb4">
        <Button btnType="basic">Basic</Button>
        <Button btnType="default">Default</Button>
        <Button btnType="primary">Primary</Button>
        <Button btnType="danger">Danger</Button>
      </div>
      <div className="mb4">
        <Button btnType="basic" btnSize="small">Small</Button>
        <Button btnType="default" btnSize="default">Default</Button>
        <Button submitting={true} btnType="primary" btnSize="large">submitting</Button>
        <Button btnType="danger" left={<Circle />}>Icon Button</Button>
      </div>
      <div className="mb4">
        <PlainButton>Plain Button</PlainButton>
      </div>
      <div className="mb4">
        <Link to="/test" linkType="default">Default Link</Link>
        <Link to="/another" linkType="muted">Muted Link</Link>
      </div>
      <div className="mb4">
        <Spinner color="success500" size={30} />
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
