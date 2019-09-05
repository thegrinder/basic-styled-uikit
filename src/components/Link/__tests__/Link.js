import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from '../../../theme/theme';
import Link from '../Link';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <Link {...props}>{children}</Link>
    </ThemeProvider>
  );

describe('<Link />', () => {
  it('should render correctly with default props and its children', () => {
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
      linktype: 'muted',
    });
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <a> tag by default', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('A');
  });

  it('should render render <button> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent({ as: 'button' });
    expect(firstChild.tagName).toEqual('BUTTON');
    expect(firstChild).toMatchSnapshot();
  });
});
