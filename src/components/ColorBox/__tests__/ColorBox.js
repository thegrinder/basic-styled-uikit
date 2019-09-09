import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

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
  it('should render correctly with default props and children', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const { queryByText } = renderComponent({
      bgColor: 'primary',
      borderColor: 'success',
    });
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render <div> tag', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children).tagName).toEqual('DIV');
  });
});
