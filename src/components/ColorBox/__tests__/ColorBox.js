import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';

import theme from '../../../theme/theme';
import ColorBox from '../ColorBox';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <ThemeProvider theme={theme}>
      <ColorBox {...props}>{children}</ColorBox>
    </ThemeProvider>
  );

describe('<ColorBox />', () => {
  afterEach(cleanup);

  it('should render correctly with default props and children', () => {
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
      bgColor: 'primary',
      borderColor: 'success',
    });
    expect(firstChild).toBeDefined();
    expect(firstChild).toHaveTextContent(children);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render <div> tag', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild.tagName).toEqual('DIV');
    expect(firstChild).toMatchSnapshot();
  });
});
