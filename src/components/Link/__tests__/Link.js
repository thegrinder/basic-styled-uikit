import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { ModeProvider } from '../../Mode';
import { TypographyProvider } from '../../Typography';
import theme from '../../../theme/theme';
import Link from '../Link';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <ThemeProvider theme={theme}>
        <TypographyProvider>
          <Link {...props}>{children}</Link>
        </TypographyProvider>
      </ThemeProvider>
    </ModeProvider>
  );

describe('<Link />', () => {
  it('should render correctly with default props and its children', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render correctly with custom props', () => {
    const { queryByText } = renderComponent({
      sizing: 'xs',
      linktype: 'muted',
    });
    expect(queryByText(children)).toBeTruthy();
  });

  it('should render <a> tag by default', () => {
    const { queryByText } = renderComponent();
    expect(queryByText(children).tagName).toEqual('A');
  });

  it('should render render <button> tag', () => {
    const { queryByText } = renderComponent({ as: 'button' });
    expect(queryByText(children).tagName).toEqual('BUTTON');
  });
});
