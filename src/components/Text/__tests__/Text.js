import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../theme/theme';
import Text from '../Text';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <Text {...props}>{children}</Text>
    </ThemeProvider>
  );

describe('<Text />', () => {
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
      sizing: 'xs',
      color: 'primary',
      marginBottom: true,
      ignoreBackground: true,
    });
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <span> tag by default', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('SPAN');
  });

  it('should render render <p> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent({ as: 'p' });
    expect(firstChild.tagName).toEqual('P');
  });
});
