import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import theme from '../../../theme/theme';
import Heading from '../Heading';


const children = 'children';

const renderComponent = props => render(
  <ThemeProvider theme={theme}>
    <Heading as="h1" {...props}>{children}</Heading>
  </ThemeProvider>,
);

describe('<Text />', () => {
  afterEach(cleanup);

  it('should render correctly with default props', () => {
    const { getByText } = renderComponent();
    const component = getByText(children);
    expect(component).toBeDefined();
    expect(component).toHaveTextContent(children);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const { getByText } = renderComponent({
      as: 'h3',
      color: 'primary',
      marginBottom: true,
    });
    const component = getByText(children);
    expect(component).toBeDefined();
    expect(component).toHaveTextContent(children);
    expect(component).toMatchSnapshot();
  });

  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach((sizing) => {
    it(`should render <${sizing}> tag`, () => {
      const { getByText } = renderComponent({ as: sizing });
      const component = getByText(children);
      expect(component.tagName).toEqual(sizing.toUpperCase());
      expect(component).toMatchSnapshot();
    });
  });

  it('should render should large <h6> heading', () => {
    const { getByText } = renderComponent({ sizing: 'h1', as: 'h6' });
    const component = getByText(children);
    expect(component.tagName).toEqual('H6');
    expect(component).toMatchSnapshot();
  });
});
