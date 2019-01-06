import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import {
  Button, Link, Input, PlainButton, Toggle,
  Select, Textarea, Radio, Checkbox, InlineInput,
  Text, Heading, ColorBox, theme,
} from '../src/index';

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
    <div>
      <GlobalStyle />
      <div className="pa4">
        <ColorBox bgColor="washedSuccess" borderColor="success" className="ba pa4">
          blasdfads
        </ColorBox>
      </div>
      <div className="mb4">
        <Heading as="h1" color="darkest">Heading</Heading>
        <Heading as="h2" color="darker" marginBottom>Heading with margin</Heading>
        <Heading as="h3">Heading</Heading>
        <Heading as="h4" marginBottom color="lighter">Heading with margin</Heading>
        <Heading as="h5" color="lightest">Heading</Heading>
        <Heading as="h6" color="primary">Heading</Heading>
      </div>
      <div className="mb4">
        <Text as="p" sizing="t1" color="dark">Large Paragraph</Text>
        <Text as="p">Medium Paragraph</Text>
        <Text as="p" color="light" sizing="t3">Small Paragraph</Text>
        <Text as="p" sizing="t3">Small Paragraph</Text>
        <Text >Span</Text>
      </div>
      <div className="mb4">
        <ul>
          <Text as="li">List Item</Text>
          <Text as="li">List Item</Text>
        </ul>
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
        <Button
          submitting={true}
          btnType="primary"
          btnSize="large"
          renderSpinner={<span>spinner</span>}
        >
          submitting
        </Button>
        <Button btnType="danger" left={<Circle />}>Icon Button</Button>
      </div>
      <div className="mb4">
        <PlainButton>Plain Button</PlainButton>
      </div>
      <div className="mb4">
        <Link href="#">Default Link</Link>
        <Link linktype="muted" href="#">Muted Link</Link>
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
          renderSpinner={<span>spinner</span>}
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
    </div>
  </ThemeProvider>
);

export default App;
