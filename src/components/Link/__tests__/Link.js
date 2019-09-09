import React from 'react';
import { render } from '@testing-library/react';
import { ModeProvider } from '../../Mode';
import { TypographyProvider } from '../../Typography';
import LinkProvider from '../LinkProvider';
import Link from '../Link';

const children = 'children';

const renderComponent = (props = {}) =>
  render(
    <ModeProvider>
      <TypographyProvider>
        <LinkProvider>
          <Link {...props}>{children}</Link>
        </LinkProvider>
      </TypographyProvider>
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
