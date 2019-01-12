import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import {
  Button, Link, Input, PlainButton, Toggle,
  Select, Textarea, Radio, Checkbox, InlineInput,
  Text, Heading, ColorBox, theme, getColor,
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
  background-color: ${getColor('white')};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <GlobalStyle />
      <div>
        <ColorBox bgColor="washedSuccess" borderColor="success">
          blasdfads
        </ColorBox>
      </div>
      <div>
        <Heading as="h1" color="darkest">Heading</Heading>
        <Heading as="h2" color="darker" marginBottom>Heading with margin</Heading>
        <Heading as="h3">Heading</Heading>
        <Heading as="h4" marginBottom color="lighter">Heading with margin</Heading>
        <Heading as="h5" color="lightest">Heading</Heading>
        <Heading as="h6" color="primary">Heading</Heading>
      </div>
      <div>
        <Text as="p" sizing="l" color="dark" marginBottom>Large Paragraph</Text>
        <Text as="p">Medium Paragraph</Text>
        <Text as="p" color="light" sizing="s">Small Paragraph</Text>
        <Text as="p" sizing="xs">Extra small Paragraph</Text>
        <Text >Span</Text>
      </div>
      <div>
        <ul>
          <Text as="li">List Item</Text>
          <Text as="li">List Item</Text>
        </ul>
      </div>
      <div>
        <Button btnType="basic">Basic</Button>
        <Button btnType="default">Default</Button>
        <Button btnType="primary">Primary</Button>
        <Button btnType="danger">Danger</Button>
      </div>
      <div>
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
      <div>
        <PlainButton>Plain Button</PlainButton>
      </div>
      <div>
        <Link href="#">Default Link</Link>
        <Link linktype="muted" href="#">Muted Link</Link>
      </div>
      <div>
        <Input invalid={false} value="Valid" />
      </div>
      <div>
        <Input invalid={true} value="Invalid" />
      </div>
      <div>
        <InlineInput
          disabled={false}
          submitting={false}
          invalid={false}
          value="Valid inline"
        />
      </div>
      <div>
        <InlineInput
          disabled={true}
          submitting={false}
          invalid={true}
          value="Invalid inline"
        />
      </div>
      <div>
        <InlineInput
          disabled={true}
          submitting={true}
          invalid={false}
          renderSpinner={<span>spinner</span>}
          value="Submitting inline"
        />
      </div>
      <div>
        <Select>
          <option>Option one</option>
          <option>Option two</option>
        </Select>
      </div>
      <div>
        <Textarea rows={5}/>
      </div>
      <div>
        <Radio />
        <Radio />
      </div>
      <div>
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
