import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../theme/theme';
import Heading from '../Heading';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <Heading as="h1" {...props}>
        {children}
      </Heading>
    </ThemeProvider>
  );

describe('<Heading />', () => {
  it('should render correctly with default props', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom props', () => {
    const {
      container: { firstChild },
    } = renderComponent({
      as: 'h3',
      color: 'primary',
      marginBottom: true,
    });
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });

  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(sizing => {
    it(`should render <${sizing}> tag`, () => {
      const {
        container: { firstChild },
      } = renderComponent({
        as: sizing,
      });
      expect(firstChild.tagName).toEqual(sizing.toUpperCase());
    });
  });

  it('should render should large <h6> heading', () => {
    const {
      container: { firstChild },
    } = renderComponent({
      sizing: 'h1',
      as: 'h6',
    });
    expect(firstChild.tagName).toEqual('H6');
  });
});
